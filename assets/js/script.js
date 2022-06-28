var nome = window.document.querySelector('#nome')
var email = window.document.querySelector('#email')
var comments = window.document.querySelector('#comment')
var nomeOk = false
var emailOk = false
var commentOk = false

nome.style.width = '100%';


function validarNome(){
    let TxtNome= document.querySelector('#txtNome')
    if(nome.value.length <2){
        TxtNome.innerHTML="Nome Inválido"
        TxtNome.style.color = "red"
        
    }else{
        TxtNome.innerHTML="Nome Válido"
        TxtNome.style.color ="#7ac142"
        nomeOk=true
    }



}



function validarEmail(){
    let TxtEmail = document.querySelector('#txtEmail')
        
        if(email.value.indexOf('@') == -1){
        TxtEmail.innerHTML='Email inválido'
       emailOk=false
    }else{
        TxtEmail.innerHTML='Email valido'
        emailOk=true
    }
}

function validarAssunto(){
    let enviar = document.querySelector('#comment')
    assuntoOk=true
}

function enviar(){
        if(nomeOk == true && emailOk == true && assuntoOk == true ){
            alert ('Enviado');
}else {
    alert ('Preencha o formulário corratamente...')
}


} 
    

