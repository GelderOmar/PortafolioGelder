document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.navbar_opciones button');
    const sections = document.querySelectorAll('section');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });

    const text1 = "Hola, mi nombre es Gelder Tubac";
    const speed = 100; // Velocidad de escritura en milisegundos
    const titleElement1 = document.getElementById('titulo');
    const cursorElement1 = document.createElement('span');
    cursorElement1.classList.add('cursor');
    titleElement1.appendChild(cursorElement1);

    let i = 0;

    function escribirPrimero(callback) {
        if (i <= text1.length) {
            titleElement1.innerHTML = text1.substring(0, i) + "<span class='cursor'></span>";
            i++;
            setTimeout(() => escribirPrimero(callback), speed);
        } else {
            callback(); // Llamar a la función de callback después de terminar
        }
    }

    function escribirSegundo() {
        const text2 = "Soy un apasionado desarrollador con un amor profundo por la programación, el fútbol y la música. Me caracterizo por mi compromiso con cada tarea, ya sea pequeña o compleja, y siempre busco aportar de manera positiva al equipo de trabajo. Mi objetivo es dar lo mejor de mí en cada proyecto, asegurándome de que mi contribución sea significativa y efectiva";
        const titleElement2 = document.getElementById('desc');
        const cursorElement2 = document.createElement('span');
        cursorElement2.classList.add('cursor');
        titleElement2.appendChild(cursorElement2);

        let j = 0;

        function escribir() {
            if (j <= text2.length) {
                titleElement2.innerHTML = text2.substring(0, j) + "<span class='cursor'></span>";
                j++;
                setTimeout(escribir, speed);
            }
        }

        escribir();
    }

    escribirPrimero(escribirSegundo);
});








document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.contenedorimg');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            anime({
                targets: button,
                scale: 1.1, // Escala al hacer hover
                duration: 50,
                easing: 'easeOutSine'
            });
        });

        button.addEventListener('mouseleave', () => {
            anime({
                targets: button,
                scale: 1, // Vuelve al tamaño original al salir del hover
                duration: 50,
                easing: 'easeOutSine'
            });
        });
    });

});



