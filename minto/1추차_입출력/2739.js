let input = Number(require('fs').readFileSync('/dev/stdin').toString());

for (let i = 1; i < 10; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
