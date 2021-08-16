import React from 'react';
import { Spinner } from '@shopify/polaris';
import { Container } from './styles';

const Loading = () => (
  <Container>
    <Spinner accessibilityLabel="Spinner" size="large" color="inkLightest" />
  </Container>
);

export default Loading;
