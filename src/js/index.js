function showAdoptForm(animal) {
    document.getElementById('animalType').value = animal;
    document.getElementById('adoptModal').style.display = 'block';
}

function closeAdoptForm() {
    document.getElementById('adoptModal').style.display = 'none';
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensagem enviada com sucesso!');
    // Aqui você pode adicionar lógica para enviar o formulário
    this.reset();
});

document.getElementById('adoptForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário de adoção enviado com sucesso!');
    // Aqui você pode adicionar lógica para enviar o formulário
    closeAdoptForm();
    this.reset();
});