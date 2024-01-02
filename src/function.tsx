export function hardOP(a: number, b: string) {
  if (b == "square") return a * a;
  else if (b == "cube") return a * a * a;
}

export type Data = {
  key: string;
  result: number;
};

let ObjValues: Data[] = [];
export function memoise(a: number, b: string) {
  const key = `${a}, ${b}`;
  const filterValues = ObjValues.find((item) => item.key == key);
  if (filterValues) {
    return ["Ya existe", filterValues.result, ObjValues];
  } else {
    const value = hardOP(a, b);

    ObjValues.push({ key: key, result: Number(value) });
    return ["Es nuevo", value, ObjValues];
  }
}
