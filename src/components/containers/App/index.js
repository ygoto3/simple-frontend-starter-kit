// @flow
import React from 'react';

import { Text } from 'components/elements/Text';
import styles from './styles.css';

type User = {
  name: string;
}

export class App extends React.Component {

  state: {
    user: User;
  }

  props: {
    user: User;
  }

  static defaultProps = {
    user: { name: 'prop' },
  }

  state = {
    user: { name: 'state' },
  }

  render() {
    return (
      <div className={styles.container}>
        <Text>
          { `${this.props.user.name} / ${this.state.user.name}` }
        </Text>
      </div>
    );
  }

}
