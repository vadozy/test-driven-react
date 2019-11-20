import React from 'react';
import CarouselButton from './CarouselButton';
import CarouselSlide from './CarouselSlide';
import PropTypes from 'prop-types';

class Carousel extends React.PureComponent {
  state = {
    slideIndex: 0,
  };

  handlePrevClick = () => {
    const len = this.props.slides.length;
    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex - 1 + len) % len,
    }));
  };

  handleNextClick = () => {
    const len = this.props.slides.length;
    this.setState(({ slideIndex }) => ({
      slideIndex: (slideIndex + 1) % len,
    }));
  };

  render() {
    const { defaultImg, defaultImgHeight, slides, ...rest } = this.props;
    return (
      <div {...rest}>
        <CarouselSlide
          Img={defaultImg}
          imgHeight={defaultImgHeight}
          {...slides[this.state.slideIndex]}
        />
        <CarouselButton data-action='prev' onClick={this.handlePrevClick}>
          Prev
        </CarouselButton>
        <CarouselButton data-action='next' onClick={this.handleNextClick}>
          Next
        </CarouselButton>
      </div>
    );
  }

  static propTypes = {
    defaultImg: CarouselSlide.propTypes.Img,
    defaultImgHeight: CarouselSlide.propTypes.imgHeight,
    slides: PropTypes.arrayOf(PropTypes.shape(CarouselSlide.propTypes))
      .isRequired,
  };

  static defaultProps = {
    defaultImg: CarouselSlide.defaultProps.Img,
    defaultImgHeight: CarouselSlide.defaultProps.imgHeight,
  };
}

export default Carousel;