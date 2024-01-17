import { useFormik } from "formik";
import { CreateNewNews, PostData } from "../../Shared/interfaces/interface";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePostMedia, editPost } from "../../App/api/NewsCrud";
import {
  AppButton,
  ImageBox,
  RemoveImageButton,
  ViewImages,
  VisuallyHiddenInput,
} from "../../Shared/Styles/AppStyles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import { baseURL } from "../../App/api/axios.config";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<string, string>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface Iprops {
  idValue: string;
  imgsValue: string[];
  videoValue: string[];
}

export const EditNews = ({ idValue, imgsValue, videoValue }: Iprops) => {
  const [open, setOpen] = useState(false);
  const [isLoading] = useState(false);
  const [url, setUrl] = useState<any[]>([]);
  const [deleteActive, setDeleteActive] = useState("");
  //   const [titleValue, setTitleValue] = useState<string>();
  //   const [descriptionValue, setdescriptionValue] = useState<string>();
  const queryClient = useQueryClient();

  const initialValues = {
    title: "",
    description: "",
    media: null,
  };

  const handleClickOpen = () => {
    const postData: PostData | undefined = queryClient.getQueryData(["News"]);
    queryClient.invalidateQueries({ queryKey: ["News"] });
    if (postData?.posts) {
      return postData.posts.map((post) => {
        if (post._id === idValue) {
          initialValues.title = post.title;
          initialValues.description = post.description;
          setOpen(true);
        }
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formData = new FormData();
  const handleSubmitPost = useMutation({
    mutationFn: () => editPost(idValue, formData),
    onSuccess: () => {
      formik.resetForm();
      handleClose();
      queryClient.invalidateQueries({ queryKey: ["News"] });
      setUrl((prev) => prev.filter((file) => !file));
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (values: CreateNewNews) => {
    formData.append("title", values.title);
    formData.append("description", values.description);
    if (url.length >= 1) {
      for (let file of url) {
        formData.append("media", file);
      }
    }
    handleSubmitPost.mutate();
  };

  const formik = useFormik<CreateNewNews>({
    initialValues,
    onSubmit,
  });

  const handleRemoveUrlImage = (name: string) => {
    setUrl((prev) => {
      return prev.filter((file) => file.name !== name);
    });
  };

  const videoTest = (word: string) => new RegExp(/^video/).test(word);
  const handleDeletePostMedia = useMutation({
    mutationFn: () => deletePostMedia(idValue, deleteActive),
    mutationKey: ["deleteMediaPost", deleteActive],
    onSuccess: () => {
      console.log("hi fucker");
      queryClient.invalidateQueries({ queryKey: ["News"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteMedia = () => handleDeletePostMedia.mutate();

  return (
    <>
      <Button
        variant="text"
        color="primary"
        sx={{ borderRadius: 14 }}
        size="medium"
        startIcon={<EditNoteTwoToneIcon />}
        onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle
          gutterBottom
          sx={{
            color: "#013756",
            textAlign: "center",
            fontSize: "2rem",
            boxShadow: "0 0 5px #013756",
          }}>
          Edit News
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={formik.handleSubmit}
            className=" flex flex-col items-center w-full space-y-5">
            {/* News Title */}
            <input
              className="rounded-lg focus:outline-none w-1/3 border border-[#CEA672] p-4 h-10
            focus:placeholder:opacity-0"
              type="text"
              name="title"
              autoComplete="off"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              placeholder="Title"
              autoCapitalize="true"
            />

            {/* News Description */}
            <textarea
              className="rounded-lg focus:outline-none border border-[#CEA672] w-full p-4
            focus:placeholder:opacity-0"
              rows={12}
              placeholder="Enter news description"
              autoComplete="off"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />

            {/* Upload an image */}
            <Button
              component="label"
              sx={{
                color: "#013756",
                backgroundColor: "#F4EEE3",
                ":hover": {
                  boxShadow: "0px 0px 10px 2px #013756",
                },
                borderRadius: "16px",
                padding: "6px 15px",
                fontSize: 16,
              }}
              startIcon={<CloudUploadIcon />}>
              Upload Images and Videos
              <VisuallyHiddenInput
                type="file"
                name="media"
                multiple
                onChange={(event) => {
                  if (event?.target?.files) {
                    for (let file of event?.target.files) {
                      setUrl((prev) => {
                        return [...prev, file];
                      });
                    }
                  }
                }}
                onBlur={formik.handleBlur}
              />
            </Button>
            <Box>
              <Typography
                sx={{ textAlign: "center", p: 3, color: "#013756" }}
                variant="h6"
                component={"p"}>
                Current Media
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "end",
                  flexWrap: "wrap",
                  gap: 2,
                  transition: "0.3s all",
                }}>
                {" "}
                {imgsValue?.map((img, i) => {
                  return (
                    <ViewImages key={i}>
                      <img
                        style={{
                          borderRadius: "14px",
                          objectFit: "fill",

                          height: "130px",
                        }}
                        src={`${baseURL}post/media/${img}`}
                        alt="Media"
                        width={"100%"}
                      />

                      <RemoveImageButton
                        onClick={() => {
                          setDeleteActive(img);
                          deleteMedia();
                        }}
                        startIcon={<CloseIcon />}
                        size="large"
                        color="error">
                        Delete
                      </RemoveImageButton>
                    </ViewImages>
                  );
                })}
                {videoValue?.map((img, i) => {
                  return (
                    <ViewImages key={i}>
                      <video
                        style={{
                          borderRadius: "14px",
                          objectFit: "fill",

                          height: "130px",
                        }}
                        src={`${baseURL}post/media/${img}`}
                        width={"100%"}
                      />

                      <RemoveImageButton
                        onClick={() => {
                          setDeleteActive(img);
                          deleteMedia();
                        }}
                        startIcon={<CloseIcon />}
                        size="large"
                        color="error">
                        Delete
                      </RemoveImageButton>
                    </ViewImages>
                  );
                })}
              </Box>

              {url?.length >= 1 ? (
                <Typography
                  sx={{ textAlign: "center", p: 3, color: "#013756" }}
                  variant="h6"
                  component={"p"}>
                  New Media
                </Typography>
              ) : null}
              <ImageBox>
                {url?.map((img, i) => {
                  const imgs = URL.createObjectURL(img);
                  return (
                    <ViewImages key={i}>
                      {videoTest(img.type) ? null : (
                        <img
                          style={{
                            borderRadius: "14px",
                            objectFit: "fill",

                            height: "130px",
                          }}
                          src={imgs}
                          alt="Sora"
                          width={"100%"}
                        />
                      )}

                      {videoTest(img.type) ? (
                        <video
                          src={imgs}
                          style={{
                            borderRadius: "14px",
                            objectFit: "cover",
                            height: "130px",
                          }}
                          width={"100%"}
                        />
                      ) : null}

                      <RemoveImageButton
                        onClick={() => {
                          handleRemoveUrlImage(img.name);
                        }}
                        startIcon={<CloseIcon />}
                        size="large"
                        color="error">
                        Delete
                      </RemoveImageButton>
                    </ViewImages>
                  );
                })}
              </ImageBox>
            </Box>

            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}>
              <AppButton type="submit">
                {isLoading ? "Loading" : "Submit"}
              </AppButton>
              <AppButton type="button" onClick={handleClose}>
                Close
              </AppButton>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
