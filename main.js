
let welcome = document.querySelector('.welcome')

let inputMain = document.querySelector('.input')
let message = document.querySelector('.message')
let messageMain = document.querySelector('.message-main')

welcome.classList.add('hidden')
inputMain.classList.add('hidden')
messageMain.classList.add('hidden')

// container
let btnClick = document.querySelector(".btn-click");
let btnNext = document.querySelector(".btn-next ");
let innerSlice = document.querySelector(".inner-slice");

let innerSpanPercent = document.querySelector(".inner-slice span");
let lineSvg2 = document.querySelector(".line:nth-child(2) svg");
let lineSvgLast = document.querySelector(".line:last-child svg");
let loadingLove = document.querySelector(".loading-love");

let container = document.querySelector('.container')

let percentSlice = 0;

btnClick.addEventListener("click", () => {
  percentSlice += 5;
  if (percentSlice >= 10) {
    loadingLove.innerText = "TÌNH YÊU ĐANG LẤP ĐẦY -> TIẾP TỤC NÀO <-  . . .";
  }
  if (percentSlice === 105) {
    percentSlice = 100;
    btnNext.style.display = "block";
    btnClick.style.display = "none";
  }
  if (percentSlice >= 50) {
    lineSvg2.style.width = 30 + "px";
    lineSvg2.style.height = 30 + "px";
    loadingLove.innerText = "TÌNH YÊU SẮP ĐƯỢC ĐONG ĐẦY . . .";
  }
  if (percentSlice >= 95) {
    loadingLove.innerText = "TÌNH YÊU ĐONG ĐẦY -> LOVE LINH <- . . .";
  }
  if (percentSlice === 100) {
    lineSvgLast.style.width = 40 + "px";
    lineSvgLast.style.height = 40 + "px";
  }
  
  innerSlice.style.width = percentSlice + "%";
  innerSpanPercent.innerText = percentSlice + "%";


});

btnNext.addEventListener("click", () => {
  container.classList.add('hidden')
  inputMain.classList.remove('hidden')
});


// input
let inputNu = document.querySelector('.input-nu')
let inputNam = document.querySelector('.input-nam')
let inputBtn = document.querySelector('.input-btn')

let value = {
  nam: '',
  nu:''
}
let inputNamNu = document.querySelectorAll('.input input')
let labelAll = document.querySelectorAll('.input label')
inputNamNu.forEach((input,index) => {
  input.addEventListener('input', (e) => {
    if (e.target.value.length > 0) {
      value.nam = inputNamNu[1].value
      value.nu = inputNamNu[0].value
      labelAll[index].classList.add('hidden')
    }
    else {
      labelAll[index].classList.remove('hidden')
    }
  })
})


inputBtn.addEventListener('click', () => {
  if (value.nam !== '' && value.nu !== '') {
    inputMain.classList.add('hidden')
    welcome.classList.remove('hidden')
    let nameShowNu = document.querySelector('.name-show-nu')
    nameShowNu.innerHTML = value.nu ? value.nu.toUpperCase() : 'LINH'
    let nameShowNam = document.querySelector('.name-show-nam')
    nameShowNam.innerHTML = value.nam ? value.nam.toUpperCase() : 'NGƯỜI ẤY'
  }
})



let welcomeBtn = document.querySelector('.welcome-btn')
welcomeBtn.addEventListener('click', () => {
  welcome.classList.add('hidden')
  message.classList.remove('hidden')
})

// message
let messageNo = document.querySelector('.message-no')
messageNo.addEventListener('click', () => {
  messageNo.style.position = 'absolute'
  messageNo.style.top = Math.random() * 90 + '%'
  messageNo.style.left = Math.random() * 90 + '%'
})

let messageYes = document.querySelector('.message-yes')
messageYes.addEventListener('click', () => {
  alert('cảm ơn bạn đã nhấn YES nha ! Mình rất là vui !!')
  setTimeout(() => {
    message.classList.add('hidden')
    messageMain.classList.remove('hidden')

  },2000)
})