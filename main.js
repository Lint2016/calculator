const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;

    if (value === 'C') {
      display.value = '';
    } else if (value === '⌫') {
      display.value = display.value.substr(0, display.value.length - 1);
    } else if (value === '=') {
      display.value = eval(display.value);
    } else {
      display.value += value;
    }
  });
});
