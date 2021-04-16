import moment from "moment";
import 'moment/locale/pt-br'

const capitalize = (string: string): string => {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const months = [
  capitalize(moment().month(0).format("MMMM")),
  capitalize(moment().month(1).format("MMMM")),
  capitalize(moment().month(2).format("MMMM")),
  capitalize(moment().month(3).format("MMMM")),
  capitalize(moment().month(4).format("MMMM")),
  capitalize(moment().month(5).format("MMMM")),
  capitalize(moment().month(6).format("MMMM")),
  capitalize(moment().month(7).format("MMMM")),
  capitalize(moment().month(8).format("MMMM")),
  capitalize(moment().month(9).format("MMMM")),
  capitalize(moment().month(10).format("MMMM")),
  capitalize(moment().month(11).format("MMMM")),
]

export default months;