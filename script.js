// Script para alternar entre os temas claro e escuro
const inputs = document.querySelectorAll('input[name="theme"]');
inputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.value === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    });
});

// Função para mostrar/esconder o contato
function toggleContact() {
    const overlay = document.getElementById('contact-overlay');
    
    // Se estiver escondido, mostra. Se estiver visível, esconde.
    if (overlay.style.display === 'flex') {
        overlay.style.display = 'none';
    } else {
        overlay.style.display = 'flex';
    }
}

// Opcional: Fechar se clicar no fundo escuro (fora da caixinha)
window.onclick = function(event) {
    const overlay = document.getElementById('contact-overlay');
    if (event.target == overlay) {
        overlay.style.display = 'none';
    }
}

function copyEmail() {
    navigator.clipboard.writeText("ivompb2000@gmail.com");
    alert("E-mail copiado com sucesso!");
}