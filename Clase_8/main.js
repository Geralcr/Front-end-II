let noticias = [
  {
    titulo: 'Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami',
    imgUrl:
      'https://www.infobae.com/new-resizer/H9B9uvmwpunxOo6DwuGGMoaVGiE=/265x149/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YXOQB3X5SZ2HPD2SWP2HOCBDZA.jpg',
    fecha: '07/06/21',
    tipoNacional: true,
    items: { a: true, b: false },
  },
  {
    titulo: 'El gran gesto por amor de Jennifer Lopez hacia Ben Affleck',
    imgUrl:
      'https://www.infobae.com/new-resizer/9qc1rervLRhJWJ5iTr0ODd_ctMM=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg',
    descripcion:
      'La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor',
    fecha: '02/06/21',
    tipoNacional: false,
  },
  {
    titulo: 'Cómo evitar que se empañen los anteojos al usar barbijo',
    imgUrl:
      'https://www.infobae.com/new-resizer/ORz7JmzOGrdIjerazIGIpwiqOHk=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg',
    descripcion:
      'Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación. Paso a paso para evitar que se empañen',
    fecha: '01/06/21',
    tipoNacional: true,
  },
  {
    titulo:
      'La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde',
    imgUrl:
      'https://www.infobae.com/new-resizer/n515a-2ZZvJJgZ3EI6sfxWYm5Lg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UEEVG5ND43BTLP5RTK3V62NISM.jpg',
    descripcion:
      'El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero a mitad de siglo',
    fecha: '04/06/21',
    tipoNacional: false,
  },
  {
    titulo: 'Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia',
    imgUrl:
      'https://www.infobae.com/new-resizer/mmsbZbq2RWQDDHGiP4MxaBbK6RQ=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TM2UEM7JNZE4JH2SXGPPGPTTOQ.jpg',
    descripcion:
      'La exposición, que cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de la agencia de noticias Télam, es uno de los hitos del festival Mes de la Fotografía de Belgrado',
    fecha: '07/06/21',
    tipoNacional: true,
  },
]

let main = document.querySelector('main')

function renderCard(item, index) {
  let type = item.tipoNacional ? 'nacional' : ''
  return `
		<div class="card-new ${type}" id=${index}>
		<p class="title-new">${item.titulo}</p>
		<img src=${item.imgUrl} alt=""/>
		${item.descripcion ? `<p class="description">${item.descripcion}</p>` : ''}
		<p class="date">${item.fecha}</p>
		</div>
		`
}

// main.innerHTML += noticias.map((noticia, index) => renderCard(noticia, index))
// noticias.forEach((noticia, index) => (main.innerHTML += renderCard(noticia, index)))
//destructuracion
//[...noticias] BLINDA el primer nivel
//JSON.parse(JSON.stringify(noticias)) blinda niveles de un objeto
let noticias2 = JSON.parse(JSON.stringify(noticias))
console.log('noticias', noticias)
console.log('noticias2', noticias2)
noticias2[0].items.a = 'Holaaaaaaaaaaaaa'
console.log('noticias d', noticias)
console.log('noticias2 d', noticias2)
