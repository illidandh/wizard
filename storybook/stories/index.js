import React from 'react';
import {Text} from 'react-native';

import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import CenterView from './CenterView';
import Welcome from './Welcome';
import Button from '../../src/components/button';
import Input from '../../src/components/input';

storiesOf('Welcome', module).add('to Storybook', () => (
  <Welcome showApp={linkTo('Button')} />
));

storiesOf('Button', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default with text', () => (
    <Button onPress={action('clicked')} title="SIMPLE" />
  ))
  .add('with custom style', () => (
    <Button
      onPress={action('clicked ct')}
      title="CUSTOM"
      sContainer={{backgroundColor: 'yellow', width: 200, height: 200}}
      sTitle={{color: 'red'}}
    />
  ));

storiesOf('Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('basic', () => (
    <Input title="Address Line 1" desc="Please enter your Address." />
  ));
