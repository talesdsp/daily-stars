import Image from "next/image"
import Link from "next/link"
import { Li, __H3, __VideoSkeleton } from "./Preview.styled"

type PreviewProps = {
  post: Post
  hasTypeImage: boolean
}

const Preview: React.FC<PreviewProps> = ({ post, hasTypeImage }) => {
  const { title, hdurl, url, date } = post

  function renderThumbnailOrSkeleton() {
    if (hasTypeImage)
      return (
        <Image
          src={hdurl || url}
          alt={title}
          width="900"
          height="300"
          objectFit="cover"
          quality={40}
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
