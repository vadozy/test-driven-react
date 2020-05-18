import React from 'react';

import { action } from '@storybook/addon-actions';
import Carousel from '../src/Carousel/Carousel';
import slides from '../example/slides';

export default {
  title: 'Carousel',
  component: Carousel,
};

export const MyCarousel = () => <Carousel slides={slides} />;
export const MyCarousel2 = () => (
  <Carousel slides={slides} onIndexChange={action('onIndexChange')} />
);
