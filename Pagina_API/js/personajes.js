
const grid = document.querySelector('.grid')

fetch("https://fedeperin-harry-potter-api.herokuapp.com/personajes")
	.then((res) => res.json())
	.then((data) => {
		mostrarPersonajes(data.personajes)
	})
	.catch((e) => console.log(e));

function mostrarPersonajes(personajes) {
	personajes.forEach(personaje  => {
		const contenedorPersonaje = document.createElement('div')
		const nombrePersonaje = document.createElement('h2')
		const casaDeHogwarts = document.createElement('p')
		
		contenedorPersonaje.classList.add('personaje')
		
		nombrePersonaje.textContent = personaje.personaje
		casaDeHogwarts.textContent = personaje.casaDeHogwarts
		
		
		contenedorPersonaje.appendChild(nombrePersonaje)
		contenedorPersonaje.appendChild(casaDeHogwarts)
		grid.appendChild(contenedorPersonaje)
	})
}