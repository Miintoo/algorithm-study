let input = Number(require('fs').readFileSync('/dev/stdin').toString());

for (let i = 0; i < input * 2 - 1; i++) {
  let result = '';
  let max = input * 2 - 1;
  if (input > i) {
    for (let j = i; j > 0; j--) {
      result += ' ';
    }
    for (let j = i * 2; j < max; j++) {
      result += '*';
    }
  } else {
    for (let j = i + 1; j < max; j++) {
      result += ' ';
    }
    for (let j = 1; j <= i + 1 - (max - (i + 1)); j++) {
      result += '*';
    }
  }

  console.log(result);
}
