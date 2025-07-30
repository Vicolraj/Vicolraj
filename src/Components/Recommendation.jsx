import './styles/Recommendation.css'
import Slider from '../keen-slider/Slider.jsx'
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
         {output ? <Slider
          dataToLoop = {output}
         
        /> : <i><span className="loader"></span> Loading....</i>}
        </div>

        <p className='instruction'><small>Swipe left or right for more</small></p>
      </div>
      
       <hr /> 

    </section>
  );
}

export default Recommendation;




