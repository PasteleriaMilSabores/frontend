// Datos de productos
const productos = {
  PT001: {
    titulo: "Empanada de Manzana",
    imagen:
      "https://drive.google.com/uc?export=view&id=1FZTaPNI5v6flzDsqMFZ8lLV44ORG46jJ",
    descripcion:
      "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
    precio: "$3.000 CLP",
    caracteristicas: [
      "Hecha con masa hojaldrada",
      "Relleno de manzana natural",
      "Endulzada con panela",
      "Acompañada de canela",
    ],
  },
  PT002: {
    titulo: "Tarta de Santiago",
    imagen: "",
    descripcion:
      "Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.",
    precio: "$6.000 CLP",
    caracteristicas: [
      "Elaborada con almendras molidas",
      "Sin harina (apta para celíacos)",
      "Decorada con azúcar glass",
      "Textura esponjosa y húmeda",
    ],
  },
  TC001: {
    titulo: "Torta Cuadrada de Chocolate",
    imagen: "",
    descripcion:
      "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
    precio: "$45.000 CLP",
    caracteristicas: [
      "Bizcocho de chocolate premium",
      "Cubierta de ganache",
      "Toque de avellanas",
      "Personalizable",
    ],
  },
  TC002: {
    titulo: "Torta Cuadrada de Frutas",
    imagen: "",
    descripcion:
      "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
    precio: "$50.000 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  TT001: {
    titulo: "Torta Circular de Vainilla",
    imagen: "",
    descripcion:
      "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión",
    precio: "$40.000 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  TT002: {
    titulo: "Torta Circular de Manjar",
    imagen: "",
    descripcion:
      "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
    precio: "$42.000 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  PI001: {
    titulo: "Mousse de Chocolate",
    imagen: "",
    descripcion:
      "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.",
    precio: "$5.000 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  PI002: {
    titulo: "Tiramisu Clasico",
    imagen: "",
    descripcion:
      "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.",
    precio: "$42.000 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  PSA001: {
    titulo: "Torta Sin Azucar de Naranja",
    imagen: "",
    descripcion:
      "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.",
    precio: "$48.000 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  PSA002: {
    titulo: "Cheesecake Sin Azúcar",
    imagen: "",
    descripcion:
      "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.",
    precio: "$47.000 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  PG001: {
    titulo: "Brownie Sin Gluten",
    imagen: "",
    descripcion:
      "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.",
    precio: "$4.000 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  PG002: {
    titulo: "Pan Sin Gluten",
    imagen: "",
    descripcion:
      "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.",
    precio: "$3.500 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  PV001: {
    titulo: "Torta Vegana de Chocolate",
    imagen: "",
    descripcion:
      "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos",
    precio: "$50.000 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  PV002: {
    titulo: "Galletas Veganas de Avena",
    imagen: "",
    descripcion:
      "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.",
    precio: "$4.500 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  TE001: {
    titulo: "Torta Especial de Cumpleaños",
    imagen: "",
    descripcion:
      "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos",
    precio: "$55.000 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
  TE002: {
    titulo: "Torta Especial de Boda",
    imagen: "",
    descripcion:
      "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.",
    precio: "$60.000 CLP",
    caracteristicas: [
      "Mezcla de frutas frescas",
      "Crema chantilly",
      "Bizcocho de vainilla",
      "Ideal para celebraciones",
    ],
  },
};

// Inicializar eventos cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
  // Configurar eventos para los productos
  const elementosProducto = document.querySelectorAll(".colemp");
  elementosProducto.forEach((elemento) => {
    elemento.addEventListener("click", function () {
      const codigoProducto = this.getAttribute("data-producto");
      mostrarProducto(codigoProducto);
    });
  });
});

// Función para mostrar el producto en el modal
function mostrarProducto(codigo) {
  const producto = productos[codigo];
  if (producto) {
    document.getElementById("modalImagen").src = producto.imagen;
    document.getElementById("modalTitulo").textContent = producto.titulo;
    document.getElementById("modalDescripcion").textContent =
      producto.descripcion;
    document.getElementById("modalPrecio").textContent = producto.precio;

    // Limpiar y agregar características
    const listaCaracteristicas = document.getElementById(
      "modalCaracteristicas"
    );
    listaCaracteristicas.innerHTML = "";
    producto.caracteristicas.forEach((caracteristica) => {
      const li = document.createElement("li");
      li.textContent = caracteristica;
      listaCaracteristicas.appendChild(li);
    });
  }
}
