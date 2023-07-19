
let administrador = {
    userAdmin: 'useradmin@gmail.com',
    passAdmin: '123456PPo'
}

console.log(administrador);
console.log(administrador.userAdmin);
console.log(administrador.passAdmin);

const loginAdmin = () => {

    let userAdmin = 'useradmin@gmail.com';
    let passAdmin = '123456PPo';

    let userEmail = document.getElementById("emailLogin").value;
    let userPassword = document.getElementById("passwordLogin").value;

    console.log(userAdmin, passAdmin);
    console.log(userEmail, userPassword);


    if (administrador.userAdmin == userEmail && passAdmin == userPassword) {
    alert('Bienvenido Admin');
    window.location.href = '../page/formulario.html';
    }else{
        alert('user o password incorrecta')
        window.location.href = '../page/error.html';
    }
    
}