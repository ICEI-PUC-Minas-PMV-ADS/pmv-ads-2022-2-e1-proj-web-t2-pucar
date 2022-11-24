function scrollToElement(id) {
    const element = document.getElementById(id)
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

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

function setUser() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([
            {
                foto: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                nome: "nome",
                telefone: "telefone",
                endereco: "endereco",
                tipo: "passageiro",
            },

            {
                foto: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                nome: "nome",
                telefone: "telefone",
                endereco: "endereco",
                tipo: "passageiro",
            },

            {
                foto: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                nome: "nome",
                telefone: "telefone",
                endereco: "endereco",
                tipo: "passageiro",
            },
            
            {
                foto: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                nome: "nome",
                telefone: "telefone",
                endereco: "endereco",
                tipo: "passageiro",
            }
        ]))
    }
}
setUser()