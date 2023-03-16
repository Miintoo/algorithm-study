let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let month = +input[0];
let day = +input[1];

let count = 0;

count += day;

for (let i = 1; i < month; i++) {
  switch (i) {
    case 1:
      count += 31;
      break;
    case 2:
      count += 28;
      break;

    case 3:
      count += 31;
      break;

    case 4:
      count += 30;
      break;

    case 5:
      count += 31;
      break;

    case 6:
      count += 30;
      break;

    case 7:
      count += 31;
      break;

    case 8:
      count += 31;
      break;

    case 9:
      count += 30;
      break;

    case 10:
      count += 31;
      break;

    case 11:
      count += 30;
      break;
  }
}

count = count % 7;
switch (count) {
  case 1:
    console.log('MON');
    break;
  case 2:
    console.log('TUE');
    break;
  case 3:
    console.log('WED');
    break;
  case 4:
    console.log('THU');
    break;
  case 5:
    console.log('FRI');
    break;
  case 6:
    console.log('SAT');
    break;
  case 0:
    console.log('SUN');
    break;
}
