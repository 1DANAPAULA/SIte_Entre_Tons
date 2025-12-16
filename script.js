let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// 1. Seleciona o formulário pelo seu seletor de classe
const contactForm = document.querySelector('.contact-form');

// 2. Adiciona um "ouvinte de evento" (event listener) que espera o evento 'submit'
contactForm.addEventListener('submit', function(event) {
    // Evita que o formulário seja enviado de forma padrão, recarregando a página
    event.preventDefault(); 

    // --- 3. Obtenção dos Dados ---
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // --- 4. Exemplo de Validação Simples ---
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, preencha todos os campos antes de enviar.');
        return; // Para o processamento
    }
    
    // --- 5. Ações de Interação e Feedback ---
    
    // Exibe os dados no console do navegador para fins de teste
    console.log('Dados a serem enviados:', {
        Nome: name,
        Email: email,
        Mensagem: message
    });
    
    // Alerta de sucesso (interação com o usuário)
    alert('Obrigado, ' + name + '! Sua mensagem foi enviada com sucesso!');

    // Limpa o formulário após o "envio" (interação visual)
    contactForm.reset();
    
    // **NOTA:** Em um site real, a interação aqui seria enviar esses dados 
    // para um servidor usando a função 'fetch()' ou 'XMLHttpRequest'.
});