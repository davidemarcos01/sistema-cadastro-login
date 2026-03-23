let user = JSON.parse(localStorage.getItem('usuarioLogado'));

if (!user) {
    window.location.href = 'login.html';
}

let dados = `
Nome: ${user.nome} <br>
E-mail: ${user.email} <br>
Telefone: ${user.telefone}
`;

document.getElementById('dados').innerHTML = dados;

function logout() {
    localStorage.removeItem('usuarioLogado');
    window.location.href = 'login.html';
}