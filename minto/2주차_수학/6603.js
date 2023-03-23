let input = require('fs').readFileSync('../input.txt').toString().split('\n');

for (let i = 0; i < input.length - 1; i++) {
  const testCaseArr = input[i]
    .split(' ')
    .map((num) => +num)
    .slice(1);

  const resultArr = getCombinations(testCaseArr, 6);
  for (let j = 0; j < resultArr.length; j++) {
    console.log(resultArr[j].join(' '));
  }

  if (i != input.length - 1) {
    console.log('');
  }
}

function getCombinations(arr, selectNumber) {
  const result = [];
  if (selectNumber === 1) {
    return arr.map((item) => [item]);
  }

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((item) => [fixed, ...item]);
    result.push(...attached);
  });

  return result;
}

/*
전형적인 조합 문제이므로 조합의 로직을 어떻게 생각했는지만 정리하면 될꺼같다.

재귀를 사용했고 하나씩 고정값을 사용했다. 
1, 2, 3, 4에서 3가지를 선택해야 한다고 예를들어보자

1를 고정하고 2, 3, 4를 기준으로 다시 똑같은 로직을 수행한다 
2를 고정하고 3, 4를 기준으로 다시 똑같은 로직을 수행한다.
이 때 3, 4는 넘겨주는 두번째 인자가 1이므로 [[3], [4]]로 반환한다.
이를 반환받은 2에서 기존 배열에서 2를 합쳐서 새로운 배열
[[2, 3], [2, 4]]를 만든걸 다시 반환한다.
그럼 1를 고정한 로직에서는 마찬가지로 기존 배열에 1을 붙혀서 새로운 배열
[[1, 2, 3], [1, 2, 4]]를 만든걸 결과 배열에 넣는다. 

앞에 과정을 두번째 인자부터 다시하면 된다.
2를 고정하고 ~~~~~ 

이렇게 하면 최종적으로 4개중 3개를 선택한 값들의 배열이 반환된다.
*/
