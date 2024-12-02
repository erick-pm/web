document.addEventListener('DOMContentLoaded', function () {
    // Datos simulados para búsqueda
    const datos = [
        { nombre: "Paracetamol", categoria: "Salud y Medicamentos" },
        { nombre: "Crema Hidratante", categoria: "Belleza" },
        { nombre: "Shampoo Anticaspa", categoria: "Cuidado Personal" },
        { nombre: "Vitaminas", categoria: "Salud y Medicamentos" },
        { nombre: "Esmalte de Uñas", categoria: "Belleza" },
    ];

    // Función para realizar la búsqueda
    function realizarBusqueda() {
        const inputBusqueda = document.getElementById('buscador').value.toLowerCase();
        const resultados = datos.filter(item =>
            item.nombre.toLowerCase().includes(inputBusqueda) || 
            item.categoria.toLowerCase().includes(inputBusqueda)
        );

        mostrarResultados(resultados);
    }

    // Mostrar los resultados de búsqueda
    function mostrarResultados(resultados) {
        const contenedorResultados = document.getElementById('resultados');
        contenedorResultados.innerHTML = ''; // Limpiar resultados anteriores

        if (resultados.length === 0) {
            contenedorResultados.innerHTML = '<p>No se encontraron resultados.</p>';
            return;
        }

        resultados.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('resultado-item');
            div.innerHTML = `<strong>${item.nombre}</strong> - ${item.categoria}`;
            contenedorResultados.appendChild(div);
        });
    }

    // Evento para el botón de búsqueda
    document.getElementById('btnBuscar').addEventListener('click', realizarBusqueda);
});
