import _throttle from "lodash.throttle";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Spinner from "../../components/Spinner";
import * as Article from "./[pid].styled";

type PostProps = AppState;

export default function Post({ data }: PostProps) {
  const { query } = useRouter();

  const [isOpen, setOpen] = useState<boolean>(false);
  const [imgSize, setImgSize] = useState<0 | 1 | 2 | number>(0);
  const [heroSize, setHeroSize] = useState<HTMLBodyElement["clientHeight"]>();

  const handleResize = () => {
    setHeroSize(document.querySelector("body").clientHeight);
  };

  const handleImgClick = () => {
    if (isOpen) {
      setImgSize(0);
    }
    setOpen((prev) => !prev);
  };

  const incrementSize = () => {
    setImgSize((prev) => (prev < 2 ? prev + 1 : prev));
  };

  const decrementSize = () => {
    setImgSize((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      setOpen(false);
      return prev;
    });
  };

  useEffect(() => {
    setHeroSize(document.querySelector("body").clientHeight);
    window.addEventListener("resize", _throttle(handleResize, 100), false);

    return function cleanup() {
      window.removeEventListener("resize", _throttle(handleResize, 100), false);
    };
  }, [query]);

  const post = data.find((p) => p.date === query.pid);

  if (!post) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  return (
    <Layout siteTitle={post.title}>
      <Article.__Shadow open={isOpen}>
        <Article.__Img
          src={post.hdurl}
          alt={post.title}
          open={isOpen}
          size={imgSize}
          onClick={handleImgClick}
        />
      </Article.__Shadow>

      <Article.__Buttons open={isOpen}>
        <Article.__Zoom onClick={decrementSize} children="-" />
        <Article.__Zoom onClick={incrementSize} children="+" />
      </Article.__Buttons>

      <Article.default video={post.media_type === "video"}>
        {post.media_type === "image" ? (
          <Article.__Img
            src={post.hdurl || post.url}
            alt={post.title}
            mobileHeroSize={heroSize}
          />
        ) : (
          <iframe
            width="540"
            height="315"
            src={post.url}
            allowFullScreen={true}
            allow="fullscreen;"
            style={{
              border: "none",
              margin: "auto",
              display: "block",
              marginBottom: "40px",
              maxWidth: "90vw",
            }}
          />
        )}

        <Article.__Info>
          <Article.__Date
            children={`${post.date} ${
              post.copyright ? `- ${post.copyright}` : ""
            }`}
          />
          <Article.__H1 children={post.title} />
          <hr />
          <Article.__P children={post.explanation} />

          {post.media_type === "image" ? (
            <Article.__Button children="See in HD" onClick={handleImgClick} />
          ) : null}
        </Article.__Info>
      </Article.default>
    </Layout>
  );
}
