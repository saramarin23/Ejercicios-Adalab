"use strict";

const color = document.querySelector("div");

if (color.classList.contains("success")) {
  const successText = `<h1>CORRECTO</h1><p>Los datos son correctos.</p>`;
  color.innerHTML = successText;
} else if (color.classList.contains("error")) {
  const errorText = `<h1>ERROR</h1><p>Ha surgido un error.</p>`;
  color.innerHTML = errorText;
} else if (color.classList.contains("warning")) {
  const warningText = `<h1>AVISO</h1><p>Tenga cuidado.</p>`;
  color.innerHTML = warningText;
}
