//startPozice
let panacek = document.getElementById('panacek');
let panacekSirka = panacek.width;
let panacekVyska = panacek.height;

let panacekX = window.innerWidth / 2 - (panacekSirka / 2);	
let panacekY = window.innerHeight / 2 - (panacekVyska / 2);

let mince = document.getElementById('mince');
let minceSirka = mince.width;
let minceVyska = mince.height;

let minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
let minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));

let score = document.getElementById('score');

let hudbaHraje = 0;

let hudba = document.getElementById('hudba');
let ticho = document.getElementById('ticho');

let casBezi = 0;

let sekundy = document.getElementById('sekundy');
let sek = 0;
let minuty = document.getElementById('minuty');
let min = 0;
let cas;
let casovacId = document.getElementById('casovacId')

let nazev = document.getElementById('nazev');
let popis = document.getElementById('popis');
let vyhra = document.getElementById('vyhra');
let tlacitka = document.getElementById('tlacitka')

function startZvuk(ElementSelector) {
	document.querySelector(ElementSelector).play();
}

function stopZvuk(ElementSelector) {
	document.querySelector(ElementSelector).pause();
}

function priNacteni() {
	panacekX = window.innerWidth / 2 - (panacekSirka / 2);	
	panacekY = window.innerHeight / 2 - (panacekVyska / 2);
	panacek.style.left = panacekX + 'px';
	panacek.style.top = panacekY + 'px';
	minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
	minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';
	poziceNazvu();
	pozicePopisu();
	vyhra.style.display = 'none';
	tlacitka.style.display = 'none';
	casovacId.style.display = 'block';
	score.textContent = 0;
}

function poziceNazvu() {
	let nazevX = window.innerWidth / 2 - 317;
	let nazevY =  window.innerHeight / 2 - 30;
	nazev.style.left = nazevX + 'px';
	nazev.style.top = nazevY + 'px';
	nazev.style.display = 'block';
}

function pozicePopisu() {
	let popisX = window.innerWidth / 2 - 350;
	let popisY = window.innerHeight /2 + 80;
	popis.style.left = popisX + 'px';
	popis.style.top = popisY + 'px';
	popis.style.display = 'block';
}

function hlaskaVyhry() {
	vyhra.textContent = 'Jsi vítěz! Dosažený čas: ' + min + ':' + sek + ' Chceš hrát znovu?';
	let vyhraX = 0;
	let vyhraY = window.innerHeight / 2 - 40;
	vyhra.style.left = vyhraX + 'px';
	vyhra.style.top = vyhraY + 'px';
	vyhra.style.display = 'block';
	tlacitka.style.display = 'block';
}

function ano() {
	novaHra();
}
let computedSize = 30;

function ne() {
	vyhra.style.fontSize = computedSize + 1 + 'px';
	computedSize = computedSize + 1;
	vyhra.textContent = 'A nechceš si to ještě rozmyslet?';
}

function prekryti() {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || 
	minceY + minceVyska < panacekY)) {
		startZvuk('#zvukmince');
		minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
		minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));
		mince.style.left = minceX + 'px';
		mince.style.top = minceY + 'px';
		score.textContent = parseFloat(score.textContent) + 1;
		vitez();
    }
}

function pohybPanacka(event) {
	let klavesa = event.keyCode;
	if(casBezi == 0) {
		casovac();
		casBezi = 1;
		nazev.style.display = 'none';
		popis.style.display = 'none';
	}
	if (klavesa === 39 && (panacekX + 10) <= (window.innerWidth - panacekSirka)) {
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
	if (klavesa === 40 && (panacekY + 10) <= (window.innerHeight - panacekVyska)) {
		panacekY = panacekY + 10;
		panacek.style.top = panacekY  + 'px';
		panacek.src = "obrazky/panacek.png";
		prekryti();
	}
}

function vitez() {
	if (score.textContent == 1) {
		stopCas();
		casovacId.style.display = 'none';		
		stopZvuk('#hudba');
		startZvuk('#zvukfanfara');
		hlaskaVyhry();
		// mince.style.display = 'none';
		}
}

function novaHra() {
	panacek.src = 'obrazky/panacek.png';
	panacekX = window.innerWidth / 2 - (panacekSirka / 2);	
	panacekY = window.innerHeight / 2 - (panacekVyska / 2);
	minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
	minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));
	priNacteni();
	casBezi = 0;
	min = '00';
	sek = '00';
	minuty.innerHTML = min;
	sekundy.innerHTML = sek;
}

function casovac() {
	cas = setInterval(startCas, 1000);
min = '0';
	function startCas() {
	sek++;
	if (sek <= 9) {
		sekundy.innerHTML = '0' + sek;
	}
	if (sek > 9) {
		sekundy.innerHTML = sek;
	}
	if (sek > 59) {
		min++;
		minuty.innerHTML =  '0' + min;
		sek = 0;
		sekundy.innerHTML = '0' + sek;
	}
	if (min <= 9) {
		minuty.innerHTML =  '0' + min;
	}
	if (min > 9) {
		minuty.innerHTML = min;
	}
	}
}

function stopCas() {
	clearInterval(cas);
}

function zmenaZvuk() {
	if(hudbaHraje == 0) {
		ticho.src = "obrazky/volume_icon.png";
		startZvuk('#hudba');
		hudbaHraje = 1;
	} else {
		ticho.src = "obrazky/muted_icon.png";
		stopZvuk('#hudba');
		hudbaHraje = 0;
	}
}