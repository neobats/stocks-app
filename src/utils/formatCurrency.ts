export const formatCurrency = (num: string) => {
  const hundredths = num.lastIndexOf(".") + 2
  return "$" + num.slice(0, hundredths)
}
