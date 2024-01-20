import { useFormik } from "formik";
import { CreateNewNews } from "../Shared/interfaces/interface";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePostMedia, editPost, showNews } from "../App/api/NewsCrud";
import {
  AppButton,
  ImageBox,
  RemoveImageButton,
  ViewImages,
  VisuallyHiddenInput,
} from "../Shared/Styles/AppStyles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { baseURL } from "../App/api/axios.config";

export default function EditPost() {
  const [url, setUrl] = useState<any[]>([]);
  const [deleteActive, setDeleteActive] = useState("");
  const [imgValue, setImgValue] = useState<string[]>();
  const [titleValue, setTitleValue] = useState<string>();
  const [descriptionValue, setDescriptionValue] = useState<string>();
  const [videoValue, setVideoValue] = useState<string[]>();
  const queryClient = useQueryClient();
  const { postId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ["News"],
    queryFn: showNews,
  });

  useEffect(() => {
    post();
  }, [data]);

  const post = () =>
    data?.posts.map((post: any) => {
      if (post._id === postId) {
        setTitleValue(post.title);
        setDescriptionValue(post.description);
        setImgValue(post.img_url);
        setVideoValue(post.video_url);
      }
    });

  const initialValues = {
    title: titleValue || "",
    description: descriptionValue || "",
    media: null,
  };

  const formData = new FormData();
  const handleEditPost = useMutation({
    mutationFn: () => editPost(postId!, formData),
    onSuccess: () => {
      formik.resetForm();
      queryClient.invalidateQueries({ queryKey: ["News"] });
      setUrl((prev) => prev.filter((file) => !file));
      navigate("/admin/control/all-news");
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
    handleEditPost.mutate();
  };

  const formik = useFormik<CreateNewNews>({
    initialValues,
    onSubmit,
    enableReinitialize: true,
  });

  const handleRemoveUrlImage = (name: string) => {
    setUrl((prev) => {
      return prev.filter((file) => file.name !== name);
    });
  };

  const videoTest = (word: string) => new RegExp(/^video/).test(word);
  const { mutate } = useMutation({
    mutationFn: () => deletePostMedia(postId ? postId : "", deleteActive),
    mutationKey: ["deleteMediaPost", deleteActive],
    onMutate: () => {
      console.log(true, "mutating delete media");
    },
    onSuccess: () => {
      console.log("media deleted");
      queryClient.mount();
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const deleteMedia = () => mutate();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>error !!!</h1>;
  }
  return (
    <Box>
      <Typography
        variant="h4"
        component={"span"}
        gutterBottom
        sx={{
          color: "#013756",
          fontSize: "2rem",
          borderBottom: "3px solid #013756",
        }}>
        Edit News
      </Typography>
      <Box marginTop={3}>
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
              component={"p"}
              fontSize={16}>
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
              {imgValue?.map((img, i) => {
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
            }}>
            <AppButton type="submit">
              {handleEditPost.isPending ? "Loading" : "Update"}
            </AppButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
}
