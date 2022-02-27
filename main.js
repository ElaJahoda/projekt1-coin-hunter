//startPozice

let panacek = document.getElementById('panacek');
let panacekX = 150;	
let panacekY = 150;
let panacekSirka = 64;
let panacekVyska = 70;

let mince = document.getElementById('mince');
let minceX = Math.floor(Math.random() * window.innerWidth)
let minceY = Math.floor(Math.random() * window.innerHeight)
let minceSirka = 36;
let minceVyska = 36;

function priNacteni() {
	panacek.style.left = panacekX + 'px';
	panacek.style.top = panacekY + 'px';
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';
}

function prekryti() {
	console.log(panacekX, panacekY, minceX, minceY, panacekSirka, panacekVyska, minceSirka, minceVyska);
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || 
	minceY + minceVyska < panacekY)) {
	console.log('prekryti');
} else {
	console.log('nic')
}
}

function pohybPanacka(event) {
let klavesa = event.keyCode;
if (klavesa === 39 && (panacekX + 10) <= window.innerWidth) {
	panacekX = panacekX + 10;
	panacek.style.left = panacekX + 'px';
	panacek.src = "obrazky/panacek-vpravo.png";
	prekryti();
}
if (klavesa === 37 && (panacekX - 10) >= 0) {
	panacekX = panacekX - 10;
	panacek.style.left = panacekX  + 'px';
	panacek.src = "obrazky/panacek-vlevo.png";
	prekryti();
}
if (klavesa === 38 && (panacekY - 10) >= 0) {
	panacekY = panacekY - 10;
	panacek.style.top = panacekY  + 'px';
	panacek.src = "obrazky/panacek-nahoru.png";
	prekryti();
}
if (klavesa === 40 && (panacekY + 10) <= window.innerHeight) {
	panacekY = panacekY + 10;
	panacek.style.top = panacekY  + 'px';
	panacek.src = "obrazky/panacek.png";
	prekryti();
}
}