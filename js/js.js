let kekw = document.querySelector('.change-btn');
console.log(kekw);
kekw.addEventListener('click', changeBackGround);
window.onload = getTime;
window.onload = getDate;

setInterval(getTime, 100)

// ------------------------------- functions ------------------------------
function getTime() {
	let now = new Date();
	let timeNow = now.getHours() + ":" + (now.getMinutes() > 10 ? now.getMinutes() : "0" + now.getMinutes()) + ":" + (now.getSeconds() > 10 ? now.getSeconds() : "0" + now.getSeconds());
	let time = document.querySelector('.time');

	time.textContent = timeNow;
}
function getDate() {
	let now = new Date(),
		day = (now.getDate() > 10 ? now.getDate() : "0" + now.getDate()),
		month = (now.getMonth() > 8 ? (now.getMonth() + 1) : "0" + (now.getMonth() + 1)),
		year = now.getFullYear(),
		dateNow = day + "." + month + "." + year;
	let date = document.querySelector('.date');
	date.textContent = dateNow;
}
// Доделать
function changeBackGround() {
	// let Arr = ['/assets/img/151482532225385.png', '', ''];
	document.body.style.backgroundImage = "url('/assets/img/151482532225385.png')";
	document.body.style.backgroundSize = 'cover';
	document.body.style.backgroundRepeat = 'no-repeat';
}
