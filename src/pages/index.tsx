import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { useRouter } from "next/router";
import { Post } from "../components";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import Welcome from "../components/Welcome";
import { fetchData } from "../helpers/fetchData";
import { List } from "../widgets";
import Spinner from "../widgets/Spinner";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<HomeProps> = ({ posts }) => {
  const { isFallback } = useRouter();

  if (isFallback) return <Layout children={<Spinner />} />;

  return (
    <Layout>
      <Welcome />
      <List data={posts} Component={Post} />
      <Newsletter />
    </Layout>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
  const posts = await fetchData();

  return {
    props: { posts },
    revalidate: 3600,
  };
};
