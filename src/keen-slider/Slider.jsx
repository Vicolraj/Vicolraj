import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Slider.css"
import TiltedCard from '../ReactBits/TiltedCard/TiltedCard.jsx'

const carousel = (slider) => {
  const z = 300
  function rotate() {
    const deg = 360 * slider.track.details.progress
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`
    })
    rotate()
  })
  slider.on("detailsChanged", rotate)
}

export default function Slider({dataToLoop}) {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  )

  return (
  <div className="wrapper">
    <div className="scene">
      <div className="carousel keen-slider" ref={sliderRef}>
        {dataToLoop && dataToLoop.map((item, i) => (
          <div key={i} className={`carousel__cell number-slide${i + 1}`}>
            <TiltedCard
              imageSrc={item.ImgLink}
              altText=" "
              captionText=" "
              containerHeight="200px"
              containerWidth="240px"
              imageHeight="50px"
              imageWidth="50px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              clientName={item.Name}
              overlayContent={item.Content}
              occupation={item.Occupation}
              rating={item.Rating}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

}
