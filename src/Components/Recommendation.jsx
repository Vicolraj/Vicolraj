import './styles/Recommendation.css'
import Carousel from '../ReactBits/Carousel/Carousel.jsx'
import ScrollFloat from '../ReactBits/ScrollFloat/ScrollFloat.jsx'

function SimpleSlider() {
  return (
    <section className='recommendation'>
      <ScrollFloat
        animationDuration={1}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.03}
      >
        Client Testimonials
      </ScrollFloat>
      <div className='testimonials'>
        <Carousel
        baseWidth={300}
        autoplay={true}
        autoplayDelay={3000}
        pauseOnHover={true}
        loop={true}
        round={false}
      />
      </div>
      

    </section>
  );
}

export default SimpleSlider;




