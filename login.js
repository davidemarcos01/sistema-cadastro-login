function login() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

    let usuario = clientes.find(c => c.email === email);

    if (!usuario) return alert('E-mail não encontrado');
    if (usuario.senha !== senha) return alert('Senha incorreta');

    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));

    alert('Login realizado com sucesso!');
    window.location.href = 'areaCliente.html';
}