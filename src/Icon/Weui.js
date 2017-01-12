/**
 * Icon icon set component.
 * Usage: <Weui name=icon_name size={20} color=#4F8EF7 />
 */
import createIconSet from './lib/create-icon-set'

const glyphMap = {
  circle: 59905,
  download: 59906,
  info: 59907,
  safe_success: 59908,
  safe_warn: 59909,
  success: 59910,
  success_circle: 59911,
  success_no_circle: 59912,
  waiting: 59913,
  waiting_circle: 59914,
  warn: 59915,
  info_circle: 59916,
  cancel: 59917,
  search: 59918,
  clear: 59919,
  back: 59920,
  delete: 59921,
}

const Weui = createIconSet(glyphMap, 'Weui', 'Weui.ttf')

module.exports = Weui
module.exports.glyphMap = glyphMap
