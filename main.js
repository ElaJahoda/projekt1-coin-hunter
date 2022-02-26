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
if (klavesa === 39 && (parseFloat(panacekX) + 10) <= window.innerWidth) {
panacekX = (parseFloat(panacekX) + 10) + 'px';
panacek.style.left = panacekX;
panacek.src = "obrazky/panacek-vpravo.png";
}
if (klavesa === 37 && (parseFloat(panacekX) - 10) >= 0) {
	panacekX = (parseFloat(panacekX) - 10) + 'px';
	panacek.style.left = panacekX;
	panacek.src = "obrazky/panacek-vlevo.png";
}
if (klavesa === 38 && (parseFloat(panacekY) - 10) >= 0) {
	panacekY = (parseFloat(panacekY) - 10) + 'px';
	panacek.style.top = panacekY;
	panacek.src = "obrazky/panacek-nahoru.png";
}
if (klavesa === 40 && (parseFloat(panacekY) + 10) <= window.innerWidth) {
	panacekY = (parseFloat(panacekY) + 10) + 'px';
	panacek.style.top = panacekY;
	panacek.src = "obrazky/panacek.png";
}
}

// function pohybMoznyPlus() {
// 	if ((parseFloat(panacekY) + 10) <= window.innerHeight && 
// 	(parseFloat(panacekX) + 10) <= window.innerWidth) {
// 		return true
// 	} else {
// 		return false
// 	}
// }

// function pohybMoznyMinus() {
// 	if ((parseFloat(panacekY) - 10) >= 0 && 
// 	(parseFloat(panacekX) - 10) >= 0) {
// 		return true
// 	} else {
// 		return false
// 	}
// }