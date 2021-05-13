import { QuoteResponse } from "../types/Stock"

const capitalize = (str: string) =>
  str[0].toLocaleUpperCase().concat(str.slice(1))

export const parseSnakeCase = <T extends string = keyof QuoteResponse>(
  val: string,
) =>
  val
    .split("_")
    .map((phrase, index) => (index === 0 ? phrase : capitalize(phrase)))
    .join("") as T
