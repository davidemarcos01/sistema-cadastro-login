function cadastrar() {
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let senha = document.getElementById('senha').value;
    let confirmar = document.getElementById('confirmar').value;

    if (nome === '') return alert('Nome não pode estar vazio');
    if (!email.includes('@')) return alert('E-mail inválido');
    if (telefone === '') return alert('Telefone não pode estar vazio');
    if (senha.length < 6) return alert('Senha deve ter no mínimo 6 caracteres');
    if (senha !== confirmar) return alert('Senhas devem ser iguais');

    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    let cliente = { nome, email, telefone, senha };
    clientes.push(cliente);

    localStorage.setItem('clientes', JSON.stringify(clientes));

    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html';
}