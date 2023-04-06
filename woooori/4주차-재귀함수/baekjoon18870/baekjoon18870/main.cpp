// * Input :
// * 5
// * 2 4 -10 4 -9
// *
// * Output :
// *
// * 2 3 0 3 1
// *
// * Explain :
// *
// * vector 없이 원소 해결하려 하니 코드가 너무 길어져서 vector를 이용했다.
// * lower_bound는 lower_bound(시작값, 종료값, 찾는 값) 함수로 찾는 값이나 큰 값을 리턴해주는 함수이다.
// * 이번 문제는 생소한 함수들이 많아서 조금 애먹었었지만 시간이 오래걸린 만큼 다음에는 더 잘 풀 수 있을 거라 생각한다.

#include <iostream>
#include <algorithm>
#include <map>
#include <vector>

using namespace std;

int main(int argc, const char * argv[]) {
    
    int N; // 입력 갯수
    
    vector<long long> origin_arr, sorted_arr;
    
    int x; // 배열에 넣을 원소들
    
    cin >> N;
    
    for(int i=0; i<N; i++){
        cin >> x;
        origin_arr.push_back(x); // 원본 벡터
        sorted_arr.push_back(x); // 정렬 벡터
    }
    
    sort(sorted_arr.begin(),sorted_arr.end());
    
    sorted_arr.erase(unique(sorted_arr.begin(), sorted_arr.end()), sorted_arr.end());
    
    for(int i = 0; i < N; i++) {
        cout << lower_bound(sorted_arr.begin(), sorted_arr.end(), origin_arr[i]) - sorted_arr.begin() << " ";
    }

}
