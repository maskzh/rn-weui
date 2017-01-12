import merge from 'lodash/merge'
import _button from './Button/variable'
import _grid from './Grid/variable'
import _cell from './Cell/variable'
import _msg from './Msg/variable'
import _progress from './Progress/variable'
import _dialog from './Dialog/variable'
import _form from './Form/variable'

const _global = {
  // color
  weuiColorPrimary: '#1AAD19',
  weuiColorWarn: '#E64340',

  // link
  weuiLinkColorDefault: '#586C94',

  // background
  weuiBgColorDefault: '#EFEFF4',
  weuiBgColorActive: '#ECECEC',

  // line
  weuiLineColorLight: '#E5E5E5',
  weuiLineColorDark: '#BCBAB6',

  // text
  weuiTextColorTitle: '#000000',
  weuiTextColorTips: '#B2B2B2',
  weuiTextColorWarn: '#E64340',
  weuiTextColorGray: '#999999',

  weuiActionSheetAndroidBorderRadius: 2,

  // ------------------------- old
  baseFontSize: 16,
  baseLineHeight: 1.6,
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
