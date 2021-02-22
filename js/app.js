const areaOne = document.querySelector('.area-one');
const areaTwo = document.querySelector('.area-two');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const answer = document.querySelector('.answer');
const buttons = document.querySelector('.buttons');
const equally = document.querySelector('.equally');

const  plusFun = () => {
  let numOne = parseInt(areaOne.value);
  let numTwo = parseInt(areaTwo.value);

  let sum = numOne + numTwo;

  equally.addEventListener('click', () => {
    answer.innerText = sum

    areaOne.value = '';
    areaTwo.value = '';
  })

}

const  minusFun = () => {
  let numOne = parseInt(areaOne.value);
  let numTwo = parseInt(areaTwo.value);

  let sum = numOne - numTwo;

  equally.addEventListener('click', () => {
    answer.innerText = sum

    areaOne.value = '';
    areaTwo.value = '';
  })
}

const  divideFun = () => {
  let numOne = parseInt(areaOne.value);
  let numTwo = parseInt(areaTwo.value);

  let sum = numOne / numTwo;

  equally.addEventListener('click', () => {
    answer.innerText = sum

    areaOne.value = '';
    areaTwo.value = '';
  })
}

const  multiplyFun = () => {
  let numOne = parseInt(areaOne.value);
  let numTwo = parseInt(areaTwo.value);

  let sum = numOne * numTwo;

  equally.addEventListener('click', () => {
    answer.innerText = sum

    areaOne.value = '';
    areaTwo.value = '';
  })
}

buttons.addEventListener('click', e => {
  if (e.target.classList.contains('plus')) {
    plusFun();
  } else if (e.target.classList.contains('minus')) {
    minusFun();
  } else if (e.target.classList.contains('divide')) {
    divideFun();
  } else if (e.target.classList.contains('multiply')) {
    multiplyFun();
  }
});

// plus.addEventListener('click', plusFun);
// minus.addEventListener('click', minusFun);
// divide.addEventListener('click', divideFun);
// multiply.addEventListener('click', multiplyFun);
