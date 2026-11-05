# Análisis: identificación de objetos predefinidos

## 1. `window` frente a objetos nativos como `Math` o `JSON`

`window` es el objeto global del entorno del navegador y padre de todos los objetos del **BOM** (Browser Object Model). Proporciona el navegador para representar la ventana o pestaña.

`Math` y `JSON` son **objetos nativos (** definidos por el estándar de JS. Forman parte del propio lenguaje.

**¿Por qué no hace falta escribir `window.Math`?**
Porque `window` es el objeto global y todo lo que está definido en el ámbito global es una propiedad de ese objeto global.

## 2. Clasificación de las instrucciones

| Instrucción           | Categoría               | Justificación                                                                                                                    |
| --------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `window.open()`       | **BOM**                 | Método del objeto `window` que abre una nueva ventana o pestaña del navegador. Es una funcionalidad propia del navegador.        |
| `parseFloat()`        | **Objeto nativo de JS** | Función global definida por JS que convierte una cadena en número decimal.                                                       |
| `Math.floor()`        | **Objeto nativo de JS** | Método del objeto nativo `Math` que redondea un número hacia abajo.                                                              |
| `navigator.userAgent` | **BOM**                 | Propiedad del objeto `navigator`, que informa del navegador y del sistema del cliente. Es información del entorno del navegador. |
