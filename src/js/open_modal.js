function openModal() {
  const aside = document.querySelector('.aside')
  const solid = document.querySelector('.solid')
  const classAsideActive = 'aside--active'
  const solidActive = 'solid--hidden'
  aside.classList.toggle(classAsideActive)
  solid.classList.toggle(solidActive)
}
const menuBtn = document.querySelector('.button__menu')
const closeMenuBtn = document.querySelector('.button__close-menu')
const divSolid = document.querySelector('.solid')

menuBtn.addEventListener('click',openModal)
closeMenuBtn.addEventListener('click',openModal)
divSolid.addEventListener('click',closeAllModal)

function closeAllModal(){
  if(document.documentElement.clientWidth < 1440){
    openModal()
  }
  const modalFeedback = document.querySelector('.modal-feedback')
  const modalCall = document.querySelector('.modal-call')
  if(modalFeedback.classList.contains('modal-feedback--hidden')){

  }else openModalFeedback()

  if(modalCall.classList.contains('modal-call--hidden')){

  }else openModalCall()
}

// 

function openModalFeedback() {
  const modalCallcheck = document.querySelector('.modal-call')
  
  if(modalCallcheck.classList.contains('modal-call--hidden')){
    
  } else openModalCall()
  // 
  const modalFeedback = document.querySelector('.modal-feedback')
  const classHide = ('modal-feedback--hidden')
  const solid = document.querySelector('.solid')
  const solidActive = 'solid--hidden'


  modalFeedback.classList.toggle(classHide)

  if(solid.classList.contains('.solid--hidden')){
    solid.classList.toggle(solidActive)
  } else if(document.documentElement.clientWidth >= 1440){
    solid.classList.toggle(solidActive)
  }

}

const modalFeedbackBtn = document.querySelector('.button__message')
const closeFeedbackBtn = document.querySelector('.button__close-feedback')

modalFeedbackBtn.addEventListener('click',openModalFeedback)
closeFeedbackBtn.addEventListener('click',closeAllModal)


function openModalCall(){
  const modalFeedbackcheck = document.querySelector('.modal-feedback')
  
  if(modalFeedbackcheck.classList.contains('modal-feedback--hidden')){
    
  } else openModalFeedback()
  // 
  const modalCall = document.querySelector('.modal-call')
  const classHideCall = ('modal-call--hidden')
  
  modalCall.classList.toggle(classHideCall)


  const solid = document.querySelector('.solid')
  const solidActive = ('solid--hidden')

  if(solid.classList.contains('.solid--hidden')){
    solid.classList.toggle(solidActive)
  } else if(document.documentElement.clientWidth >= 1440){
    solid.classList.toggle(solidActive)
  }
}

const modalCallBtn = document.querySelector('.button__call')
const closeBtnCall = document.querySelector('.button__close-call')
modalCallBtn.addEventListener('click',openModalCall)
closeBtnCall.addEventListener('click',closeAllModal)

