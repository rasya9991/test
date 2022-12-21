function btnToggle() {
  const readmore = document.querySelectorAll('.swiper-slide-brand')
  const readMoreText = document.querySelector('.addition-link-brands')
  const classActive = 'swiper-slide-hidden'
  for(let i = 7; i< readmore.length;i++) {
    readmore[i].classList.toggle(classActive)
  }
  const readMoreIcon = document.querySelector('.brand__additon-icon')
  if(readMoreText.textContent == 'Показать еще') {
    readMoreText.textContent = 'Скрыть'
    readMoreIcon.classList.toggle('brand__additon-icon--rotated')
  } else (readMoreText.textContent = 'Показать еще',readMoreIcon.classList.toggle('brand__additon-icon--rotated'))

}
const readMoreBtn = document.querySelector('.brand_addition')

readMoreBtn.addEventListener('click',btnToggle )
// -------------
function btnToggle2() {
  const readmore = document.querySelectorAll('.swiper-tech-slide')
  const readMoreText = document.querySelector('.addition-link-tech')
  const classActive = 'swiper-slide-hidden'
  for(let i = 4; i< readmore.length;i++) {
    readmore[i].classList.toggle(classActive)
  }
  const readMoreIcon = document.querySelector('.tech-icon')
  if(readMoreText.textContent == 'Показать еще') {
    readMoreText.textContent = 'Скрыть'
    readMoreIcon.classList.toggle('brand__additon-icon--rotated')
  } else (readMoreText.textContent = 'Показать еще',readMoreIcon.classList.toggle('brand__additon-icon--rotated'))

}
const readMoreBtn2 = document.querySelector('.tech_addition')

readMoreBtn2.addEventListener('click',btnToggle2 )

function btnToggle3() {
  const readMoreText = document.querySelectorAll('.about-us__text')
  const classHide = 'about-us__text--hidden'
  const additonText = document.querySelector('.addition-text-link')

  for(let i = 1; i < readMoreText.length;i++){
    readMoreText[i].classList.toggle(classHide)
  }
  if(additonText.textContent == "Читать далее"){
    additonText.textContent = "Скрыть"
  } else (additonText.textContent = "Читать далее")
}
const readMoreLink = document.querySelector('.addition-text-link')
readMoreLink.addEventListener('click',btnToggle3)




 


