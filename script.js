function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado correctamente!');
    this.reset();
});
