$('document').ready(function(){
	
});


//Прокрутка при клике

//Для начала я ищу все объекты с классом .menu_link, но с data-атрибутом data-goto
const menuLinks = document.querySelectorAll('.menu_link[data-goto]');
//Проверяю есть ли у нас что нибудь из этого
if (menuLinks.length > 0) {
	//Пробежимся по ним
	menuLinks.forEach(menuLink => {
		//И вешаем событие клик при котором вызываем функцию onMenuLinkClick
		menuLink.addEventListener("click", onMenuLinkClick);
	});

		function onMenuLinkClick(e) {
			//Сдесь нам нужно получить объект на который мы кликаем
			const menuLink = e.target;
			//Далее важное условие
			//во первых проверяю заполнен ли этот дата атрибут, и проверяю существует ли объект на который ссылается данный дата-атрибут
			if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
				//Далее получаю в константу этот объект
				const gotoBlock = document.querySelector(menuLink.dataset.goto);
				//Далее нам нужно высчитать положение этого объекта с учётом высоты шапки
				//с помощью getBoundingClientRect().top я получаю его местоположение на странице в пикселях, далее я прибавляю колличество прокрученных пикселей
				//и далее я убавляю высоту шапки
				const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;


				//Закрытие меню при клике на li
				if (iconMenu.classList.contains('_active')) {
					document.body.classList.remove('_lock');
					iconMenu.classList.remove('_active');
					menuBody.classList.remove('_active');
				}

				//Далее код который заставит скролл прокрутиться к нужному месту
				window.scrollTo({
					top: gotoBlockValue,
					behavior: "smooth"
				});
				//добавим e.preventDefault(); для того чтобы отключить работу ссылок
				e.preventDefault();
			}
		}
	
}




//Меню бургер
const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');
if(iconMenu) {
	iconMenu.addEventListener("click", function(e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}




const model = document.querySelector('.model');
console.log(model);

model.addEventListener("dblclick", function(e) {
	model.classList.toggle('active_');
});