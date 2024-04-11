function validar() {
    var resp;
    resp=validarContraseña();
    if (resp==false) {
        return false;
    }

    return true;
}
function validarContraseña(){
    let pass1=document.getElementById("txtPass1").value;
    let pass2=document.getElementById("txtPass2").value;
    if (pass1==pass2) {
        return true;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Contraseña incorrecta!',
            
            
          })
        
        return false;
    }    
}

   