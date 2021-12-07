const container = document.querySelector('.ref')
const header = document.querySelector('.header')
const navbar = document.querySelector('.header__navbar')
const menu = document.querySelector('.header__menu')


container.addEventListener('scroll',(e) => {
  if(container.scrollTop > 100) {
    header.style.transition = '2s'
    header.style.backgroundColor = '#F77F00'
  } else {
    header.style.backgroundColor = 'transparent'
  }
})


menu.addEventListener('click', () => {
  
  if(menu.classList.contains('active')) {
    menu.classList.remove('active')
    
    navbar.classList.toggle('slideIn')
    navbar.classList.add('slideOut')

    menu.innerHTML = `
    <style>
    .header__menu {
      margin-top: 2px;
      border-top: 2px solid white;
    }
    .header__menu::before {
      transition: 0.5s;
      top: -7px;
      transform: rotate(90deg);
    }
    .header__menu::after {
      transition: 0.5s;
      top: 4px;
      transform: rotate(90deg);
    }
    </style>
    ` 

  } else {
    menu.classList.add('active')
    navbar.classList.remove('slideOut')
    navbar.classList.add('slideIn')

    menu.innerHTML = `
    <style>
    .header__menu {
      border: 0px;
    }
    .header__menu::before {
      transition: 0.5s;
      top: 0;
      transform: rotate(-45deg);
    }
    .header__menu::after {
      transition: 0.5s;
      top: 0;
      transform: rotate(45deg);
    }
    </style>
    ` 
  }

})

