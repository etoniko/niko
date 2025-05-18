// Текст стихотворения
const kiplingPoem = `<p> Этот мир спасёт <span>любовь</span>!  Этот мир спасёт <span>любовь</span>! Этот мир спасёт <span>любовь</span>! Этот мир спасёт <span>любовь</span>! Этот мир спасёт <span>любовь</span>! Этот мир спасёт <span>любовь</span>! Этот мир спасёт <span>любовь</span>!  Этот мир спасёт <span>любовь</span>! Этот мир спасёт <span>любовь</span>! Этот мир спасёт <span>любовь</span>! Этот мир спасёт <span>любовь</span>! Этот мир спасёт <span>любовь</span>!</p>`;

// Функция для вставки стихотворения в div элементы
function insertPoemIntoDivs() {
	// Получить все div элементы с классом .text
	const textDivs = document.querySelectorAll(".text");

	// Вставить стихотворение во все div элементы с классом .text
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Вызвать функцию, когда DOM полностью загружен
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);