# Pruebas unitarias
- Probar todas las partes que componen a tu proyecto
- Prueban las cosas que nosotros creamos que vaya a pasar. ¡Cuidado con los Edge Cases!
- Corren automáticamente 
- Son independientes
- Deben ser rápidas de crear
- Auto documentación del código
- Solo verifican que funcione bien lo que se escribió
- Frameworks de testing en JS: Ava, Tape, Enzyme, Jasmine, Mocha y **Jest**

# JEST
- Framework para hacer pruebas unitarias (especializado para proyectos de React)
- Snapshots del Virtual DOM de React
- Mocking: Elementos demo
- babel-jest viene por defecto en jest y babel-polyfill viene por defecto en babel y no es necesario instalarlos. Además de que esto solo se utilizaría por si se hacen los tests en una instalación de Node que no soporte la versión de ECMAScript que estemos utilizando