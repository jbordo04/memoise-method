import { memoise } from "../src/function";

describe("Test para verficiar las funciones", () => {
  test("Comprovar la funcion memoize", () => {
    memoise(2, "cube");
    const data1 = memoise(2, "cube");

    expect(data1[0]).toContain("existe");
  });
});
