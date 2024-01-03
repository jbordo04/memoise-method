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

export function deBounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  delay: number
) {
  let timer: ReturnType<typeof setTimeout>;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// const result = deBounce(() => {
//   const res = memoise(2, "cube");
//   console.log(res);
// }, 1000);

// result();
// setTimeout(() => result(), 500);
// setTimeout(() => result(), 1000);
// setTimeout(() => result(), 1500);
