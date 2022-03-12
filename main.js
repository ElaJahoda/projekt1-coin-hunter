//startPozice
let panacek = document.getElementById('panacek');
let panacekSirka = panacek.width;
let panacekVyska = panacek.height;

let panacekX = window.innerWidth / 2 + (panacekSirka / 2);	
let panacekY = window.innerHeight / 2 - (panacekVyska / 2);

let mince = document.getElementById('mince');
let minceSirka = mince.width;
let minceVyska = mince.height;

let minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
let minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));

let score = document.getElementById('score');

function startZvuk(ElementSelector) {
	document.querySelector(ElementSelector).play();
}

function stopZvuk(ElementSelector) {
	document.querySelector(ElementSelector).pause();
}

function priNacteni() {
	panacek.style.left = panacekX + 'px';
	panacek.style.top = panacekY + 'px';
	mince.style.left = minceX + 'px';
	mince.style.top = minceY + 'px';
	score.textContent = 0;
	casovac();
}

function prekryti() {
	if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || 
	minceY + minceVyska < panacekY)) {
		//zvuk mince
		startZvuk('#zvukmince');
		//mince na novou polohu
		minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
		minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));
		mince.style.left = minceX + 'px';
		mince.style.top = minceY + 'px';
		//pricist bod
		score.textContent = parseFloat(score.textContent) + 1;
		vitez();
    }
}

function pohybPanacka(event) {
	let klavesa = event.keyCode;
	// startZvuk('#hudba');
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
	if (score.textContent == 5) {
		stopZvuk('#hudba');
		startZvuk('#zvukfanfara');
		stopCas();
		alert('Jsi vítěz! Dosažený čas: ' + min + ':' + sek + ' Chceš hrát znovu?');
		novaHra();
	}
}

function novaHra() {
	panacekX = window.innerWidth / 2 + (panacekSirka / 2);	
	panacekY = window.innerHeight / 2 - (panacekVyska / 2);
	minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
	minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));
	priNacteni();
	min = 00;
	sek = 00;
	minuty.innerHTML = min;
	sekundy.innerHTML = sek;
}


let sekundy = document.getElementById('sekundy');
let sek = 00;
let minuty = document.getElementById('minuty');
let min = 00;
let cas;

function casovac() {
	cas = setInterval(startCas, 1000);
	
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
		minuty.innerHTML = '0' + min;
		sek = 0;
		sekundy.innerHTML = '0' + sek;
	}
	if (min <= 9) {
		minuty.innerHTML = '0' + min;
	}
	if (min > 9) {
		minuty.innerHTML = min;
	}
}

}


function stopCas() {
	clearInterval(cas);
}

let ticho = document.getElementById('ticho');
console.log(ticho.src, hudba, 1);
// let hudba = document.getElementById('hudba');
ticho.src = "obrazky/muted_icon.png";
console.log(ticho.src, 2);

function zmenaZvuk() {
	if(ticho.src == "file:///C:/Users/Evi%C4%8Dka/Documents/Moje/Studium/IT/JS/Czechitas-kurz_JS/lekce3/projekt1-coin-hunter/obrazky/muted_icon.png") {
		console.log('jedu', ticho.src, 3);
		ticho.src = "obrazky/volume_icon.png";
		// hudba.play();
		console.log('jedu', ticho.src, 4);
	} else {
		ticho.src = "obrazky/muted_icon.png";
		// hudba.pause();
		console.log('nejedu', ticho.src, 5);
	}
}

function tichoFunkce(x) {
	ticho.src =  x ;
	console.log(ticho.src, 6);
}