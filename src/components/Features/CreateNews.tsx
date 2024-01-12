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
import { alpha } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "../../App/api/NewsCrud";
import { AppButton, VisuallyHiddenInput } from "../../Shared/Styles/AppStyles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<string, string>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateNews() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    onSuccess: () => {
      formik.resetForm();
      handleClose();
      queryClient.invalidateQueries({ queryKey: ["News"] });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const onSubmit = (values: CreateNewNews) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    if (values.media) {
      for (let i = 0; i < values.media.length; i++) {
        formData.append("media", values.media[i]);
      }
    }
    handleSubmitPost.mutate(formData);
  };

  const formik = useFormik<CreateNewNews>({
    initialValues,
    onSubmit,
  });

  // if (handleSubmitPost.isPending) {
  //   setIsLoading(true);
  // }
  // if (handleSubmitPost.error) {
  //   setIsLoading(false);
  //   console.log(handleSubmitPost.error);
  // }

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

            <textarea
              className="rounded-lg focus:outline-none border border-[#CEA672] w-full p-4
            focus:placeholder:opacity-0"
              rows={18}
              placeholder="Enter news description"
              autoComplete="off"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />

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
                  formik.setFieldValue("media", event.currentTarget.files);
                }}
                onBlur={formik.handleBlur}
              />
            </Button>

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
}
