import React from 'react';
import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';
import hasIndex from '../HOC/HasIndex';
import PropTypes from 'prop-types';

function Carousel(props) {
  const handlePrevClick = () => {
    const { slideIndexDecrement, slides } = props;
    slideIndexDecrement(slides.length);
  };

  const handleNextClick = () => {
    const { slideIndexIncrement, slides } = props;
    slideIndexIncrement(slides.length);
  };

  const {
    defaultImg,
    defaultImgHeight,
    slideIndex,
    // We don’t want slideIndexDecrement and slideIndexIncrement to be part of the rest props,
    // since those are passed through to the DOM. Instead, this code pulls them out as variables
    // prefixed with the underscore character, _
    slideIndexDecrement: _slideIndexDecrement,
    slideIndexIncrement: _slideIndexIncrement,
    slides,
    ...rest
  } = props;

  return (
    <div {...rest}>
      <CarouselSlide
        Img={defaultImg}
        imgHeight={defaultImgHeight}
        {...slides[slideIndex]}
      />
      <CarouselButton data-action='prev' onClick={handlePrevClick}>
        Prev
      </CarouselButton>
      <CarouselButton data-action='next' onClick={handleNextClick}>
        Next
      </CarouselButton>
    </div>
  );
}

Carousel.propTypes = {
  defaultImg: CarouselSlide.propTypes.Img,
  defaultImgHeight: CarouselSlide.propTypes.imgHeight,
  slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes))
    .isRequired,
  slideIndex: PropTypes.number.isRequired,
  slideIndexDecrement: PropTypes.func.isRequired,
  slideIndexIncrement: PropTypes.func.isRequired,
};

Carousel.defaultProps = {
  defaultImg: CarouselSlide.defaultProps.Img,
  defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
};

export { Carousel };
export default hasIndex(Carousel, 'slideIndex');
