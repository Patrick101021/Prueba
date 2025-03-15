document.addEventListener("DOMContentLoaded", () => {
    const cuadro1 = document.getElementById("cuadro1");
    const cuadro2 = document.getElementById("cuadro2");
    const cuadro3 = document.getElementById("cuadro3");
    const cuadro4 = document.getElementById("cuadro4");

    // Redirigir al hacer clic en los cuadros
    cuadro1.addEventListener("click", () => window.location.href = "mailto:tuemail@example.com");
    cuadro2.addEventListener("click", () => window.open("https://x.com/MesQueUnIdolo", "_blank"));
    cuadro3.addEventListener("click", () => window.open("https://www.facebook.com/patrick.alvarado.1804?rdid=S4t4Drbgx1P3k47F&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F12HJsH9KkY8%2F#", "_blank"));
    cuadro4.addEventListener("click", () => window.open("https://www.promiedos.com.ar", "_blank"));

    // Registra el Service Worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
            .then((registration) => {
                console.log('Service Worker registrado con éxito: ', registration);
            })
            .catch((error) => {
                console.log('Error al registrar el Service Worker: ', error);
            });
    }
});
