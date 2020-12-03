import React from 'react';
import { Components, ComponentsProps } from './components';

export default {
  component: Components,
  title: 'Components',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: ComponentsProps = {};

  return <Components />;
};
