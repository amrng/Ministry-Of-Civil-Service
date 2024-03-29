import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActions, Chip } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ShowNewsList } from "../Shared/interfaces/interface";
import Paginator from "./Features/Paginator";
import { baseURL } from "../App/api/axios.config";
import Divider from "@mui/material/Divider";
import { ShareSocial } from "./Features/ShareSocial";
import CardOption from "./Features/CardOption";
import { useQuery } from "@tanstack/react-query";
import { showNews } from "../App/api/NewsCrud";
import { ReadMore } from "../Shared/Styles/AppStyles";
import { useNavigate } from "react-router-dom";

interface Iprops {
  isAdmin: boolean;
  category: string;
}

export default function ShowPosts({ isAdmin, category }: Iprops) {
  const navigate = useNavigate();
  const { data, isLoading, error } = useQuery({
    queryKey: ["News"],
    queryFn: () => showNews(category),
  });

  const handleGoDetails = (category: string, title: string, postId: string) => {
    navigate(`${category}/${title}/${postId}`);
  };

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (data?.posts.length === 0) {
    return <h1>No News !!!</h1>;
  }
  if (error) {
    console.log(error);
  }

  return (
    <Box flexGrow={1}>
      <Grid container spacing={8} justifyContent={"center"}>
        {data?.posts.map((post: ShowNewsList) => (
          <Grid item xs={12} md={12} lg={6} key={post._id}>
            <Card
              elevation={8}
              sx={{
                height: "560px",
                backgroundColor: "inherit",
                borderRadius: 8,
                position: "relative",
              }}>
              <CardMedia
                sx={{ height: 222, objectFit: "fill" }}
                component="img"
                image={`${baseURL}post/media/${post.img_url[0]}`}
                alt="Ministry of civil services"
              />
              <Divider />
              <CardContent sx={{ height: "171px" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  fontWeight={700}
                  component="h1">
                  {post.title}
                </Typography>
                <Typography
                  variant="body1"
                  component={"h2"}
                  color="text.secondary">
                  {post.description}
                </Typography>
              </CardContent>

              {isAdmin ? null : (
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <ReadMore
                    variant="text"
                    size="large"
                    onClick={() =>
                      handleGoDetails(category, post.title, post._id)
                    }>
                    Read More
                  </ReadMore>
                </CardActions>
              )}

              {isAdmin ? (
                <>
                  <Divider textAlign="left">
                    <Chip
                      label="Share Social Media"
                      color="info"
                      size="small"
                    />
                  </Divider>

                  <ShareSocial />

                  <Divider />
                  <CardOption
                    id={post._id}
                    imgsValue={post.img_url}
                    videoValue={post.video_url}
                  />
                </>
              ) : null}
            </Card>
          </Grid>
        ))}
      </Grid>
      {data?.posts.length > 10 ? <Paginator /> : null}
    </Box>
  );
}
