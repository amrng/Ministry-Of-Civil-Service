import { useFormik } from "formik";
import { CreateNewNews } from "../../Shared/interfaces/interface";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Box, alpha } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../../App/api/NewsCrud";
import { AppButton, VisuallyHiddenInput } from "../../Shared/Styles/AppStyles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<string, string>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function CreateNews() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState<any[]>([]);
  const queryClient = useQueryClient();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const initialValues = {
    title: "",
    description: "",
    media: null,
  };

  const handleSubmitPost = useMutation({
    mutationFn: createPost,
    onSettled: () => {
      // formik.resetForm();
      // handleClose();
      queryClient.invalidateQueries({ queryKey: ["News"] });
      // setUrl((prev) => prev.filter((file) => !file));
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (values: CreateNewNews) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    if (url.length >= 1) {
      for (let file of url) {
        formData.append("media", file);
      }
    }
    handleSubmitPost.mutate(formData);
  };

  const formik = useFormik<CreateNewNews>({
    initialValues,
    onSubmit,
  });

  if (handleSubmitPost.error) {
    console.log(handleSubmitPost.error);
  }

  const handleRemoveUrlImage = (name: string) => {
    setUrl((prev) => {
      return prev.filter((file) => file.name !== name);
    });
  };

  const videoTest = (word: string) => new RegExp(/^video/).test(word);

  return (
    <>
      <Button
        sx={{
          borderRadius: "16px",
          color: "#013756",
          border: "1px solid #013756",
          padding: "8px 14px",
          backgroundColor: alpha("#CEA672", 0.1),
          "&:hover": {
            backgroundColor: alpha("#CEA672", 0.15),
            border: "1px solid #013756",
          },
        }}
        variant="outlined"
        onClick={handleClickOpen}>
        Create News +
      </Button>
      <Dialog
        fullScreen
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle
          sx={{ color: "#013756", textAlign: "center", fontSize: "2rem" }}>
          Create News
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                flexWrap: "wrap",
                gap: 2,
                transition: "0.3s all",
              }}>
              {url?.map((img, i) => {
                const imgs = URL.createObjectURL(img);
                return (
                  <Box
                    key={i}
                    sx={{
                      border: "1px solid #013756",
                      width: "130px",
                      borderRadius: "14px",
                      ":hover": { opacity: 0.6, transition: "0.3s all" },
                      position: "relative",
                      transition: "0.3s all",
                    }}>
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

                    <Button
                      onClick={() => {
                        handleRemoveUrlImage(img.name);
                      }}
                      startIcon={<CloseIcon />}
                      size="large"
                      color="error"
                      sx={{
                        position: "absolute",
                        top: "0",
                        right: "0",
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        ":hover": { opacity: 1, transition: "0.3s all" },
                        transition: "0.3s all",
                      }}>
                      Delete
                    </Button>
                  </Box>
                );
              })}
            </Box>

            <DialogActions
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
              }}>
              <AppButton type="submit">
                {handleSubmitPost.isPending ||
                handleSubmitPost.status !== "success"
                  ? "Loading"
                  : "Submit"}
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
}
