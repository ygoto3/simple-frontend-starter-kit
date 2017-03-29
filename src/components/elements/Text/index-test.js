// @flow
'use strict';

import test from 'tape';
import React from 'react';
import sd from 'skin-deep';
import { Text } from './index';

const tree = sd.shallowRender(<Text>expected</Text>);

test('Text', t => {
  let actual = tree.subTree('span').text();
  let expected = 'expected';
  t.equal(actual, expected, 'Text should display a passed text');

  t.end();
});
