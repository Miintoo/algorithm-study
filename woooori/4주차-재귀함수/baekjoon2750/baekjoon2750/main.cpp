// * baekjoon2750 "수 정렬하기"
// *
// * Input :
// * 5
// * 5
// * 2
// * 3
// * 4
// * 1
// *
// * Output :
// * 1
// * 2
// * 3
// * 4
// * 5

#include <iostream>
using namespace std;

int main(int argc, const char * argv[]) {
    int N;
    cin >> N;
    int arr[N];
    int count = 0;
    
    for (int i=0; i<N; i++){
        int x;
        cin >> x;
        arr[i] = x;
    }
    
    int temp;
    
    for (int i = 0;  i<N-1; i++){
        for(int j = i+1; j<N; j++){
            if (arr[j] < arr[i]){
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    for (int k=0; k<N; k++){
        
        cout << arr[k] << endl;
        
    }
    
}
