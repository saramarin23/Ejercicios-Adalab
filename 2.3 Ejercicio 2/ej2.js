"use strict";

let name = "Ana";

if (name === "Sara" || name === "Laura") {
  //Hay que repetir la variable igual, le tienes que decir, si no es un truthy y te devuelve la primera condición aunque no se cumpla.
  console.log(`Bienvenida, ${name}`);
} else {
  console.log(
    "Lo siento pero el usuario que has introducido no está registrado."
  );
}
