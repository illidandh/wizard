import React from 'react';
import {SafeAreaView, View, Text, Alert} from 'react-native';
import styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from './components/button';
import Input from './components/input';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      address1: '',
      isFailAddress1: false,
      address2: '',
      isFailAddress2: false,
      postCode: '',
      isFailPostCode: false,
      city: '',
      isFailCity: false,
      state: '',
      isFailState: false,
      country: list_country[0].value,
      deliveryType: list_deliveryType[0].value,
      packaging: list_packaging[0].value,
      preferred: list_prefrred[0].value,
    };
  }

  renderItemHeader(iconName, itemStep) {
    const {step} = this.state;
    const color =
      step === itemStep ? 'rgb(95, 124, 252)' : 'rgb(165, 169, 186)';
    return (
      <View style={styles.itemHeaderView}>
        <MaterialCommunityIcons name={iconName} size={50} color={color} />
        <MaterialCommunityIcons name="chevron-right" size={40} color={color} />
      </View>
    );
  }

  renderHeader() {
    return (
      <View style={styles.headerView}>
        {this.renderItemHeader('google-maps', 1)}
        {this.renderItemHeader('truck-delivery', 2)}
        {this.renderItemHeader('ticket-confirmation', 3)}
      </View>
    );
  }

  renderTitle() {
    const {step} = this.state;
    let title = '';
    switch (step) {
      case 1:
        title = 'Setup Your Current Location';
        break;
      case 2:
        title = 'Select your Services';
        break;
      case 3:
        title = 'Review your Details and Submit';
        break;
      default:
        break;
    }
    return <Text style={styles.titleText}>{title}</Text>;
  }

  renderContent() {
    const {
      step,
      address1,
      isFailAddress1,
      address2,
      isFailAddress2,
      postCode,
      isFailPostCode,
      city,
      isFailCity,
      state,
      isFailState,
      country,
      deliveryType,
      packaging,
      preferred,
    } = this.state;
    switch (step) {
      case 1:
        return (
          <View>
            <Input
              title="Address Line 1"
              desc="Please enter your Address."
              onChangeText={text =>
                this.setState({address1: text, isFailAddress1: false})
              }
              isFail={isFailAddress1}
              value={address1}
            />
            <Input
              title="Address Line 2"
              desc="Please enter your Address."
              onChangeText={text =>
                this.setState({address2: text, isFailAddress2: false})
              }
              isFail={isFailAddress2}
              value={address2}
            />
            <View style={{flexDirection: 'row'}}>
              <View style={styles.root}>
                <Input
                  title="Postcode"
                  desc="Please enter your Postcode."
                  onChangeText={text =>
                    this.setState({postCode: text, isFailPostCode: false})
                  }
                  isFail={isFailPostCode}
                  value={postCode}
                />
              </View>
              <View style={styles.root}>
                <Input
                  title="City"
                  desc="Please enter your City."
                  onChangeText={text =>
                    this.setState({city: text, isFailCity: false})
                  }
                  isFail={isFailCity}
                  value={city}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.root}>
                <Input
                  title="State"
                  desc="Please enter your State."
                  onChangeText={text =>
                    this.setState({state: text, isFailState: false})
                  }
                  isFail={isFailState}
                  value={state}
                />
              </View>
              <View style={styles.root}>
                <Input
                  isPicker={true}
                  items={list_country}
                  title="Country"
                  desc=""
                  onValueChange={(value, index) =>
                    this.setState({country: value})
                  }
                  value={country}
                />
              </View>
            </View>
          </View>
        );
      case 2:
        return (
          <View>
            <Input
              isPicker={true}
              items={list_deliveryType}
              title="Delivery Type"
              desc=""
              onValueChange={(value, index) =>
                this.setState({deliveryType: value})
              }
              value={deliveryType}
            />
            <Input
              isPicker={true}
              items={list_packaging}
              title="Packaging Type"
              desc=""
              onValueChange={(value, index) =>
                this.setState({packaging: value})
              }
              value={packaging}
            />
            <Input
              isPicker={true}
              items={list_prefrred}
              title="Preferred Delivery Window"
              desc=""
              onValueChange={(value, index) =>
                this.setState({preferred: value})
              }
              value={preferred}
            />
          </View>
        );
      case 3:
        return (
          <View style={styles.submitView}>
            <Text style={styles.titleReviewText}>Current Address</Text>
            <Text style={styles.itemReviewText}>{address1}</Text>
            <Text style={styles.itemReviewText}>{address2}</Text>
            <Text
              style={
                styles.itemReviewText
              }>{`${city} ${postCode}, ${state}, ${country}`}</Text>
            <View style={styles.lineViewV} />
            <Text style={styles.titleReviewText}>Delivery Details</Text>
            <Text
              style={
                styles.itemReviewText
              }>{`${deliveryType} Delivery with ${packaging} Packaging`}</Text>
            <Text
              style={styles.itemReviewText}>{`Preferred ${preferred}`}</Text>
          </View>
        );
      default:
        break;
    }
  }

  onNextOrSubmit() {
    const {step, address1, address2, postCode, city, state} = this.state;
    switch (step) {
      case 1:
        if (!address1) {
          this.setState({isFailAddress1: true});
          return;
        }
        if (!address2) {
          this.setState({isFailAddress2: true});
          return;
        }
        if (!postCode) {
          this.setState({isFailPostCode: true});
          return;
        }
        if (!city) {
          this.setState({isFailCity: true});
          return;
        }
        if (!state) {
          this.setState({isFailState: true});
          return;
        }
        break;
      case 2:
        break;
      case 3:
        Alert.alert(
          'Success',
          'The application has been successfully submitted!',
        );
        return;
      default:
        break;
    }
    this.setState({step: step + 1});
  }

  renderBottom() {
    const {step} = this.state;
    return (
      <View style={styles.bottomView}>
        <View style={styles.buttonView}>
          {step > 1 && (
            <Button
              onPress={() => this.setState({step: step - 1})}
              title="PREVIOUS"
            />
          )}
        </View>
        <View style={styles.buttonView}>
          <Button
            sContainer={{
              backgroundColor:
                step === 3 ? 'rgb(33, 186, 136)' : 'rgb(95, 124, 252)',
            }}
            sTitle={{color: 'white'}}
            onPress={() => this.onNextOrSubmit()}
            title={step === 3 ? 'SUBMIT' : 'NEXT STEP'}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.root}>
        {this.renderHeader()}
        <View style={styles.lineView} />
        <View style={styles.contentView}>
          <KeyboardAwareScrollView>
            {this.renderTitle()}
            {this.renderContent()}
          </KeyboardAwareScrollView>
        </View>
        <View style={styles.lineView} />
        {this.renderBottom()}
      </SafeAreaView>
    );
  }
}

const list_country = [
  {label: 'Việt Nam', value: 'Việt Nam'},
  {label: 'Thái Lan', value: 'Thái Lan'},
  {label: 'Tây Ban Nha', value: 'Tây Ban Nha'},
];

const list_deliveryType = [
  {label: 'Overnight', value: 'Overnight'},
  {label: 'Express', value: 'Express'},
  {label: 'Basic', value: 'Basic'},
];

const list_packaging = [
  {label: 'Regular', value: 'Regular'},
  {label: 'Oversize', value: 'Oversize'},
  {label: 'Frozen', value: 'Frozen'},
];

const list_prefrred = [
  {label: 'Morning', value: 'Morning'},
  {label: 'Afternoon', value: 'Afternoon'},
  {label: 'Night', value: 'Night'},
];
