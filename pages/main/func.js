function abrirModal() {
  const modal = document.getElementById("janela-modal-alfabeto");
  modal.classList.add("abrir");

  modal.addEventListener("click", (e) => {
    if (e.target.id == "fechar" || e.target.id == "janela-modal-alfabeto") {
      modal.classList.remove("abrir");
    }
  });
}
