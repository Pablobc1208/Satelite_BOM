const URL_ILERNA = "https://www.ilerna.es";

      function detectarSistema(userAgent) {
        if (navigator.userAgent.includes("Windows")) {
          return "Windows";
        }
        if (navigator.userAgent.includes("Mac")) {
          return "Mac";
        }
        if (navigator.userAgent.includes("Linux")) {
          return "Linux";
        }
        return "un sistema desconocido";
      }

      function mostrarBienvenida() {
        const sistema = detectarSistema(navigator.userAgent);
        const parrafo = document.getElementById("bienvenida");
        parrafo.textContent = "¡Bienvenido! Estás navegando desde " + sistema + ".";
      }

      function padreDisponible() {
        if (window.opener && !window.opener.closed) {
          return true;
        }
        document.getElementById("aviso").textContent = "No se encuentra la ventana principal. Abre esta ventana desde index.html.";
        return false;
      }

      function redirigirConHistorial() {
        if (padreDisponible()) {
          window.opener.location.assign(URL_ILERNA);
        }
      }

      function redirigirSinHistorial() {
        if (padreDisponible()) {
          window.opener.location.replace(URL_ILERNA);
        }
      }

      function autoDestruccion() {
        if (padreDisponible()) {
          setTimeout(function () {
            window.close();
          }, 5000);
        }
        document.getElementById("aviso").textContent = "Esta venta se autodestruye en 5 segundos";
      }

      window.addEventListener("load", mostrarBienvenida);
      document.getElementById("btnConHistorial").addEventListener("click", redirigirConHistorial);
      document.getElementById("btnSinHistorial").addEventListener("click", redirigirSinHistorial);
      document.getElementById("btnAutoDestruccion").addEventListener("click", autoDestruccion);
