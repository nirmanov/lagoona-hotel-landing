// burger
document.querySelector('#burger').addEventListener('click', function () {
  document.querySelector('.burger').classList.toggle('burger--active')
  document.querySelector('.header-nav').classList.toggle('header__nav_active')
  // document.querySelector('.header').classList.toggle('header-active')
  // document.querySelector('.header-bottom__nav').classList.toggle('header-bottom__nav_active')
});

//scroll-smooth and close burger
const anchors = document.querySelectorAll('.header-link')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    if (document.querySelector('.burger').classList.contains('burger--active')) {
      document.querySelector('.burger').classList.remove('burger--active')
      document.querySelector('.header__nav').classList.remove('header__nav_active')
    }
    const blockID = anchor.getAttribute('href').substr(1)
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}