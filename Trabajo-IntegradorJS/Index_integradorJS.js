$(document).ready(function () {
    const productContainer = $("#product-list");

    // Realizar una solicitud GET a la API con jQuery
    $.get('https://portal.edu-apps.com.ar/api/products/?format=json', function (data) {

        // Encontrar el producto más caro
        let precioMaximo = 0;
        data.forEach(function (producto) {
            if (producto.price > precioMaximo) {
                precioMaximo = producto.price;
            }
        });




        // Procesar y mostrar los datos
        $.each(data, function (contador, productos) {
            const productDiv = $("<div>").addClass("product");
            // Construir la URL absoluta para la imagen del producto
            const absoluteImgUrl = new URL(productos.image, 'https://portal.edu-apps.com.ar').href;
            // Identificar y resaltar el producto más caro
            if (productos.price === precioMaximo) {
                productDiv.addClass("expensive");
            }

            productDiv.html(`
                <h2>${productos.name}</h2>
                <p>Precio: $${productos.price}</p>
                <p>Descripción: ${productos.description}</p>
                <button class="ver-detalle" data-img="${productos.absoluteImgUrl}" data-description="${productos.description}">Ver Detalle</button>
            `);

            productContainer.append(productDiv);
        });

        // Modal functionality
        $(".ver-detalle").on("click", function () {
            const imgSrc = $(this).data("img");
            const description = $(this).data("description");

            $("#img-product").attr("src", imgSrc);
            $("#description-product").text(description);

            $("#miModal").show();
        });

        $(".cerrar-modal").on("click", function () {
            $("#miModal").hide();
        });

    }).fail(function (error) {
        console.error("Error al obtener datos de la API:", error);
    });
});