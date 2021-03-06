const formulario = document.querySelector('form')
const botonSubmit = document.querySelector('form button')
const marcoHobbies = document.querySelector('#marcoHobbies')
const inputNombre = document.querySelector('#nombre')
const inputContrasenia = document.querySelector('#pass')
const inputTelefono = document.querySelector('#tel')
const checkBoxes = document.querySelectorAll('[name=hobbies]')

// const checkboxes = document.getElementsByName('hobbies');
const radioButons = document.querySelectorAll('[name=nacionalidad]')

const mensajeNombre = document.querySelector('#mensajeNombre')
const mensajeRaddioButton = document.querySelector('#mensajeRaddioButton')

let listadoHobbies = []
let nacionalidad = ''

// objeto auxiliar para datos
const datosUsuario = {
  nombre: '',
  contrasenia: '',
  telefono: '',
  hobbies: [],
  nacionalidad: '',
}

/* -------- lanzamos la validacion de nombre cuando salimos del input ------- */

function addHobbies() {
  console.log(checkBoxes[0])

  let objects = {}
  listadoHobbies = [...checkBoxes]
    .filter((hobbie) => {
      objects[hobbie.id] = hobbie
      return hobbie.checked
    })
    .map((hobbie) => hobbie.id)

  combinationCheckBoxes('hobbiesCocina', 'hobbiesVideoJuegos', objects)
  combinationCheckBoxes('hobbiesGuitarra', 'hobbiesLectura', objects)
  combinationCheckBoxes('hobbiesNetflix', 'hobbiesTejer', objects)

  datosUsuario.hobbies = listadoHobbies
}

function combinationCheckBoxes(comb1, comb2, obj) {
  obj[comb1].disabled = listadoHobbies.includes(comb2)
  obj[comb2].disabled = listadoHobbies.includes(comb1)
}
function getNacionalidad() {
  radioButons.forEach((button) => {
    if (button.checked) {
      nacionalidad = button.id
    }
  })
  if (nacionalidad === 'nacionalidadArgentina') {
    mensajeRaddioButton.classList.remove('oculto')
  } else {
    mensajeRaddioButton.classList.add('oculto')
  }
  datosUsuario.nacionalidad = nacionalidad
}

function normalizar(nom, pass, tel, listado, pais) {
  const datos = {
    name: nom.toUpperCase(),
    password: pass,
    phone: tel,
    hobbies: listado,
    country: pais,
  }

  return datos
}

function validarNombre(nombre) {
  let resultado = true

  let cantidadCaracteres = 0
  let caracteresInvalidos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '-', ',']
  let palabras = datosUsuario.nombre.split(' ')

  // validamos y mandamos true en caso de ser correcto

  //valida que almenos hallan 2 palabras
  if (datosUsuario.nombre.split(' ').length < 2) return false

  //valida que cada palabra tenga mas de 1 char
  palabras.forEach((palabra) => {
    cantidadCaracteres += palabra.length
    if (palabra.length < 1) {
      resultado = false
    }
  })

  //validar maximo 150 char
  if (cantidadCaracteres > 150) return false

  // - no debe contener un caracter invalido
  caracteresInvalidos.forEach((caracter) => {
    if (nombre.includes(caracter)) {
      resultado = false
    }
  })

  return resultado
}

/* Eventos*/
formulario.addEventListener('submit', function (event) {
  // frenamos el env??o por defecto
  event.preventDefault()
  console.log('Submit')

  //normalizar
  console.log(
    normalizar(
      inputNombre.value,
      inputContrasenia.value,
      inputTelefono.value,
      listadoHobbies,
      nacionalidad
    )
  )

  //finalizar
  formulario.reset()
})

formulario.addEventListener('change', function () {
  console.log('cambio en el form')
  addHobbies()
  getNacionalidad()

  console.log(datosUsuario)
  if (
    validarNombre(datosUsuario.nombre) &&
    datosUsuario.hobbies.length <= 4 &&
    datosUsuario.nacionalidad != 'nacionalidadArgentina'
  ) {
    console.log('>>> Exitoso')
    botonSubmit.removeAttribute('disabled')
  } else {
    console.log('>>> Fallo')
    botonSubmit.setAttribute('disabled', '')
  }
})

inputNombre.addEventListener('blur', function () {
  datosUsuario.nombre = inputNombre.value

  //validar nombre
  if (!validarNombre(inputNombre.value)) {
    // si su return es false
    mensajeNombre.classList.remove('oculto')
    inputNombre.classList.add('error')
  } else {
    mensajeNombre.classList.add('oculto')
    inputNombre.classList.remove('error')
  }
})

inputNombre.addEventListener('change', function (e) {
  datosUsuario.nombre = inputNombre.value
})
