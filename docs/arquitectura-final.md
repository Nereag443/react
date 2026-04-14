# Arquitectura del proyecto

## 1. Uso de genéricos

Se ha implementado programación genérica en el componente `DataTable<T>`, permitiendo que sea reutilizable con distintos tipos de datos sin perder seguridad de tipos.  
Con el uso de `keyof T`, las columnas están estrictamente ligadas a las propiedades del tipo de datos, evitando accesos inválidos.

### Beneficios:
- Reutilización del código
- Seguridad en el acceso a propiedades
- Detección temprana de errores

---

## 2. Tipos de utilidad (Utility Types)

Se ha utilizado `Partial<T>` para gestionar el estado de edición de una fila dentro del componente, lo que permite que el objeto en edición no necesite contener todos los campos obligatorios, ya que el usuario puede modificar solo algunos de ellos.

### Beneficios:
- Flexibilidad en formularios
- Representación de estados intermedios
- Evita errores por datos incompletos

---

## 3. Uniones discriminadas

En el módulo de TypeScript se han utilizado uniones discriminadas para modelar estados del sistema (estados de matrícula). Cada estado contiene una propiedad discriminada `tipo`, que permite a TypeScript identificar el tipo en cada caso.

### Beneficios:
- Representación clara de estados válidos
- Eliminación de estados ambiguos
- Código más predecible

---

## 4. Uso de never

Se ha aplicado el tipo `never` en estructuras `switch`, esto garantiza que todos los posibles estados de una unión discriminada sean manejados. Si se añade un nuevo estado y no se contempla, el compilador genera un error.

### Beneficios:
- Prevención de errores futuros
- Código más seguro ante cambios
- Mantenimiento más sencillo

## Conclusión

El uso de TypeScript junto a React ha permitido desarrolla un proyecto más seguro, estructurado y escalable. El uso de genéricos, tipos de utilidad, uniones y el análisis reduce la probabilidad de erroes en ejecución, facilitando el mantenimiento a largo plazo.