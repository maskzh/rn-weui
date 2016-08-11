import merge from 'lodash/merge'
import _button from './Button/variable'
import _grid from './Grid/variable'
import _cell from './Cell/variable'
import _msg from './Msg/variable'
import _progress from './Progress/variable'
import _dialog from './Dialog/variable'
import _form from './Form/variable'

const _global = {
  baseFontSize: 16,
  baseLineHeight: 1.6,
  globalFontSize: 14,

  // font color
  globalLinkColor: '#61749B',
  globalDescColor: '#B2B2B2',
  globalWarnColor: '#E64340',
  globalNickNameColor: '#576B95',
  globalTextColor: '#888',
  globalTitleColor: '#000',

  // border
  globalBorderColor: '#BCBAB6',

  // arrow
  globalArrowColor: '#C7C7CC',

  // component
  itemActiveColor: '#E4E4E4',

  // page
  pageDefaultBackgroundColor: '#EFEFF4',

  // gap
  gap5: 5,
  gap10: 10,
  gap15: 15,
}

export default merge(
  {},
  _global,
  _button,
  _grid,
  _cell,
  _msg,
  _progress,
  _dialog,
  _form,
)
