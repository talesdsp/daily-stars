import Link from "next/link"
import { Li, __H3, __Img, __VideoSkeleton } from "./Preview.styled"

type PreviewProps = {
  post: Post
  hasTypeImage: boolean
}

const Preview: React.FC<PreviewProps> = ({ post, hasTypeImage }) => {
  const { title, hdurl, url, date } = post

  function renderThumbnailOrSkeleton() {
    if (hasTypeImage)
      return (
        <__Img
          src={hdurl || url}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={55}
        />
      )
    return <__VideoSkeleton />
  }

  return (
    <Link href={`/posts/${encodeURI(date)}`}>
      <Li>
        {renderThumbnailOrSkeleton()}
        <__H3>{title}</__H3>
      </Li>
    </Link>
  )
}

export default Preview
