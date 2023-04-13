let deudores
let newDeudor = localStorage.getItem("lista-deudores")
if (newDeudor == null) {
    deudores = []
} else {
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
    let nombreUsuario = document.getElementById("nombre").value;
    console.log(nombreUsuario);
    if (!(nombreUsuario == null || nombreUsuario == "")) {
        const principal = document.getElementById("prestamo").value;
        const rate = 2.5 / 12; // Tasa mensual convertida a tasa mensual
        const months = 12; // Número de meses
        const interest = calculateInterest(principal, rate, months);


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
    const lista = document.getElementById("lista")
    lista.innerHTML = ""

    for (const deudor of deudores) {
        console.log(deudores);
        console.log(deudor);
        let contenedor = document.createElement("div");
        contenedor.classList.add("divDeuda")
        contenedor.innerHTML = `<h3> Deudor: ${deudor.nombre}</h3>
                                <h3> Deuda: ${deudor.deuda}</h3>`;
        lista.appendChild(contenedor);
    }
}



