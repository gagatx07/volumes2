function cubo(){
    let ladoc= Number(prompt("Qual o valor do lado do cubo?"))
    let valorCubo= ladoc*ladoc*ladoc
    alert(`"O valor do volume do cubo é de ${valorCubo} m³`)
    respCubo= document.querySelector('h2#cubo')
    respCubo.textContent= `O valor do volume do cubo é de ${valorCubo} m³`
}
function cone(){
    const pi = 3.14
    let raioCone = Number(prompt("Qual o valor do raio da base do cone?"))
    let alturaCone = Number(prompt("Qual o valor da altura do cone?"))
    let valorCone = ((pi*(raioCone*raioCone))*alturaCone)/3
    alert(`o valor do volume do cone é de ${valorCone} m³`)
    respCone = document.querySelector('h2#cone')
    respCone.textContent = `O valor do volume do cone é de ${valorCone} m³`
}
function piramide(){
    let ladoPiramide = Number(prompt("Qual o valor do lado da base da piramide?"))
    let alturaPiramide = Number(prompt("Qual o valor da altura da piramide"))
    let valorPiramide = ((ladoPiramide*ladoPiramide)*alturaPiramide)/3
    alert(`o valor do volume da piramide é de ${valorPiramide} m³`)
    respPiramide = document.querySelector('h2#pirâmide')
    respPiramide.textContent = `O valor do volume da piramide é de ${valorPiramide} m³`
}
function paralelepipedo(){
    let compParalelepipedo = Number(prompt("Qual o valor do comprimento do paralelepipedo?"))
    let largParalelepipedo = Number(prompt("Qual o valor da largura do paralelepipedo?"))
    let alturaParalelepipedo = Number(prompt("Qual o valor da altura do paralelepipedo"))
    let valorParalelepipedo = ((compParalelepipedo*largParalelepipedo)*alturaParalelepipedo)
    alert(`o valor do volume da paralelepipedo é de ${valorParalelepipedo} m³`)
    respParalelepipedo= document.querySelector('h2#paralelepipedo')
    respParalelepipedo.textContent = `O valor do volume da paralelepipedo é de ${valorParalelepipedo} m³`
}
function cilindro(){
    const pi = 3.14
    let raioCilindro = Number(prompt("Qual o valor do raio da base do cilindro?"))
    let alturaCilindro = Number(prompt("Qual o valor da altura do cilindro?"))
    let valorCilindro = ((pi*(raioCilindro*raioCilindro))*alturaCilindro)
    alert(`o valor do volume do cilindro é de ${valorCilindro} m³`)
    respCilindro = document.querySelector('h2#cilindro')
    respCilindro.textContent = `O valor do volume do cilindro é de ${valorCilindro} m³`
}
function esfera(){
    const pi = 3.14
    let raioEsfera = Number(prompt("Qual o valor do raio da esfera?"))
    let valorEsfera = (4*pi*(raioEsfera*raioEsfera*raioEsfera))/3
    alert(`o valor do volume da esfera é de ${valorEsfera} m³`)
    respEsfera = document.querySelector('h2#esfera')
    respEsfera.textContent = `O valor do volume do esfera é de ${valorEsfera} m³`
}