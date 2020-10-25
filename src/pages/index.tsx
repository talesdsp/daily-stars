import Layout from "../components/layout";
import Newsletter from "../components/Newsletter";
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import Welcome from "../components/Welcome";

type HomeProps = AppState;

export default function Home({ data, requestData }: HomeProps) {
  if (data.length === 0)
    return (
      <Layout>
        <Spinner />
      </Layout>
    );

  return (
    <Layout>
      <Welcome requestData={requestData} />
      <PostList data={data} />
      <Newsletter />
    </Layout>
  );
}
