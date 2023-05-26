document.addEventListener('DOMContentLoaded', () => {												//Функция вызывается когда мы загружаем сайт
	const date = new Date('June 12 2023 00:00:00');													//Устанавливаем конечную дату
	
	const daysVal = document.querySelector('.time-count_days .time-count_val');						//Получаем элемент страницы, для передачи значения
	const hoursVal = document.querySelector('.time-count_hours .time-count_val');					//Получаем элемент страницы, для передачи значения
	const minutesVal = document.querySelector('.time-count_minutes .time-count_val');				//Получаем элемент страницы, для передачи значения
	const secondsVal = document.querySelector('.time-count_seconds .time-count_val');				//Получаем элемент страницы, для передачи значения

	const daysText = document.querySelector('.time-count_days .time-count_text');					//Получаем элемент страницы, для передачи текста
	const hoursText = document.querySelector('.time-count_hours .time-count_text');					//Получаем элемент страницы, для передачи текста
	const minutesText = document.querySelector('.time-count_minutes .time-count_text');				//Получаем элемент страницы, для передачи текста
	const secondsText = document.querySelector('.time-count_seconds .time-count_text');				//Получаем элемент страницы, для передачи текста

	function declOfNum(number, titles) {  															//Функция для склонения текста
		let cases = [2, 0, 1, 1, 1, 2];  															
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ]; 	 
	}

	const timeCount = () => {																		//Функция для счета
		let now = new Date();																		//Находим текущее значение
		let leftUntil = date - now;																	//Сколько времени осталось до date в мс
		if (leftUntil<0) {}																			//Проверка чтобы значения времени не уходили в отрицательные значения
		else {
		let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);										//Перевод в дни
		let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;									//Перевод в часов
		let minutes = Math.floor(leftUntil / 1000 / 60) % 60;										//Перевод в минут
		let seconds = Math.floor(leftUntil / 1000) % 60;											//Перевод в секунд

		daysVal.textContent = days;																	//Меняем значения на странице
		hoursVal.textContent =	hours;																//Меняем значения на странице
		minutesVal.textContent = minutes;															//Меняем значения на странице
		secondsVal.textContent = seconds;															//Меняем значения на странице

		daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);							//Меняем значения на странице
		hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);							//Меняем значения на странице
		minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);				//Меняем значения на странице
		secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);				//Меняем значения на странице
		}
	};

	timeCount();																					//Вызываем функцию
	setInterval(timeCount, 1000);																	//Вызываем функцию с интервалом в 1 секунду
});