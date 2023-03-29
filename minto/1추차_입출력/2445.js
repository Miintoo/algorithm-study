let input = Number(require('fs').readFileSync('/dev/stdin').toString());

for (let i = 1; i <= input * 2 - 1; i++) {
  let result = '';
  let max = input * 2 - 1;
  let mid = max / 2 + 1;
  if (mid >= i) {
    for (let j = 0; j < i; j++) {
      result += '*';
    }
    for (let j = i * 2; j < max + 1; j++) {
      result += ' ';
    }
    for (let j = 0; j < i; j++) {
      result += '*';
    }
  } else {
    for (let j = i; j <= max; j++) {
      result += '*';
    }
    for (let j = max + 1 - i; j < i; j++) {
      result += ' ';
    }
    for (let j = i; j < max + 1; j++) {
      result += '*';
    }
  }

  console.log(result);
}
