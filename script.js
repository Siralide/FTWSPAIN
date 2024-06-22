
      // Función para hacer scroll a una sección específica
      function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
      }
  
      // Escucha el evento de submit en el formulario de contacto
      document.querySelector('.contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Mensaje enviado correctamente!');
        this.reset();
      });
