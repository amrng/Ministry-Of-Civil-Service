import { useFormik } from "formik";
import { CreateNewNews } from "../../Shared/interfaces/interface";
import { getCookie } from "../../Shared/Functions/cookies";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { CircularProgress } from "@mui/material";
import axiosInstance from "../../App/api/axios.config";

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

  const headers = {
    "Content-Type": "multipart/form-data",
    authorization: `CIVILSERVICEMINISTRY ${getCookie("admin-token")}`,
  };

  const onSubmit = async (values: CreateNewNews) => {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    if (values.media) {
      for (let i = 0; i < values.media.length; i++) {
        formData.append("media", values.media[i]);
      }
    }
    setIsLoading(true);
    await axiosInstance
      .post("post", formData, { headers })
      .then((result) => {
        if (result.status === 200) {
          setIsLoading(false);
          handleClose();
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const formik = useFormik<CreateNewNews>({
    initialValues,
    onSubmit,
  });

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create News +
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description">
        <DialogTitle>Create News</DialogTitle>
        <DialogContent>
          <form
            onSubmit={formik.handleSubmit}
            className=" flex flex-col items-center w-full space-y-5">
            <input
              className="rounded-lg focus:outline-none w-full border p-4 h-10
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
              className="rounded-lg focus:outline-none w-full border p-4
            focus:placeholder:opacity-0"
              rows={5}
              placeholder="Enter news description"
              autoComplete="off"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
            <input
              type="file"
              name="media"
              multiple
              onChange={(event) => {
                formik.setFieldValue("media", event.currentTarget.files);
              }}
              onBlur={formik.handleBlur}
            />
            <DialogActions>
              <button
                className="bg-[#CEA672] hover:bg-[#ffad42] duration-300 hover:text-black disabled:opacity-55 disabled:cursor-not-allowed rounded-lg px-14 py-2 text-white font-semibold"
                type="button"
                onClick={handleClose}>
                Close
              </button>
              <button
                className="bg-[#CEA672] hover:bg-[#ffad42] duration-300 hover:text-black disabled:opacity-55 disabled:cursor-not-allowed rounded-lg px-14 py-2 text-white font-semibold"
                type="submit">
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} thickness={5} />
                ) : (
                  "Submit"
                )}
              </button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
