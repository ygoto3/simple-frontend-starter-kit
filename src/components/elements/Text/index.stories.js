import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Text } from './index.js';

storiesOf('Text', module)
  .add('with regular text', () => (<Text>Hello Text</Text>))
  .add('with some emoji', () => (<Text>😀 😎 👍 💯</Text>));
