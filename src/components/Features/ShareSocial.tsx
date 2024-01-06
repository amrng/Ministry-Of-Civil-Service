import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import CardContent from "@mui/material/CardContent";

export const ShareSocial = () => {
  return (
    <CardContent>
      <Stack direction={"row"} justifyContent={"center"}>
        <IconButton>
          <FacebookRoundedIcon color="primary" fontSize="large" />
        </IconButton>
        <IconButton>
          <FacebookRoundedIcon color="primary" fontSize="large" />
        </IconButton>
        <IconButton>
          <FacebookRoundedIcon color="primary" fontSize="large" />
        </IconButton>
        <IconButton>
          <FacebookRoundedIcon color="primary" fontSize="large" />
        </IconButton>
        <IconButton>
          <FacebookRoundedIcon color="primary" fontSize="large" />
        </IconButton>
      </Stack>
    </CardContent>
  );
};
