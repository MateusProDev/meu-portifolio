import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SimpleSlider.css';

export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
    dots: true,
    infinite: true,
    speed: 7000,
    slidesToShow: 5, // Ajuste conforme necessário
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Intervalo de rotação em milissegundos
    cssEase: 'linear', // Adicione essa propriedade para rolar continuamente
    };


    return (
      <div>
        <Slider className="carrossel" {...settings}>
          <div className="sliderCarrossel">
            <h3>JAVASCRIPT</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>REACT.js</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>NEXT.js</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>MYSQL</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>FIREBASE</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>BOOTSTRAP</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>GIT</h3>
          </div>
          <div className="sliderCarrossel">
            <h3>GITHUB</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
