var imegn = document.getElementById("imagen");
var box = document.getElementById("box");

imagen.addEventListener('mouseover', function() {
	imagen.classList.toggle('img-no-show');
	box.classList.toggle('box-show');
});