import Link from "next/link";
import * as Article from "./PostList.styled";

type PostListProps = {
  data: Post[];
};

export default function PostList({ data }: PostListProps) {
  return (
    <>
      {data.map((p, i) => (
        <Post data={p} key={i} />
      ))}
    </>
  );
}

type PostProps = {
  data: Post;
};

function Post({ data }: PostProps) {
  return (
    <Link href={`/posts/${encodeURI(data.date)}`}>
      <Article.default>
        {data.media_type === "image" ? (
          <Article.__Img src={data.hdurl || data.url} alt={data.title} />
        ) : (
          <Article.__VideoSkeleton />
        )}
        <Article.__H2>{data.title}</Article.__H2>
      </Article.default>
    </Link>
  );
}
