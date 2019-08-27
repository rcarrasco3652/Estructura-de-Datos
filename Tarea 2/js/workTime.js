document.getElementById("btn").addEventListener('click', () => {
    obtenerHorasTrabajo();
})

function obtenerHorasTrabajo() {
    let ingresoHora = Number(document.getElementById("iHoras").value)
    let ingresoMinuto = Number(document.getElementById("iMinutos").value)
    let ingresoSegundo = Number(document.getElementById("iSegundos").value)
    let salidaHora = Number(document.getElementById("sHoras").value)
    let salidaMinuto = Number(document.getElementById("sMinutos").value)
    let salidaSegundo = Number(document.getElementById("sSegundos").value)

    let entrada = new Date()
    entrada.setHours(ingresoHora,ingresoMinuto,ingresoSegundo)

    let salida = new Date()
    salida.setHours(salidaHora,salidaMinuto,salidaSegundo)

    let diferencia = new Date()
    diferencia.setHours(salida.getHours() -entrada.getHours() )
    diferencia.setMinutes(salida.getMinutes() -entrada.getMinutes() )
    diferencia.setSeconds(salida.getSeconds() -entrada.getSeconds() )

    console.log(`El empleado trabajo ${diferencia.getHours()} horas con ${diferencia.getMinutes()} minutos y ${diferencia.getSeconds()} segundos`)
}