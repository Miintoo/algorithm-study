let input = Number(require('fs').readFileSync('/dev/stdin').toString());

for (let i = 1; i <= input; i++) {
  let result = '';
  for (let j = i; j < input; j++) {
    result += ' ';
  }
  for (let j = 1; j <= i; j++) {
    result += '* ';
  }

  console.log(result);
}
