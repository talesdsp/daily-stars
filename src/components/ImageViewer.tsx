import { Dispatch, SetStateAction } from "react"
import { __Buttons, __Img, __Shadow, __Zoom } from "./ImageViewer.styled"

type ImageViewerProps = {
  post: Post
  isOpen: boolean
  imgSize: number
  closeViewer: () => void
  setImgSize: Dispatch<SetStateAction<number>>
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  post,
  isOpen,
  closeViewer,
  imgSize,
  setImgSize,
}) => {
  const { hdurl, title } = post

  function incrementSize() {
    setImgSize((prev) => (prev < 2 ? prev + 1 : prev))
  }

  function decrementSize() {
    setImgSize((prev) => {
      if (prev > 0) {
        return prev - 1
      }
      closeViewer()
      return prev
    })
  }

  if (!isOpen) return null

  return (
    <>
      <__Shadow>
        <__Img
          src={hdurl}
          alt={title}
          size={imgSize}
          onClick={closeViewer}
          layout="fill"
          quality={100}
        />
      </__Shadow>

      <__Buttons>
        <__Zoom onClick={decrementSize} children="-" />
        <__Zoom onClick={incrementSize} children="+" />
      </__Buttons>
    </>
  )
}

export default ImageViewer
