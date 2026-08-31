# Implementación de componentes standalone con señales y nuevo control de flujo en Angular

En un sistema de gestión de préstamos bancarios, se requiere implementar componentes standalone que utilicen señales y el nuevo control de flujo de Angular para mejorar la reactividad y la gestión de estados. Los componentes deben manejar eventos de usuario y actualizar la interfaz de usuario en tiempo real. El sistema debe ser capaz de procesar un alto volumen de solicitudes de préstamo y mantener una latencia baja.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Angular 21 con RxJS 7 |
| **Nivel** | junior-l2 |
| **Tipo** | theoretical |
| **Tiempo estimado** | 2 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Exploración de componentes standalone

**Objetivo:** Comprender y aplicar la creación de componentes standalone en Angular.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Identificar las ventajas de utilizar componentes standalone.
- Crear un componente standalone que muestre información de un préstamo.

**Entregable:** Componente standalone que muestra información de un préstamo.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la modularidad y la reutilización de componentes.

</details>

### Fase 2: Implementación de señales en componentes

**Objetivo:** Integrar señales en los componentes para mejorar la reactividad.

**Tiempo estimado:** 45 minutos

**Instrucciones:**

- Implementar señales en el componente para manejar eventos de usuario.
- Actualizar la interfaz de usuario en tiempo real cuando se reciban nuevos datos.

**Entregable:** Componente con señales integradas que actualiza la interfaz de usuario en tiempo real.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo las señales pueden mejorar la reactividad del componente.

</details>

### Fase 3: Aplicación del nuevo control de flujo

**Objetivo:** Utilizar el nuevo control de flujo de Angular para gestionar estados.

**Tiempo estimado:** 45 minutos

**Instrucciones:**

- Implementar el nuevo control de flujo en el componente para gestionar estados.
- Asegurar que el componente maneje correctamente los estados y eventos.

**Entregable:** Componente con el nuevo control de flujo implementado para gestionar estados.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo el nuevo control de flujo puede simplificar la gestión de estados.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los componentes standalone en Angular y cuál es su propósito?
- **paraQueSirve**: ¿Para qué sirven las señales en Angular y cómo pueden mejorar la reactividad de un componente?
- **comoSeUsa**: ¿Cómo se implementan las señales en un componente de Angular?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar señales en Angular y cómo se pueden evitar?
- **queDecisionesImplica**: ¿Qué decisiones debes tomar al implementar el nuevo control de flujo en tus componentes?

## Criterios de Evaluacion

- Comprender y aplicar la creación de componentes standalone en Angular.
- Implementar señales en los componentes para mejorar la reactividad.
- Utilizar el nuevo control de flujo de Angular para gestionar estados.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
