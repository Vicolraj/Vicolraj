import React from 'react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'



import '../css/embla.css';
import '../css/sandbox.css';
 


import ProjectListContainer from '../../Components/ProjectListContainer.jsx'

const EmblaCarousel = (props) => {
  const { slides, options, showAll, setShowAll } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)





  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {(slides)&& slides.map((item, index) => (
            // Render each slide using ProjectListContainer
            // Assuming each item has properties like name, imgUrl, etc.
            // Adjust the properties according to your data structure
            // If the item structure is different, modify the props accordingly
             item.Best && <div className="embla__slide" key={index}>
              <ProjectListContainer name={item.Name}
                    description={item.Description}
                    imgUrl={item.Image}
                    githubLink={item.GithubLink}
                    liveLink={item.LiveLink}
                    coverType = {item["CoverType"]} /> 
                  
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />

          <button onClick={() => {showAll === true ? setShowAll(!showAll) : setShowAll(true)}} className='seeall'>View all</button>

          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

                  {/* <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>   */}
      </div>
    </section>
  )
}

export default EmblaCarousel
