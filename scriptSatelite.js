 const URL_ILERNA = "https://www.ilerna.es";

      function detectarSistema(userAgent) {
        if (userAgent.includes("Windows")) {
          return "Windows";
        }
        if (userAgent.includes("Mac")) {
          return "Mac";
        }
        if (userAgent.includes("Linux")) {
          return "Linux";
        }
        return "un sistema desconocido";
      }

      function mostrarBienvenida() {
        const sistema = detectarSistema(navigator.userAgent);
        const parrafo = document.getElementById("bienvenida");
        parrafo.textContent =
          "¡Bienvenido! Estás navegando desde " + sistema + ".";
      }

      // --- 2. Control del historial de la ventana madre ---
      function madreDisponible() {
        if (window.opener && !window.opener.closed) {
          return true;
        }
        document.getElementById("aviso").textContent =
          "No se encuentra la ventana principal. Abre esta ventana desde index.html.";
        return false;
      }

      function redirigirConHistorial() {
        if (madreDisponible()) {
          // assign() añade la nueva URL al historial: se puede volver atrás
          window.opener.location.assign(URL_ILERNA);
        }
      }

      function redirigirSinHistorial() {
        if (madreDisponible()) {
          // replace() sustituye la entrada actual del historial: no se puede volver atrás
          window.opener.location.replace(URL_ILERNA);
        }
      }

      window.addEventListener("load", mostrarBienvenida);
      document
        .getElementById("btnConHistorial")
        .addEventListener("click", redirigirConHistorial);
      document
        .getElementById("btnSinHistorial")
        .addEventListener("click", redirigirSinHistorial);
