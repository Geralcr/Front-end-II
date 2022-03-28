const imagenes = document.querySelectorAll('img')
const urlImagenes = []

imagenes.forEach((_, index) => {
  //for(i+0, i<length,i++)= i = i+1
  const url = prompt(`Ingresa la url para la imagen ${index + 1}`)
  urlImagenes.push(url)
})
/*

  imagenes =[{img},{img},{img}] -> 0  1  2

  index =0
  'Ingresa la url para la imagen 1'
  urlImagenes = ['www.loquesea1.com']

  index =1
  'Ingresa la url para la imagen 2'
  urlImagenes = ['www.loquesea1.com','www.loquesea2.com']

  index =2
  'Ingresa la url para la imagen 3'
  urlImagenes = ['www.loquesea1.com','www.loquesea2.com',,'www.loquesea3.com']

*/

console.log(urlImagenes)

urlImagenes.forEach((url, index) => {
  const nodoImagen = document.querySelector(`#imagen-${index + 1}`)
  console.log(index, nodoImagen)
  nodoImagen.src = url
})

/*
  urlImagenes = ['www.loquesea1.com','www.loquesea2.com',,'www.loquesea3.com'] -> 0 1 2

  index =0
  const nodoImagen1 = document.querySelector('#imagen-1')
  nodoImagen1.src = urlImagenes[0]


  index =1
  const nodoImagen = document.querySelector('#imagen-2')
  nodoImagen1.src = urlImagenes[1]

  index =2
  const nodoImagen = document.querySelector('#imagen-3')
  nodoImagen1.src = urlImagenes[2]
*/

// let nuevoP=document.createElement("p");
// nuevoP.innerText="Hola!";
// document.body.appendChild(nuevoP)

imagenes.forEach((url, index) => {
  const url = prompt(`Ingresa la url para la imagen ${index + 1}`)
  const nodoImagen = document.querySelector(`#imagen-${index + 1}`)
  nodoImagen.src = url
})

/*
  index =0
  url1 ='Ingresa la url para la imagen 1'
  nodoImagen1 = document.querySelector('#imagen-1')
  nodoImagen1.src = url1

  index =1
  url1 ='Ingresa la url para la imagen 2'
  nodoImagen2 = document.querySelector('#imagen-2')
  nodoImagen2.src = url2

  index =2
  url1 ='Ingresa la url para la imagen 3'
  nodoImagen3 = document.querySelector('#imagen-3')
  nodoImagen.src = url3
*/
