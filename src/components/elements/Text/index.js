// @flow
import React from 'react';
import styles from './styles.css';

type Props = {
  children?: string;
};

export const Text = ({ children }: Props) => (
  <span className={styles.text}>{ children }</span>
);

Text.defaultProps = {
  children: '',
};
