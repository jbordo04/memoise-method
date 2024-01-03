# Memoise Function

Todos los comando posibles:

`npm run dev` Inicia la interfaz web

`npm test` Inicia el test

`npm run lint` Inicia el lint

## Un poco de información

Ejemplo práctico de como funciona la función Memoise, antes que nada, que es?

- El función Memoise es una función que sirve para agilizar y ahorra recursos, cuando ya se sabe la respuesta por tener inputs ya utilizados.

- En nuestro caso, la función deseada es una operacion cuadrada sobre el input: number ==> hardOP()

- Cada vez que escribimos, generará una llamada a esta función, que limitará el uso de la llamada a la otra función dependiendo si los inputs ya están registrados, si lo tiene en la cache, variables, etc, devolverá los resultados ya registrados, sino llamará a la función ==> `hardOP()`

- Y se almacenará tanto los nuevos inputs, como el resultado.

## Comandos

- `npm run dev`: Si no se abre automáticamente la pagina, hacer click donde salga [http://localhost], se abrirá la pagina web para poder entender las diferencias de implementarlo.

- `npm test`: Hace unas pruebas predefinidas para obtener la validez de la función.
