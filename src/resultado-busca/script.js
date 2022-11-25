const users = JSON.parse(localStorage.getItem('users'))

const { tipo, bairro } = getUrlVars()
const filteredUsers = users.filter(user => user.tipo === tipo && user.endereco === bairro)

filteredUsers.forEach(user => {
    document.querySelector('.containerG').innerHTML += `
        <div class="usuario">
            <img src="${user.foto}" alt="">
            <h1>${user.nome}</h1>
            <p>${user.telefone}</p>
            <p>${user.endereco}</p>
            <p class="tipo">${user.tipo}</p>
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

function getUrlVars() {
    let vars = {};
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
