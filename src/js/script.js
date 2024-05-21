const select = document.querySelector('.menu__lang');
const choices = new Choices(select, {
  shouldSort: false,
  searchEnabled: false,
  itemSelectText: '',
});

const menu = document.querySelector('.menu');
const burger = document.querySelector('.menu__open');
const links = document.querySelector('.menu__links');
burger.addEventListener('click', () => {
  burger.classList.toggle('menu__open-opened');
  menu.classList.toggle('menu-opened');
  links.classList.toggle('menu__links-opened');
});

const pictures = ['.gambling__pictures-first', '.gambling__pictures-second', '.gambling__pictures-third'];
const columns = ['.gambling__col-first', '.gambling__col-second', '.gambling__col-third'];

for (let i = 0; i < pictures.length; i++) {
  const copy = document.querySelector(pictures[i]).cloneNode(true);
  document.querySelector(columns[i]).append(copy);
}

