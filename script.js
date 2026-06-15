document.addEventListener("DOMContentLoaded", () => {
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const lightbox = document.getElementById("gallery-lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox-close");

    // Al dar clic en cualquier imagen de la galería
    galleryItems.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src; // Copia la ruta de la imagen
            lightboxImg.alt = img.alt; // Copia el texto alternativo
            lightbox.style.display = "flex"; // Muestra el fondo oculto
            document.body.style.overflow = "hidden"; // Bloquea el scroll del fondo
        });
    });

    // Función para cerrar la pantalla completa
    const closeLightbox = () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto"; // Devuelve el scroll a la página
    };

    // Cerrar al dar clic en la X o en el fondo oscuro
    lightboxClose.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImg) {
            closeLightbox();
        }
    });
});