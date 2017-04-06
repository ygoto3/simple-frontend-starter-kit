import React from 'react';
import { storiesOf } from 'storybook-filepath-chapters';
import { Text } from './index.js';

storiesOf('Text', module)
  .add('with regular text', () => (<Text>Hello Text</Text>))
  .add('with some emoji', () => (<Text>😀 😎 👍 💯</Text>));
