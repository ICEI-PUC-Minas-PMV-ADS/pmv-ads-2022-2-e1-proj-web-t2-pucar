const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

function buscar() {
    if (usuarioLogado) {
        window.location.href = "/resultado-busca";
    }else {
        alert('Crie uma conta para poder pesquisar uma carona.')
    }
        
}

const users = JSON.parse(localStorage.getItem('users'))
console.log(users);
users.forEach(user => {
    document.querySelector('.container').innerHTML += `
        <div class="usuario">
            <img src="/img/icon-user.png" alt="">
            <h1>${user.nome}</h1>
            <p>${user.telefone}</p>
            <p>${user.endereco}</p>
        </div>
    `
});

function scrollToElement(id) {
    const element = document.getElementById(id)
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    })
}


if (usuarioLogado) {
    const cabecalhoDireita = document.getElementById('cabecalho-direita')
    cabecalhoDireita.innerHTML = `
        <button onclick='location.href = "/perfil"'>Perfil</button>
        <button onclick='sair()'>Sair</button>
    `
}

function sair() { 
    localStorage.setItem('usuarioLogado', null)
    location.reload()
}
