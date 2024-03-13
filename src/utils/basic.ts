export const getProp = <T extends object, K extends string>(
  obj: T,
  key: K
): T extends Record<K, any> ? T[K] : undefined => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return obj[key]
}

export const keys = <T extends Record<any, any>>(obj: T): Array<keyof T> => {
  return Object.keys(obj)
}

export const join = (
  values: ReadonlyArray<string | false | null | undefined>,
  separator = ' '
): string => {
  let result = ''

  for (const value of values) {
    if (typeof value === 'string' && value.length !== 0) {
      if (result.length > 0) result += separator
      result += value
    }
  }

  return result
}

export const cn = (
  ...values: ReadonlyArray<string | false | null | undefined>
): string => {
  return join(values, ' ')
}

export const clampNumber = (value: number, min: number, max: number): number => {
  return Math.min(max, Math.max(min, value))
}
