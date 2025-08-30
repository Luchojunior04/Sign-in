let nota = 90

let asistencia = 95

let proyectoFinal = true;

if(nota >= 90 && nota <= 100 && asistencia >= 95 && proyectoFinal === "true" ){
 console.log("Honores")
}else if(nota >= 70 && nota <= 80 && asistencia >= 80){
    console.log("Aprueba")
}else if(nota >= 65 && nota <= 69 && proyectoFinal === true)
    if(nota >= 65 && nota <= 69 && proyectoFinal === false){
  console.log("apreuba si entrego el proyecto final")
}else if(nota >= 50 && nota <= 69 && asistencia >= 60 && asistencia <= 79){
  console.log("recuperacion si la asistencia esta de 60% en adelante")
} else{
  console.log("reprobado")
}