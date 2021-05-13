import { compose } from "lodash/fp"
import { QuoteResponse } from "../types/Stock"
import { parseSnakeCase } from "./parseSnakeCase"

export const parse = JSON.parse
const shouldParse = (x: string | Record<string, unknown>) =>
  typeof x === "string" ? parse(x) : x

type QuoteJSON = Record<string, string | Record<string, string>>

export const mapSingleQuote = (vals: QuoteJSON) =>
  Object.keys(vals).reduce((collection: Partial<QuoteResponse>, key) => {
    let value = vals[key]
    if (typeof value !== "string") {
      value = mapSingleQuote(value) as Record<string, string>
    }
    const newKey = parseSnakeCase(key)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    collection[newKey] = value as unknown as any // silly TS
    return collection
  }, {})

export const parseAndMapQuote = compose(mapSingleQuote, shouldParse)

export const mapQuote = (vals: QuoteJSON) => {
  console.log("mapQuote vals:", vals)
  if (Object.keys(vals).includes("name")) {
    // only one
    return [mapSingleQuote(vals)]
  }
  const keys = Object.keys(vals)
  console.log(keys)
  return keys.map((key) => mapSingleQuote(vals[key] as QuoteJSON))
  // return entries
  //   .filter((entry) => !(typeof entry === "string"))
  //   .map((v) => mapSingleQuote(v as unknown as QuoteJSON))
}
