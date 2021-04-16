const formatCurrency = (current: number): string => {
  return new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(current)
}

export default formatCurrency;