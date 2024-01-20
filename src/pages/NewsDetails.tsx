import { useParams } from "react-router-dom";
import NewsImage from "../assets/imad.jpeg";
import { useQuery } from "@tanstack/react-query";
import { showNews } from "../App/api/NewsCrud";
import { PostData } from "../Shared/interfaces/interface";

export default function NewsDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["News"],
    queryFn: showNews,
  });

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (error) {
    return <h1>error !!!</h1>;
  }

  return (
    <section className="space-y-7">
      {data?.posts.map((post: PostData) =>
        post._id === id ? (
          <div key={id}>
            <h1 className="text-2xl lg:text-5xl md:text-3xl selection:bg-[#CEA672]">
              {post.title}
            </h1>

            <div className="text-gray-500 text-center text-sm">
              Share: FaceBook, Telegram, X
            </div>

            <div className="flex flex-col w-full gap-10">
              <div>
                <img
                  className="w-full rounded-3xl"
                  src={NewsImage}
                  alt={"title"}
                />
              </div>
              <h2>{post.description}</h2>
            </div>

            <div className="flex justify-around items-center px-4 sm:px-8">
              <p className="text-gray-500 text-sm">By: Ahmed Yousry</p>
              <p className="text-gray-500 text-sm">Date: {post.createdAt}</p>
            </div>
          </div>
        ) : null
      )}
    </section>
  );
}
