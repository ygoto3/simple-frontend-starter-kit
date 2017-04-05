// @flow
import test from 'tape';
import React from 'react';
import sd from 'skin-deep';
import { Text } from './index';

const tree = sd.shallowRender(<Text>expected</Text>);

test('Text', t => {
  const actual = tree.subTree('span').text();
  const expected = 'expected';
  t.equal(actual, expected, 'Text should display a passed text');

  t.end();
});
