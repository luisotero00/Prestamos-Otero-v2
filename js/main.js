let deudores 
let newDeudor = localStorage.getItem("lista-deudores")
if (newDeudor == null){
    deudores = []
}else{
    deudores = JSON.parse(newDeudor)
}
const button = document.getElementById("btnAdd");
const button1 = document.getElementById("btnShow")
class Deudor {
    constructor(nombre, deuda) {
        this.nombre = nombre
        this.deuda = deuda
    }
    mensaje() {
        alert("El usuario: " + this.nombre + " " + "Su deuda es: " + this.deuda)
    }
}

button.addEventListener('click', () => {
    addUser()
});
function calculateInterest(principal, rate, months) {
    return principal * rate * months / 100;
}
function addUser() {
    let nombreUsuario = prompt("Ingrese Usuario")
    console.log(nombreUsuario);
    if (!(nombreUsuario == null || nombreUsuario == "")) {
        const principal = prompt("CANTIDAD DEL PRESTAMO"); // Monto del préstamo
        const rate = 2.5 / 12; // Tasa mensual convertida a tasa mensual
        const months = 12; // Número de meses
        const interest = calculateInterest(principal, rate, months);
        alert("El interés es de $" + interest);

        const deudor = new Deudor(nombreUsuario, interest)
        deudores.push(deudor);
        localStorage.setItem("lista-deudores", JSON.stringify(deudores))
        console.log(nombreUsuario, interest);
        deudor.mensaje()
    }
    
}

button1.addEventListener('click', () => {
    showUser()
});

function showUser() {
    for (const deudor of deudores) {
        console.log(deudores);
        console.log(deudor);
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<h3> Deudor: ${deudor.nombre}</h3>
                                <h3> Deuda: ${deudor.deuda}</h3>`;
        document.body.appendChild(contenedor);
    }


}

