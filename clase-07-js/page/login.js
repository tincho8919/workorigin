function loguear (){

    let user=document.getElementById('usuario').value;

    let pass=document.getElementById('password').value;

    if(user=='pepe' && pass==1234)
    {
        window.location='final.html';
    }

    else{
        alert('datos incorrectos');
    }
}
