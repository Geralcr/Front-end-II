const userOptions = parseInt(prompt('Piedra 1 Papel 2 o Tijera 3'))
const random = Math.floor(Math.random() * 3) + 1

const items = {
  1: 'Piedra',
  2: 'Papel',
  3: 'Tijera',
}
alert(items[random])
let value = ''
console.log('Usuario', userOptions)
console.log('Maquina', random)

const validateValue = [1, 2, 3].includes(userOptions)

if (validateValue) {
  value = compareTo(userOptions, random)
  alert(value)
} else {
  alert('Opcion Invalida')
}
function compareTo(user, machine) {
  if (machine === user) return 'Empate'

  return validateUser(user, machine)
}
function validateUser(user, machine) {
  const validates =
    (user == 1 && machine == 3) || (user == 2 && machine == 1) || (user == 3 && machine == 2)
  return validates ? 'Gano' : 'Perdio'
}
