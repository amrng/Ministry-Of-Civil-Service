import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Chip, Stack } from "@mui/material";
import useShowNews from "../Shared/Hooks/useShowNews";
import { ShowNewsList } from "../Shared/interfaces/interface";
import Paginator from "./Features/Paginator";
import { baseURL } from "../App/api/axios.config";
import Divider from "@mui/material/Divider";
import { ShareSocial } from "./Features/ShareSocial";
import CardOption from "./Features/CardOption";

interface Iprops {
  isAdmin: boolean;
}

export default function ShowNews({ isAdmin }: Iprops) {
  const { data, isLoading } = useShowNews({
    queryKey: ["ShowNews"],
    url: "post/all?lang=en&page=1&limit=5",
  });
  console.log(data);

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }

  if (data?.posts.length === 0) {
    return <h1>No News !!!!</h1>;
  }

  return (
    <Box height={"100%"}>
      <Stack
        marginBottom={10}
        direction={"row"}
        gap={7}
        flexWrap={"wrap"}
        justifyContent={"start"}>
        {data?.posts.map((e: ShowNewsList) => (
          <Card
            elevation={4}
            sx={{ maxWidth: 345, width: "300px", height: "530px" }}
            key={e._id}>
            <CardMedia
              sx={{ height: 170, objectFit: "fill" }}
              component="img"
              image={`${baseURL}post/media/${e.img_url[0]}`}
              alt="Ministry of civil services"
            />
            <Divider />
            <CardContent sx={{ height: "171px" }}>
              <Typography
                gutterBottom
                variant="h6"
                fontWeight={700}
                component="h1">
                {e.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {e.description}
              </Typography>
            </CardContent>
            {isAdmin ? (
              <>
                <Divider textAlign="left">
                  <Chip label="Share Social Media" color="info" size="small" />
                </Divider>

                <ShareSocial />

                <Divider textAlign="left">
                  <Chip label="Options" color="info" size="small" />
                </Divider>
                <CardOption id={e._id} />
              </>
            ) : null}
          </Card>
        ))}
      </Stack>
      {data?.posts.length > 10 ? <Paginator /> : null}
    </Box>
  );
}
