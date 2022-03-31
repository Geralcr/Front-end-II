/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/
let text = document.querySelector('#comentario')
let form = document.querySelector('form')
let comments = document.querySelector('.comentarios')

let data = JSON.parse(localStorage.getItem('search'))

validateData()
function validateData() {
  if (data) {
    data.forEach((element) => {
      comments.innerHTML += renderText(element)
    })
  } else {
    data = []
  }
}

//Eventos
form.addEventListener('submit', clickSubmit)

function clickSubmit(e) {
  e.preventDefault()
  updateData()
  localStorage.setItem('search', JSON.stringify(data))
  text.value = ''
}

function updateData() {
  let test = getData()
  data.push(test)
  data.includes(test)

  validateData()
}

function getData() {
  let buscado = text.value.trim()
  return buscado
}

function renderText(text) {
  return `<p>${text}</p>`
}
