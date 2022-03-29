/* Copyright (C) Jappa Developer

    Distribution: Free
    Author: Henrique Lima (Jappa)
    My GitHub: http://www.github.com/thejappa89
    My Linkedin: https://www.linkedin.com/in/thejappa89/
*/

// Saudação
let seuNome = prompt("Qual o seu nome?")
var saudar = document.getElementById('saudar')
var data = new Date()
var hora = data.getHours()
if (hora < 12 && hora >= 5) {
    saudar.innerHTML = `Bom dia ${seuNome} são exatamente:`
} else if (hora <= 18) {
    saudar.innerHTML = `Boa tarde ${seuNome} são exatamente:`
} else {
    saudar.innerHTML = `Boa noite ${seuNome} são exatamente:`
}

// Função do relógio
function relogio() {
var agora = new Date()
var horas = agora.getHours()
var minutos = agora.getMinutes()
var segundos = agora.getSeconds()

if(horas < 10){
    horas = '0'+ horas
} else if(minutos < 10){
    minutos = '0'+ minutos
} else if(segundos < 10){
    segundos = '0'+ segundos
}

var meuRelogio = `${horas}:${minutos}<span class="segundos">:${segundos}</span>`
var resRelog = document.querySelector('#relogio')
resRelog.innerHTML = `${horas}:${minutos}<span class="segundos">:${segundos}</span>`
}

// Função do dia da semana
function diaSemana() {
var resRelog = document.querySelector('#relogio')
var agora = new Date()
var diaSem = agora.getDay()


switch(diaSem) {
    case 0:
    resRelog.innerHTML = "Domingo"
    break

    case 1:
    resRelog.innerHTML = "Segunda-feira"
    break

    case 2:
    resRelog.innerHTML = "Terça-feira"
    break

    case 3:
    resRelog.innerHTML = "Quarta-feira"
    break

    case 4:
    resRelog.innerHTML = "Quinta-feira"
    break

    case 5:
    resRelog.innerHTML = "Sexta-feira"
    break

    case 6:
    resRelog.innerHTML = "Sábado"
    break
}

}
window.setInterval('relogio()', 1000) // Faz com que o relógio se atualize