function mostrarMenu(){
  const menu = document.querySelector(".menuMobile")

  menu.classList.toggle("hidden")
}

const slider = document.querySelectorAll('.slider')

let currentSlide = 0

function hideSlide(){
  slider.forEach(item => item.classList.remove('on'))
}

function showSlide(){
  slider[currentSlide].classList.add('on')
}

function nextImg(){
  hideSlide()

  if(currentSlide === slider.length -1){
    currentSlide = 0
  }
  else{
    currentSlide++
  }

  showSlide()
}

function backImg(){
  hideSlide()

  if(currentSlide === 0){
    currentSlide = slider.length -1
  }
  else{
    currentSlide--
  }

  showSlide()
}