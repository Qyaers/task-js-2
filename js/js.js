let btnChangeBG = document.querySelector('.change-btn');
btnChangeBG.addEventListener('click', changeBackGround);
window.onload = getTime;
window.onload = getDate;
window.onload = changeBackGround;

setInterval(getTime, 100);
setInterval(changeBackGround, 200000);
setInterval(getDate, 5)

// TODO сделать запросы погоды и цитат
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
function changeBackGround() {
	let backgroundImageArr = ['/assets/img/1.jpg', '/assets/img/2.jpg', '/assets/img/3.jpg', '/assets/img/4.jpg', '/assets/img/5.jpg', '/assets/img/6.jpg'];
	let randomNum = getRandomIntInclusive(0, backgroundImageArr.length);
	document.body.style.backgroundImage = `url(${backgroundImageArr[randomNum]})`;
	document.body.style.backgroundSize = 'cover';
	document.body.style.backgroundRepeat = 'no-repeat';
}
function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}