###### [< Voltar](../README.md)



![Relógio](svg/relog)



#  :timer_clock: Relógio Interativo



###### Resumo

Este projeto se se resume em criar um relógio interativo que além de mostrar o horário em tempo real do cliente também possa exibir em que dia da semana Ele(a) está no momento. A sua construção foi um pouco simples utilizando comandos básicos como o de condicionais e de data.



##### HTML

A construção do código em HTML possui uma estrutura bem simplista, além dos códigos comuns da linguagem e a ligação externa com a folha de estilos (CSS) e com o Javascript (js), se resume em:



><body *onload*="relogio()"> <!-- Carrega a função do relógio -->
>
>< h1>Relógio interativo</h1>
>
>< p id="saudar">...</p>
>
>  <label *id*="relogio" *onclick*="diaSemana()">...</label>



##### CSS

Na folha de estilo foram inserido vários elementos, mas todos de maneira bem personalizada, como por exemplo: cores, tamanho de fonte, tipo de fonte, etc.:



> body {
>
>   background-color: antiquewhite;
>
>   font-family: 'Times New Roman', Times, serif;
>
>   text-align: center;
>
> }
>
> *#relogio* {
>
>   font-size: 28px;
>
>   border: solid 1px;
>
>   border-radius: 10px;
>
>   background-color: #00b1b1;
>
>   padding: 2px 50px;
>
>   color: #fff;
>
>   font-family: "Roboto", sans-serif;
>
> }
>
> *#relogio**:**hover* {
>
>   transition:  0.6s;
>
>   background-color: #fff;
>
>   color: #00b1b1;
>
> }
>
> *.segundos* {
>
>   font-size: 15pt;
>
> }



##### JAVASCRIPT

Aqui é onde toda a magia acontece :happy:, você pode ver como a interação de verdade acontece:



>let seuNome = prompt("Qual o seu nome?")
>
>var saudar = document.getElementById('saudar')
>
>var data = **new** *Date*()
>
>var hora = data.getHours()
>
>if (hora < 12 && hora >= 5) {
>
>  saudar.innerHTML = `Bom dia ${seuNome} são exatamente:`
>
>} else if (hora <= 18) {
>
>  saudar.innerHTML = `Boa tarde ${seuNome} são exatamente:`
>
>} else {
>
>  saudar.innerHTML = `Boa noite ${seuNome} são exatamente:`
>
>}
>
>
>
>function relogio() {
>
>var agora = **new** *Date*()
>
>var horas = agora.getHours()
>
>var minutos = agora.getMinutes()
>
>var segundos = agora.getSeconds()
>
>
>
>if(horas < 10){
>
>  horas = '0'+ horas
>
>} else if(minutos < 10){
>
>  minutos = '0'+ minutos
>
>} else if(segundos < 10){
>
>  segundos = '0'+ segundos
>
>}
>
>
>
>var meuRelogio = `${horas}:${minutos}<span class="segundos">:${segundos}</span>`
>
>var resRelog = document.querySelector('#relogio')
>
>resRelog.innerHTML = `${horas}:${minutos}<span class="segundos">:${segundos}</span>`
>
>}
>
>
>
>function diaSemana() {
>
>var resRelog = document.querySelector('#relogio')
>
>var agora = **new** *Date*()
>
>var diaSem = agora.getDay()
>
>
>
>
>
>switch(diaSem) {
>
>  case 0:
>
>  resRelog.innerHTML = "Domingo"
>
>  break
>
>
>
>  case 1:
>
>  resRelog.innerHTML = "Segunda-feira"
>
>  break
>
>
>
>  case 2:
>
>  resRelog.innerHTML = "Terça-feira"
>
>  break
>
>
>
>  case 3:
>
>  resRelog.innerHTML = "Quarta-feira"
>
>  break
>
>
>
>  case 4:
>
>  resRelog.innerHTML = "Quinta-feira"
>
>  break
>
>
>
>  case 5:
>
>  resRelog.innerHTML = "Sexta-feira"
>
>  break
>
>
>
>  case 6:
>
>  resRelog.innerHTML = "Sábado"
>
>  break
>
>}
>
>
>
>}
>
>window.setInterval('relogio()', 1000)
