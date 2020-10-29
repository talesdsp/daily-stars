import { Button, Iframe } from "../widgets";
import Container, { __Date, __H1, __Img, __Info, __P } from "./Article.styled";
import Preview from "./Preview";

type ArticleProps = {
  post?: Post;
  preview?: boolean;
  heroSize?: number;
  openViewer?: () => void;
};

const Article: React.FC<ArticleProps> = ({
  post,
  preview,
  heroSize,
  openViewer,
}) => {
  const { date, explanation, media_type, title, copyright, hdurl, url } = post;

  const hasTypeImage = media_type === "image";

  function renderButtonOrNull() {
    if (hasTypeImage)
      return <Button children="See in HD" onClick={openViewer} />;
  }

  function renderImageOrIframe() {
    if (hasTypeImage)
      return <__Img src={hdurl || url} alt={title} mobileHeroSize={heroSize} />;

    return <Iframe url={url} />;
  }

  if (preview) return <Preview hasTypeImage={hasTypeImage} post={post} />;

  return (
    <Container video={!hasTypeImage}>
      {renderImageOrIframe()}
      <__Info>
        <__Date children={`${date} ${copyright ? `- ${copyright}` : ""}`} />
        <__H1 children={title} />
        <hr />
        <__P children={explanation} />
        {renderButtonOrNull()}
      </__Info>
    </Container>
  );
};

export default Article;
