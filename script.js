// DOM elements
const body = document.body;

// Switch between backgrounds
const changeBackground = function (number) {
  //
  let previousBackground;
  if (body.className) previousBackground = body.className;
  console.log(previousBackground);
  // Reset background
  body.classList = '';
  // Change to selected background when pressed or reset to default if same button is pressed
  switch (number) {
    case '1':
      return previousBackground === 'background-1'
        ? false
        : body.classList.add('background-1');
    case '2':
      return previousBackground === 'background-2'
        ? false
        : body.classList.add('background-2');
    case '3':
      return previousBackground === 'background-3'
        ? false
        : body.classList.add('background-3');
    default:
      break;
  }
};
