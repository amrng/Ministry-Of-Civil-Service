import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "../../App/api/NewsCrud";
import { EditNews } from "./EditNews";

interface Iprops {
  id: string;
  imgsValue: string[];
  videoValue: string[];
}

const CardOption = ({ id, imgsValue, videoValue }: Iprops) => {
  const [isDeleteing, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

  const handleDeletePost = useMutation({
    mutationFn: deletePost,
    onMutate: () => {
      setIsDeleting(true);
    },
    onSuccess: () => {
      setIsDeleting(false);
      queryClient.invalidateQueries({ queryKey: ["News"] });
    },
    onError: (err) => {
      setIsDeleting(false);
      console.log(err);
    },
  });

  const onDelete = (id: string) => {
    handleDeletePost.mutate(id);
  };

  return (
    <Box padding={1}>
      <Stack direction="row" justifyContent={"space-evenly"} gap={2}>
        <EditNews idValue={id} imgsValue={imgsValue} videoValue={videoValue} />
        <Button
          onClick={() => onDelete(id)}
          variant="text"
          color="error"
          sx={{ borderRadius: 14 }}
          size="medium"
          startIcon={<DeleteOutlineTwoToneIcon />}>
          {isDeleteing ? "loading" : "Delete"}
        </Button>
      </Stack>
    </Box>
  );
};

export default CardOption;
