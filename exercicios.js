// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  const soma = num1 + num2
  return soma
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log (mensagem) 
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt ('Digite a altura:')
  const largura = prompt ('Digite a largura:')
  const area = altura*largura

  console.log (area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = prompt ('Digite o ano atual:')
  const anoNasc = prompt ('Digite o ano em que nasceu:')
  const idade = anoAtual-anoNasc

  console.log (idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura*altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt ("Digite seu nome")
  const idade = prompt ("Digite seu idade")
  const email = prompt ("Digite seu email")

  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt ('Digite uma cor')
  let cor2 = prompt ('Digite uma cor')
  let cor3 = prompt ('Digite uma cor')

  const listaCores = [cor1,cor2,cor3]
  console.log (listaCores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  const stringUp = string.toUpperCase ()
  
  return stringUp
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const ingressosVendidos = custo/valorIngresso;

  return ingressosVendidos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const mesmoTamanho = string1.length === string2.length

  return mesmoTamanho
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]

  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {

  return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroItem = array[0]
  array.shift()
  array.unshift(array[array.length-1])
  array.pop()
  array.push(primeiroItem)
  
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {

  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}