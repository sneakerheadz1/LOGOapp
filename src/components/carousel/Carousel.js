import React, { useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
// import styled from 'styled-components';

// const SlideShow = styled.div`
//     display: flex;
//     justify-content: center;
//     /* width: 100vw; */
//     margin: 2%;
//     font-size: 20px;
//     font-family: sans-serif

// `



function Carousel() {

    // const [quotes, setQuotes] = useState([])
    useEffect(()=>{
        


          //  axios.get(`https://jsonplaceholder.typicode.com/users`)
            axios.get('https://quotes.rest/qod?category=students&language=en')
           .then(response => {
              //  console.log(response.data.contents.quotes)
            //  const quote = response.data.contents.quotes
            //  setQuotes( quote);
            //  console.log(quotes)


           })
           .catch(err => console.log(err));
     },[])

    //  const quoteData = quotes.map((quote) => {
    //     console.log(quote)
    //  })
    


    const settings = {
          dots: true,
          infinite: true,
          fade: true,
          speed: 500,
          arrows: true,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1
        };
    

    return (

        <div id="slide-show" >
        <h2> Graduation Statistics</h2>
        <Slider {...settings}>
          <div>
            <h5>"While Baltimore is home to several impressive universities, such as University of 
                Maryland at Baltimore and Johns Hopkins University, its public school system is not quite as prestigious. For example,
                 as of 2014, the graduation rate for Baltimore City public schools was 56.4%.''   </h5>
          </div>
          <div>
            <h5>"At every level of academic ability, the low-income students were less likely to finish college than their wealthier peers. 
                Yet more depressing: Exceptionally smart poor kids, whose math scores ranked them among the top quarter of the study’s participants, 
                were no more likely to attain a bachelor’s degree than scholastically middling rich kids."</h5>
          </div>
        </Slider>
      </div>
    
    )
};

export default Carousel



