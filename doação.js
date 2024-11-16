
const form = document.getElementById('cadastroForm');


form.addEventListener('submit', function(event) {
    event.preventDefault();

  
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    
    alert(`Cadastro realizado com sucesso! Bem-vindo(a), ${nome}.`);

    
    const desejaDoar = confirm("Você deseja fazer uma doação para o nosso projeto?");

    if (desejaDoar) {
       
        const valor = prompt("Qual valor você deseja doar?");

        if (valor && !isNaN(valor) && parseFloat(valor) > 0) {
            alert(`Obrigado pela sua generosidade! Um boleto no valor de R$${parseFloat(valor).toFixed(2)} será enviado para o e-mail ${email}.`);
        } else {
            alert("Valor inválido. Doação não registrada.");
        }
    } else {
        alert("Obrigado pelo cadastro! Agradecemos seu apoio.");
    }
});
