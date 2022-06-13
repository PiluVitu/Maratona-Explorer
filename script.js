// Variáveis
let question = document.querySelector('#question')

let answerElement = document.querySelector('#answer')

const answers = [
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim,definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver,sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]
const amountAnswers = answers.length

function makeAQuestion() {
  if (question.value == '') {
    alert(`Digite Algo para perguntar`)
    return
  }

  button.setAttribute('disabled', true)

  let questionShow = `<div> ${question.value} </div>`
  let answersIndex = Math.floor(Math.random() * amountAnswers)
  answerElement.innerHTML = questionShow + answers[answersIndex]

  answerElement.style.opacity = 1

  setTimeout(function () {
    answerElement.style.opacity = 0
    button.removeAttribute('disabled')
  }, 3000)
}
