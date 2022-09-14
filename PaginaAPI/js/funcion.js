
const grid = document.querySelector('.grid')

fetch("https://fedeperin-harry-potter-api.herokuapp.com/db")
	.then((res) => res.json())
	.then((data) => {
		mostrarHechizos(data.hechizos)
	})
	.catch((e) => console.log(e));

function mostrarHechizos(hechizos) {
	hechizos.forEach(hechizo  => {
		const contenedorHechizo = document.createElement('div')
		const nombreHechizo = document.createElement('h2')
		const descripcionHechizo = document.createElement('p')
		
		contenedorHechizo.classList.add('hechizo')
		
		nombreHechizo.textContent = hechizo.hechizo
		descripcionHechizo.textContent = hechizo.uso
		
		
		contenedorHechizo.appendChild(nombreHechizo)
		contenedorHechizo.appendChild(descripcionHechizo)
		grid.appendChild(contenedorHechizo)
	})
}