const elemento = document.querySelector(".container")

const dayspacial = new Date('Jun 5, 2021 00:00:00').getTime()

function wedding(){
    let today = new Date().getTime()
    let falta = dayspacial - today
    
    const segundos = 1000;
    const minutos = segundos*60;
    const horas = minutos*60;
    const dias = horas*24;

    const day = Math.floor(falta/dias)
    const hours = (Math.floor((falta%dias)/horas))
    const minutes = (Math.floor((falta%horas)/minutos))
    const seconds = (Math.floor((falta%minutos)/segundos)) 

    document.getElementById("day").innerText = day
    document.getElementById("hour").innerText = hours
    document.getElementById("minute").innerText = minutes
    document.getElementById("second").innerText = seconds


}

setInterval(()=>{
    wedding()
},1000)