import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const capitalize = (string: string): string => {
  if (typeof string !== 'string') return ''
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const months = [
  capitalize(format(new Date().setMonth(0), 'MMMM', {locale: ptBR})),
  capitalize(format(new Date().setMonth(1), 'MMMM', {locale: ptBR})),
  capitalize(format(new Date().setMonth(2), 'MMMM', {locale: ptBR})),
  capitalize(format(new Date().setMonth(3), 'MMMM', {locale: ptBR})),
  capitalize(format(new Date().setMonth(4), 'MMMM', {locale: ptBR})),
  capitalize(format(new Date().setMonth(5), 'MMMM', {locale: ptBR})),
  capitalize(format(new Date().setMonth(6), 'MMMM', {locale: ptBR})),
  capitalize(format(new Date().setMonth(7), 'MMMM', {locale: ptBR})),
  capitalize(format(new Date().setMonth(8), 'MMMM', {locale: ptBR})),
  capitalize(format(new Date().setMonth(9), 'MMMM', {locale: ptBR})),
  capitalize(format(new Date().setMonth(10), 'MMMM', {locale: ptBR})),
  capitalize(format(new Date().setMonth(11), 'MMMM', {locale: ptBR}))
]

export default months;