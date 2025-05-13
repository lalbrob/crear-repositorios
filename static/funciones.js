export { avatarBloque };
const avatarBloque = () => {
  let datosFormulario = new FormData(envio);
  let etiquetaDivCaixa = document.createElement("div");
  let etiquetaDivImaxen = document.createElement("div");
  etiquetaDivCaixa.className = "caixa";

  for (let [name, value] of datosFormulario) {
    console.log(`${name} ${value}`);

    if (name === "Avatar") {
      let archivo = datosFormulario.get("Avatar");
      let imaxen = document.createElement("img");
      imaxen.src = URL.createObjectURL(archivo);
      etiquetaDivImaxen.append(imaxen);
    } else {
      let etiquetaP = document.createElement("p");
      etiquetaP.innerHTML = `${name}: ${value}`;
      etiquetaDivCaixa.append(etiquetaP);
    }
  }
  etiquetaDivCaixa.append(etiquetaDivImaxen);
  document.body.prepend(etiquetaDivCaixa);
};
