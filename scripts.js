// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-menu');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    nav.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission
const form = document.getElementById('form-contato');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulação de envio do formulário
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    
    // Aqui você normalmente enviaria os dados para um servidor
    console.log('Dados do formulário:', formValues);
    
    // Feedback para o usuário
    alert('Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.');
    form.reset();
});

// Inicialização de máscaras para telefone (se necessário)
// Esta é uma implementação básica - para produção, considere usar uma biblioteca dedicada
const telefoneInput = document.getElementById('telefone');
telefoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 0) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        if (value.length > 10) {
            value = value.replace(/(\d)(\d{4})$/, '$1-$2');
        } else {
            value = value.replace(/(\d)(\d{3})$/, '$1-$2');
        }
    }
    
    e.target.value = value;
});

// Animação de elementos ao rolar a página
function animateOnScroll() {
    const elements = document.querySelectorAll('.servico-card, .sobre-img, .info-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar estilos para animação
document.querySelectorAll('.servico-card, .sobre-img, .info-item').forEach(element => {
    element.style.opacity = 0;
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Adicionar evento de scroll para animação
window.addEventListener('scroll', animateOnScroll);
// Executar uma vez ao carregar a página para verificar elementos já visíveis
window.addEventListener('load', animateOnScroll);