import './styles/Recommendation.css'
import Carousel from '../ReactBits/Carousel/Carousel.jsx'
import ScrollFloat from '../ReactBits/ScrollFloat/ScrollFloat.jsx'
import useAPIData from '../Hooks/useAPIData'


function Recommendation() {
    let url = import.meta.env.VITE_API + import.meta.env.VITE_TESTIMONIALS;
  // Fetching Data fron DB
   const {output, isLoading} = useAPIData(url, 'fetch');

   output && console.table(output)
  return (
    <section className='recommendation modSec' data-aos="zoom-in" data-aos-duration = "800">
       <hr />
      <div>
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
         {output ? <Carousel
          item = {output}
          baseWidth={300}
          autoplay={true}
          autoplayDelay={3000}
          pauseOnHover={true}
          loop={true}
          round={false}
        /> : <i><span className="loader"></span> Loading....</i>}
        </div>
      </div>
      
       <hr /> 

    </section>
  );
}

export default Recommendation;




