// @flow

import { StyleSheet } from 'react-native'

import THEME from '../../../../theme/variables/airbitz.js'

export default StyleSheet.create({
  recipient: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    width: '100%'
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.TRANSPARENT
  },
  row: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.TRANSPARENT
  },
  text: {
    color: THEME.COLORS.WHITE,
    fontFamily: THEME.FONTS.DEFAULT,
    fontSize: 14
  },
  debug: {
    borderColor: 'red',
    borderWidth: 1
  }
})
