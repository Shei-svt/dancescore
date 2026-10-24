# DanceScore

DanceScore es una aplicación hecha con React para registrar competencias de baile y llevar un control de los resultados de cada grupo. También permite consultar sus perfiles y ver cómo cambia la clasificación según las puntuaciones registradas.

## ¿Qué se puede hacer?

- Ver los grupos participantes y consultar sus perfiles.
- Buscar grupos por nombre, categoría o estilo.
- Consultar información de cada grupo y ver sus presentaciones cuando tienen un enlace disponible.
- Registrar competencias entre dos grupos diferentes.
- Ingresar las puntuaciones, el nombre y la fecha de cada competencia.
- Consultar el historial y filtrar los resultados por grupo.
- Eliminar resultados registrados.
- Ver la clasificación, que se actualiza automáticamente según los resultados.
- Consultar estadísticas de cada grupo, como victorias, empates, derrotas y puntos.

## Tecnologías utilizadas

- React
- JavaScript
- CSS
- Vite

## ¿Cómo ejecutar el proyecto?

1. Descargar o clonar el proyecto.
2. Abrir la carpeta del proyecto en Visual Studio Code.
3. Abrir la terminal y ejecutar:

   npm install

4. Iniciar la aplicación con:

   npm run dev

5. Abrir en el navegador la dirección que aparece en la terminal.

## ¿Cómo funciona la clasificación?

La clasificación se calcula a partir de los resultados registrados:

- **Victoria:** 3 puntos.
- **Empate:** 1 punto para cada grupo.
- **Derrota:** 0 puntos.

Si dos grupos tienen los mismos puntos, se compara primero la diferencia entre los puntos anotados y los recibidos. Si continúa el empate, se tienen en cuenta los puntos anotados y el nombre del grupo.

## Notas

La aplicación incluye resultados iniciales de demostración para mostrar cómo funciona el historial y la clasificación. Estos resultados no corresponden a competencias oficiales.

Los datos se manejan mediante el estado de React, por lo que los resultados nuevos y los cambios realizados se mantienen mientras la aplicación está abierta. Si se recarga la página, los cambios se reinician y vuelven a aparecer los resultados iniciales.

Este proyecto se realizó como práctica para trabajar con React, sus Hooks, el manejo del estado, los eventos, las validaciones y las operaciones con listas, como map(), filter(), reduce() y sort().
