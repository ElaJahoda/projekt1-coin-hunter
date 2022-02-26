// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

//startPozice
	let panacek = document.getElementById('panacek');
	let panacekX = panacek.style.left = '150px';	
	let panacekY = panacek.style.top = '150px';

function pohybPanacka(event) {
	let klavesa = event.keyCode;
	
	if (klavesa === 39) {
		panacekX = (parseFloat(panacekX) + 10) + 'px';
		panacek.style.left = panacekX;
		panacek.src = "obrazky/panacek-vpravo.png";
	}
	if (klavesa === 37) {
		panacekX = (parseFloat(panacekX) - 10) + 'px';
		panacek.style.left = panacekX;
		panacek.src = "obrazky/panacek-vlevo.png";
	}
	if (klavesa === 38) {
		panacekY = (parseFloat(panacekY) - 10) + 'px';
		panacek.style.top = panacekY;
		panacek.src = "obrazky/panacek-nahoru.png";
	}
	if (klavesa === 40) {
		panacekY = (parseFloat(panacekY) + 10) + 'px';
		panacek.style.top = panacekY;
		panacek.src = "obrazky/panacek.png";
	}
}
