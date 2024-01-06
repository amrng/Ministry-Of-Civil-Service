import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import EditNoteTwoToneIcon from "@mui/icons-material/EditNoteTwoTone";
import DeleteOutlineTwoToneIcon from "@mui/icons-material/DeleteOutlineTwoTone";
import axiosInstance from "../../App/api/axios.config";
import { getCookie } from "../../Shared/Functions/cookies";
import { useState } from "react";

interface Iprops {
  id: string;
}

const CardOption = ({ id }: Iprops) => {
  const [isDeleteing, setIsDeleting] = useState(false);

  const headers = {
    authorization: `CIVILSERVICEMINISTRY ${getCookie("admin-token")}`,
  };
  const onDelete = async (id: string) => {
    setIsDeleting(true);
    await axiosInstance
      .delete(`post/${id}`, { headers })
      .then((result) => {
        if (result.status === 200) {
          console.log(result);
          setIsDeleting(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box padding={1}>
      <Stack direction="row" justifyContent={"space-evenly"} gap={2}>
        <Button variant="text" size="small" startIcon={<EditNoteTwoToneIcon />}>
          Edit
        </Button>
        <Button
          onClick={() => onDelete(id)}
          variant="text"
          color="error"
          size="small"
          startIcon={<DeleteOutlineTwoToneIcon />}>
          {isDeleteing ? "loading" : "Delete"}
        </Button>
      </Stack>
    </Box>
  );
};

export default CardOption;
