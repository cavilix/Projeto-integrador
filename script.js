document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Aqui você pode enviar os dados para um servidor ou fazer outras ações com os dados do formulário
        // Por exemplo: enviar os dados para um servidor via fetch() ou XMLHttpRequest
        // Exemplo de envio usando fetch():
        // fetch("URL_DO_BACKEND", {
        //     method: "POST",
        //     body: JSON.stringify({ nome, email, mensagem }),
        //     headers: {
        //         "Content-type": "application/json; charset=UTF-8"
        //     }
        // })
        // .then(response => {
        //     // Lógica para lidar com a resposta do servidor
        // })
        // .catch(error => {
        //     // Lógica para lidar com erros de envio
        // });
        
        // Este é apenas um exemplo de validação no lado do cliente.
        // Para um site real, é necessário um backend para processar e armazenar esses dados com segurança.
        
        // Limpar o formulário após o envio (apenas para simular o envio)
        document.getElementById("contactForm").reset();
        alert("Mensagem enviada com sucesso!");
    });
});