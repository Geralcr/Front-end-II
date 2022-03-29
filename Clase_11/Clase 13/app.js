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
  checkBoxes.forEach((hobbie) => {
    if (hobbie.checked) {
      if (!listadoHobbies.includes(hobbie.id)) {
        listadoHobbies.push(hobbie.id)
      }
    } else {
      if (!hobbie.checked) {
        let index = listadoHobbies.indexOf(hobbie.id)
        if (index !== -1) {
          listadoHobbies.splice(index, 1)
        }
      }
    }

    let prueba = false
    let geral = false
    prueba = hobbie.id == 'hobbiesVideoJuegos' || hobbie.id == 'hobbiesCocina' ? true : false
    // if (hobbie.id == 'hobbiesVideoJuegos' && hobbie.checked) {
    //   console.log('>> entre')
    //   if (hobbie.id == 'hobbiesCocina' && !hobbie.checked && prueba) {
    //     console.log('>> entre siii')
    //     hobbie.disabled = true
    //   }
    // }

    if (!hobbie.checked && prueba) {
      hobbie.disabled = true
    }

    console.log('seleccionado', hobbie.id, hobbie.checked, hobbie.disabled, prueba)
  })

  datosUsuario.hobbies = listadoHobbies
}

function combinationCheckBoxes() {}
function getNacionalidad() {
  radioButons.forEach((button) => {
    if (button.checked) {
      nacionalidad = button.id
    }
  })
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
  // frenamos el envío por defecto
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
  if (validarNombre(datosUsuario.nombre) && datosUsuario.hobbies.length <= 4) {
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
