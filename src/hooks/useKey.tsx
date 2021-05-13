import { useState } from "react"
import * as creds from "../../twelve-data.json"

export function useKey(env: "dev" | "prod" = "dev") {
  if (env === "dev") {
    return useState("n/a")
  }
  const key = creds.production as string

  return useState(key)
}
