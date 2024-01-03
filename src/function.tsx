export function hardOP(a: number, b: string): number {
  // if (b == "square") return a * a;
  // else if (b == "cube") return a * a * a;

  let result = 0;
  if (b == "square") result = a * a;
  else if (b == "cube") result = a * a * a;
  return result;
}

export type Data = {
  key: string;
  result: number;
};

const ObjValues: Data[] = [];

export function memoise<T, U>(a: T, b: U) {
  const key = `${a}, ${b}`;
  const filterValues = ObjValues.find((item) => item.key == key);
  if (filterValues) {
    return ["Ya existe", filterValues.result, ObjValues];
  } else {
    const value = hardOP(a as number, b as string);

    ObjValues.push({ key: key, result: value });
    return ["Es nuevo", value, ObjValues];
  }
}

console.log(memoise<number, string>(2, "cube"));
