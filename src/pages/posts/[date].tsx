import _throttle from "lodash.throttle";
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Article, ImageViewer, Layout } from "../../components";
import { fetchData } from "../../helpers/fetchData";
import { Spinner } from "../../widgets/";
import Page404 from "../[404]";

type PostProps = InferGetStaticPropsType<typeof getStaticProps>;

const Post: NextPage<PostProps> = ({ post }) => {
  const { query, isFallback } = useRouter();
  const [isOpen, setOpen] = useState<boolean>(false);
  const [imgSize, setImgSize] = useState<0 | 1 | 2 | number>(0);
  const [heroSize, setHeroSize] = useState<HTMLBodyElement["clientHeight"]>();

  function handleResize() {
    setHeroSize(document.querySelector("body").clientHeight);
  }

  useEffect(() => {
    setHeroSize(document.querySelector("body").clientHeight);
    window.addEventListener("resize", _throttle(handleResize, 100), false);

    return function cleanup() {
      window.removeEventListener("resize", _throttle(handleResize, 100), false);
    };
  }, [query]);

  function closeViewer() {
    setImgSize(0);
    setOpen(false);
  }

  function openViewer() {
    setOpen(true);
  }

  if (isFallback) return <Layout children={<Spinner />} />;

  if (!post) return <Page404 />;

  return (
    <Layout siteTitle={post.title} description={post.explanation.slice(0, 40)}>
      <ImageViewer
        setImgSize={setImgSize}
        isOpen={isOpen}
        imgSize={imgSize}
        closeViewer={closeViewer}
        post={post}
      />
      <Article post={post} openViewer={openViewer} heroSize={heroSize} />
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchData();

  const paths = posts.map((post) => {
    return {
      params: { date: post.date },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  { post: Post },
  { date: string }
> = async (ctx) => {
  const isNotDateFormat = !/\d{4}-\d{2}-\d{2}/g.test(ctx.params.date);

  if (isNotDateFormat) return { props: { post: null } };

  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=SKVBHJdgV891nEHTRi9lpH8n8SfAhCv2SW8cfMr1&date=${ctx.params.date}`
  );

  const post = await response.json();

  if (post.hasOwnProperty("code")) return { props: { post: null } };

  return {
    props: {
      post,
    },
  };
};
