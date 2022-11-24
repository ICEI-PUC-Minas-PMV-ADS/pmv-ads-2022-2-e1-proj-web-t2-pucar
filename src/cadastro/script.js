const inputName = document.querySelector("#nome");
const inputId = document.querySelector("#matricula")
const inputNumber = document.querySelector('#telefone')
const inputAdress = document.querySelector('#endereco')

//script para prevenir a utilização de números e caracteres especiais
inputName.addEventListener("keypress",function(e){
    const keyCode = (e.keyCode ? e.keyCode : e.wich);
    if((keyCode > 33 && keyCode < 64) || (keyCode > 90 && keyCode < 94) || (keyCode > 122 && keyCode < 126)){
        e.preventDefault();
        window.alert("Não é possível inserir números ou caractéres especiais neste campo")
    }
})
//script para prevenir a utilização de letras e caracteres especiais
inputId.addEventListener("keypress",function(f){
    const keyCode = (f.keyCode ? f.keyCode : f.wich);
    if(keyCode < 48 || keyCode > 57){
        f.preventDefault();
        window.alert("Não é possível inserir letras ou caractéres especiais neste campo")
    }
})
//script para prevenir a utilização de letras e caracteres especiais
inputNumber.addEventListener("keypress",function(g){
    const keyCode = (g.keyCode ? g.keyCode : g.wich);
    if(keyCode < 40 || (keyCode > 41 && keyCode < 48) || keyCode > 57){
        g.preventDefault();
        window.alert("Não é possível inserir letras ou caractéres especiais neste campo")
    }
})
//script para prevenir a utilização de números e caracteres especiais
inputAdress.addEventListener("keypress",function(h){
    const keyCode = (h.keyCode ? h.keyCode : h.wich);
    if((keyCode > 33 && keyCode < 64) || (keyCode > 90 && keyCode < 94) || (keyCode > 122 && keyCode < 126)){
        h.preventDefault();
        window.alert("Não é possível inserir números ou caractéres especiais neste campo")
    }
})

function cadastrar() {
    const nome = document.getElementById('nome').value
    const email = document.getElementById('email').value
    //verificação se o email cadastrado é da puc
    let dominio = ""
    //for para separação do dominio do email
    for(i = 0; i < email.length ; i++){
        if(email.substring(i,i+1) == '@'){
            dominio = email.substring(i,email.length)
        } 
    }
    //comparação com o dominio da puc
    if(dominio != "@sga.pucminas.br"){
        window.alert("Digite um e-mail válido ex.: maria@sga.pucminas.br")
        return //return para encerramento da função cadastro
    }
    const matricula = document.getElementById('matricula').value
    const senha = document.getElementById('senha').value
    //verificação de comprimento de senha
    if(senha.length < 8){
        window.alert("a senha deverá ter pelo menos 8 caracteres")
        return //return para encerramento da função cadastro
    }
    const vSenha = document.getElementById('confirme-senha').value
    //confirmação de senha
    if(senha != vSenha){
        window.alert("as senhas não coincidem")
        return //return para encerramento da função cadastro
    } 
    const telefone = document.getElementById('telefone').value
    const endereco = document.getElementById('endereco').value
    const tipo = document.querySelector('input[name="tipo"]:checked').value
    //verificação para campos vazios
    if(nome.length === 0 || email.length === 0 || matricula.length === 0 || telefone.length === 0 || endereco.length === 0){
        window.alert("verifique se todos os campos foram preenchidos")
        return//return para encerramento da função cadastro
    }
    const users = JSON.parse(localStorage.getItem('users'))
    users.push({
        nome,
        email,
        matricula,
        senha,
        telefone,
        endereco,
        tipo,
        foto: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
    })

    localStorage.setItem('users', JSON.stringify(users))

    location.href = '/login'

}

const users = localStorage.getItem('users')
if (!users) {
    localStorage.setItem('users', '[]')
}
