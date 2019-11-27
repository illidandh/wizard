import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TextInput, StyleSheet, Text, View, Keyboard} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default class Input extends PureComponent {
  static propTypes = {};

  static defaultProps: Props = {
    errorText: 'This field is required.',
    isFail: false,
    isPicker: false,
  };

  render() {
    const {
      title,
      desc,
      inputStyle,
      isFail,
      errorText,
      isPicker,
      items,
    } = this.props;
    return (
      <View style={s.container}>
        <Text style={s.titleText}>{title}</Text>
        {isPicker ? (
          <RNPickerSelect
            {...this.props}
            style={pickerSelectStyles}
            items={items}
          />
        ) : (
          <TextInput
            {...this.props}
            blurOnSubmit={false}
            multiline={false}
            numberOfLines={1}
            placeholder={title}
            placeholderTextColor="#999"
            style={[
              s.input,
              inputStyle,
              {borderColor: isFail ? 'red' : 'rgb( 233, 233, 233)'},
            ]}
            underlineColorAndroid="transparent"
            clearButtonMode="always"
            returnKeyType="done"
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        )}
        {isFail && <Text style={s.errorText}>{errorText}</Text>}
        <Text style={s.descText}>{desc}</Text>
      </View>
    );
  }
}

const s = StyleSheet.create({
  container: {
    padding: 10,
  },
  titleText: {
    fontSize: 16,
    color: 'black',
  },
  input: {
    marginVertical: 5,
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgb( 233, 233, 233)',
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  descText: {
    fontSize: 14,
    color: 'gray',
  },
  errorText: {
    fontSize: 13,
    color: 'red',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    marginVertical: 5,
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgb( 233, 233, 233)',
    borderRadius: 4,
    paddingHorizontal: 5,
  },
  inputAndroid: {
    marginVertical: 5,
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgb( 233, 233, 233)',
    borderRadius: 4,
    paddingHorizontal: 5,
  },
});
