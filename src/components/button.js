import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default class Button extends PureComponent {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  };

  render() {
    const {onPress, sContainer, title, sTitle} = this.props;
    return (
      <TouchableOpacity
        {...this.props}
        onPress={onPress}
        style={[s.container, sContainer]}>
        <Text style={[s.title, sTitle]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const s = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgb(224, 224, 224)',
    width: 125,
    height: 45,
  },
  title: {
    fontSize: 18,
    color: 'black',
  },
});
