
const btn = document.querySelector('.service-info__btn');
const items = document.querySelectorAll('.service-lable_item');
const btnItems = document.querySelectorAll('.btn');

function filter() {
	btn.addEventListener('click', event => {
		const targetId = event.target.dataset.id
		const target = event.target

		btnItems.forEach(btnItems => btnItems.classList.remove('active-tab'))
		target.classList.add('active-tab')

		switch(targetId) {
			case 'tab-1' :
				items.forEach(item => {
					item.classList.remove('filter')
					if(item.classList.contains('tab-3')) {
						item.classList.add('filter')
					}
					if(item.classList.contains('tab-2')) {
						item.classList.add('filter')
					}
					
				})
				break
			case 'tab-2' :
				items.forEach(item => {
					item.classList.remove('filter')
					if(item.classList.contains('tab-1')) {
						item.classList.add('filter')
					}
					if(item.classList.contains('tab-3')) {
							item.classList.add('filter')
					}
				})
				break
			case 'tab-3' :
				items.forEach(item => {
					item.classList.remove('filter')
					if(item.classList.contains('tab-1')) {
						item.classList.add('filter')
					}
					if(item.classList.contains('tab-2')) {
							item.classList.add('filter')
					}
				})
				break
		}
	})
}

filter()



document.addEventListener('DOMContentLoaded', () => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(el => {
		el.addEventListener('click', (e) => {
			const self = e.currentTarget;
			const control = self.querySelector('.accordion__control');
			const content = self.querySelector('.accordion__content');

			self.classList.toggle('accordion__open');

			// если открыт 
			if (self.classList.contains('accordion__open')) {
				control.setAttribute('aria-expanded', true);
				content.setAttribute('aria-hidden', false);
                content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				control.setAttribute('aria-expanded', false);
				content.setAttribute('aria-hidden', true);
                content.style.maxHeight = null;
			}
		});
	});
});



document.querySelector('.dropdown__button').addEventListener('click', function() {
	document.querySelector('.dropdown__list').classList.toggle('dropdown__list--visible');
	this.classList.add('dropdown__button--active');
	document.querySelector('.form__card-can').classList.remove('form__card-active');
	document.querySelector('.form__card-new').classList.remove('form__card-active');
	document.querySelector('.form__card-yon').classList.remove('form__card-active');
	document.querySelector('.form__card-she').classList.remove('form__card-active');
	

});

document.querySelectorAll('.dropdown__list-item').forEach(function(listItem) {
	listItem.addEventListener('click', function() {
		document.querySelector('.dropdown__button').innerHTML = this.innerHTML;
		document.querySelector('.dropdown__button').focus();
		document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
		
		
	})
});

document.querySelector('.dropdown__list-item-can').addEventListener('click', function() {
	document.querySelector('.form__card-can').classList.add('form__card-active');
	document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
	document.querySelector('.dropdown__button').innerHTML = this.innerHTML;

});

document.querySelector('.dropdown__list-item-new').addEventListener('click', function() {
	document.querySelector('.form__card-new').classList.add('form__card-active');
	document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
	document.querySelector('.dropdown__button').innerHTML = this.innerHTML;

});
document.querySelector('.dropdown__list-item-yon').addEventListener('click', function() {
	document.querySelector('.form__card-yon').classList.add('form__card-active');
	document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
	document.querySelector('.dropdown__button').innerHTML = this.innerHTML;

});
document.querySelector('.dropdown__list-item-she').addEventListener('click', function() {
	document.querySelector('.form__card-she').classList.add('form__card-active');
	document.querySelector('.dropdown__list').classList.remove('dropdown__list--visible');
	document.querySelector('.dropdown__button').innerHTML = this.innerHTML;

});









