import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useShowNews from "../Shared/Hooks/useShowNews";
import { ShowNews } from "../Shared/interfaces/interface";
import Paginator from "./Features/Paginator";

export default function ShowAsAdmin() {
  const { data, isLoading } = useShowNews({
    queryKey: ["ShowNews"],
    url: "post/all?lang=en&page=1&limit=5",
  });

  console.log(data);

  if (isLoading) {
    return <div>Loading .....</div>;
  }

  if (data?.posts.length === 0) {
    return <div>No News !!!!</div>;
  }

  return (
    <section className="flex justify-evenly items-stretch w-full gap-10 flex-wrap">
      {data?.posts.map((e: ShowNews) => (
        <Card sx={{ maxWidth: 345 }} key={e._id}>
          <CardActionArea>
            <CardMedia
              sx={{ height: 170, objectFit: "fill" }}
              component="img"
              image={e.img_url[0]}
              alt="Ministry of civil services"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                fontWeight={700}
                component="div">
                {e.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {e._id}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
      <Paginator />
    </section>
  );
}
