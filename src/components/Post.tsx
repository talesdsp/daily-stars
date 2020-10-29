import Article from "./Article";

export type PostProps = {
  data: Post;
};

const Post: React.FC<PostProps> = ({ data }) => {
  return <Article preview post={data} />;
};

export default Post;
