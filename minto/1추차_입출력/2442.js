let input = Number(require('fs').readFileSync('/dev/stdin').toString());

for (let i = 1; i <= input; i++) {
  let result = '';
  let max = input * 2 - 1;

  for (let j = i; j <= max / 2; j++) {
    result += ' ';
  }

  for (let j = 0; j < i * 2 - 1; j++) {
    result += '*';
  }

  console.log(result);
}
