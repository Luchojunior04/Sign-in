const userName = document.getElementById("userName")
const Password = document.getElementById("Password")

const contraseñaCorrecta = "admin"
const usuarioContra = "Luis junior"
const SignInBtn = document.getElementById("SignInBtn")
SignInBtn.addEventListener("click", function(){
    
    if(userName.value === usuarioContra && Password.value === contraseñaCorrecta){
       alert("Vales pan")
    } else {
      alert('acceso denegado')
    }
    
    
    
    //console.log(userName.value)
    //console.log(Password.value)
});

//function ingresarElemento(){
  //  console.log(userName.value)

//}

