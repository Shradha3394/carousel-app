import {useState} from "react"

export default function Carousel({images, width, height}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const totalImages = images.length;

  const handlePreviousClick = () => {
    const prevIndex = activeImageIndex === 0 ? totalImages - 1 : activeImageIndex - 1;
    setActiveImageIndex(prevIndex);
  }

  const handleNextClick = () => {
    const nextIndex = (activeImageIndex + 1) % totalImages;
    setActiveImageIndex(nextIndex);
  }

  return (
    <>
      <button onClick={handlePreviousClick}>Previous</button>
      <img style={{width: width, height: height}} src={images[activeImageIndex]} alt="wallpaper" />
      <button onClick={handleNextClick}>Next</button>
    </>
  )
}