
const NOMBRE = prompt("Ingrese su nombre").toLowerCase();
alert("Hola" + " " + NOMBRE);

let continuar;

do {
    let moneda, cambio;

    while (true) {
        moneda = prompt("Que moneda quieres cambiar? ARS/USD/EUR").toUpperCase();
        if (moneda === "ARS" || moneda === "USD" || moneda === "EUR") {
            break;
        } else {
            alert("Moneda no válida. Por favor, ingrese ARS, USD o EUR.");
        }
    }

    while (true) {
        cambio = prompt("Ingrese a qué moneda quiere cambiar ARS/USD/EUR").toUpperCase();
        if (cambio === "ARS" || cambio === "USD" || cambio === "EUR") {
            if (cambio === moneda) {
                alert("No puedes cambiar a la misma moneda");
            } else {
                break;
            }
        } else {
            alert("Moneda de cambio no válida. Por favor, ingrese ARS, USD o EUR.");
        }
    }
    let operacion;

    do {
        operacion = prompt("¿Qué operación deseas hacer? COMPRA/VENTA").toLowerCase();

        if (operacion !== "compra" && operacion !== "venta") {
            console.log("Elige una operación permitida");
        }

    } while (operacion !== "compra" && operacion !== "venta");

    if (operacion !== "compra" && operacion !== "venta") {
        console.log("Elige una operación permitida");
    } else {
        switch (moneda) {
            case "ARS":
                switch (cambio) {
                    case "USD":
                        console.log("La cotización del día es $40 por dólar");
                        break;
                    case "EUR":
                        console.log("La cotización del día es $45 por euro");
                        break;
                    default:
                        console.log("Moneda de cambio no válida");
                }
                break;
            case "USD":
                switch (cambio) {
                    case "ARS":
                        console.log("La cotización del día es $40 pesos por dólar");
                        break;
                    case "EUR":
                        console.log("La cotización del día es $1.15 dólares por euro");
                        break;
                    default:
                        console.log("Moneda de cambio no válida");
                }
                break;
            case "EUR":
                switch (cambio) {
                    case "USD":
                        console.log("La cotización del día es $0.75 euros por dólar");
                        break;
                    case "ARS":
                        console.log("La cotización del día es $45 pesos por euro");
                        break;
                    default:
                        console.log("Moneda de cambio no válida");
                }
                break;
            default:
                console.log("Moneda no válida");
        }
    }

    continuar = prompt("¿Desea realizar otra conversión? (SI/NO)").toLowerCase();
} while (continuar === "si");
