let input = Number(require('fs').readFileSync('/dev/stdin').toString());

for (let i = 1; i <= input * 2 - 1; i++) {
  let result = '';
  if (input >= i) {
    for (let j = i; j < input; j++) {
      result += ' ';
    }
    for (let j = i; j > 0; j--) {
      result += '*';
    }
  } else {
    for (let j = input; j < i; j++) {
      result += ' ';
    }
    for (let j = i; j < input * 2; j++) {
      result += '*';
    }
  }

  console.log(result);
}
