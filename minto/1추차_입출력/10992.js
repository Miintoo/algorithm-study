let input = Number(require('fs').readFileSync('/dev/stdin').toString());

for (let i = 1; i <= input; i++) {
  let result = '';
  for (let j = i; j < input; j++) {
    result += ' ';
  }
  if (input === i) {
    for (let j = 1; j <= 2 * i - 1; j++) {
      result += '*';
    }
  } else {
    result += '*';
    if (i !== 1) {
      if (i === 2) {
        result += ' ';
      } else if (i === 3) {
        result += '   ';
      } else {
        for (let j = 1; j <= (i - 1) * 2 - 1; j++) {
          result += ' ';
        }
      }
      result += '*';
    }
  }

  console.log(result);
}
