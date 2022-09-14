

const hechizoDiv = document.querySelector('.hechizo')
const nuevo = document.querySelector('button')


function generarRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

fetch("https://fedeperin-harry-potter-api.herokuapp.com/db")
	.then((res) => res.json())
	.then((data) => {
		mostrarHechizos(data.hechizos)
		nuevo.addEventListener('click', () => mostrarHechizos(data.hechizos))
	})
	.catch((e) => console.log(e));

function mostrarHechizos(hechizos) {
	let random = generarRandom(0, hechizos.length)
	hechizoDiv.querySelector('h2').textContent = hechizos[random].hechizo
	hechizoDiv.querySelector('p').textContent = hechizos[random].uso
}