
let user = prompt('Por favor ingrese su Usuario: ')
let pass = prompt('Ingrese su Password: ')

console.log(user);
console.log(pass);

if (user == 'mario' && pass == '1234') {
    alert('Bienvenido a su Sistema');
    window.location.href = './admin.html'
} else {
    alert('Usuario o password incorrecto')
    window.location.href = './error.html'
}