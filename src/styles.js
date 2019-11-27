import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');
const widthScreen = window.width;
const heightScreen = window.height;

export default StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  lineView: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgb(233, 233, 233)',
  },
  lineViewV: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgb(233, 233, 233)',
    marginVertical: 5,
  },
  headerView: {
    flex: 1,
    flexDirection: 'row',
  },
  itemHeaderView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
    marginTop: 10,
    marginLeft: 10,
  },
  contentView: {
    flex: 8,
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
  },
  picker: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  titleReviewText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgb(124, 124, 252)',
    marginVertical: 5,
  },
  itemReviewText: {
    fontSize: 15,
    color: 'rgb(165, 169, 186)',
    marginVertical: 3,
  },
  submitView: {
    padding: 15,
  },
});
