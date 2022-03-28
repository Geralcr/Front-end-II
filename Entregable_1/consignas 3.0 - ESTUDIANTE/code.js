/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: '',
  edad: 0,
  ciudad: '',
  interesPorJs: '',
}

const listado = [
  {
    imgUrl: 'https://huguidugui.files.wordpress.com/2015/03/html1.png',
    lenguajes: 'HTML y CSS',
    bimestre: '1er bimestre',
  },
  {
    imgUrl: 'https://jherax.files.wordpress.com/2018/08/javascript_logo.png',
    lenguajes: 'Javascript',
    bimestre: '2do bimestre',
  },
  {
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png',
    lenguajes: 'React JS',
    bimestre: '3er bimestre',
  },
]

const profileBtn = document.querySelector('#completar-perfil')
const materiasBtn = document.querySelector('#obtener-materias')
const verMasBtn = document.querySelector('#ver-mas')
const cambiarTema = document.querySelector('#cambiar-tema')

profileBtn.addEventListener('click', renderizarDatosUsuario)
materiasBtn.addEventListener('click', recorrerListadoYRenderizarTarjetas)
cambiarTema.addEventListener('click', alternarColorTema)
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let name = prompt('Ingrese su nombre completo')
  let birthdayYear = prompt('Ingrese el año de nacimiento')
  let city = prompt('Ingrese su ciudad de residencia')
  let interestedJavaScript = confirm('Le interesa JavaScript?')
  let age = calculateAge(birthdayYear)

  datosPersona = {
    nombre: name,
    edad: age,
    ciudad: city,
    interesPorJs: interestedJavaScript,
  }
}

function calculateAge(year) {
  let calculus = 0
  if (!validateBirthdayYearNumber(year)) return calculus
  let currentYear = new Date()
  calculus = currentYear.getFullYear() - year
  return calculus
}

function validateBirthdayYearNumber(year) {
  let parseYear = parseInt(year)
  let isNaNYear = isNaN(parseYear)
  if (isNaNYear) return false

  let currentYear = new Date()
  let validator = parseYear >= 0 && currentYear.getFullYear() >= parseYear

  return validator
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  obtenerDatosDelUsuario()

  let name = document.querySelector('#nombre')
  let age = document.querySelector('#edad')
  let city = document.querySelector('#ciudad')
  let javascript = document.querySelector('#javascript')

  name.innerText = styleText(datosPersona['nombre'])
  age.innerText = datosPersona['edad']
  city.innerText = styleText(datosPersona['ciudad'])
  javascript.innerText = datosPersona['interesPorJs'] ? 'Si' : 'No'
}

function styleText(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  let container = document.querySelector('#fila')

  if (!container.hasChildNodes()) {
    listado.forEach((item, index) => {
      container.innerHTML += renderCard(item, index)
    })
  }
}

function renderCard(item, index) {
  return `
		<div class="caja" id=${index}>
		<img src=${item.imgUrl} alt=${item.lenguajes}/>
		<p class="lenguajes">Lenguajes: ${item.lenguajes}</p>
		<p class="bimestre">Bimestre: ${item.bimestre}</p>
		</div>
		`
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let body = document.querySelector('#sitio')
  body.classList.toggle('dark')
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener('keydown', (event) => {
  if (event.key === 'f') {
    let text = document.querySelector('#sobre-mi')
    text.classList.remove('oculto')
  }
})
