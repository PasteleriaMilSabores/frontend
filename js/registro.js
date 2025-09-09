document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registroForm");
  const exitoModal = new bootstrap.Modal(document.getElementById("exitoModal"));
  const errorModal = new bootstrap.Modal(document.getElementById("errorModal"));

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add("was-validated");
      errorModal.show();
    } else {
      // Si el formulario es válido, mostrar modal de éxito
      exitoModal.show();
      // Opcional: resetear el formulario después de un registro exitoso
      form.reset();
      form.classList.remove("was-validated");
    }
  });
});
