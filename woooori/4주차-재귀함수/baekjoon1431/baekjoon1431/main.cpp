#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

bool compare(string a, string b){
    
    // 문자 길이가 다를 때
    if(a.size() != b.size()){
        return a.size() < b.size();
    }
    // 문자 길이가 같을 때
    else{
        int a_sum = 0;
        for(int i=0; i<a.size(); i++){
            
            if(a[i]-'0' <= 9 && a[i] - '0' >= 0){
                a_sum += a[i]-'0';
            }
        }
        
        int b_sum = 0;
        for(int i=0; i<b.size(); i++){
            
            if(b[i]-'0' <= 9 && b[i] - '0' >= 0){
                b_sum += b[i]-'0';
            }
        }
        
        // 숫자의 합이 다르면 합이 작은 순서대로
        if(a_sum != b_sum){
            count++;
            cout << count <<"차 " << a_sum <<" " << b_sum <<endl;
            return a_sum<b_sum;
        }
        // 합이 같을 시
        else{
            count++;
            cout << count << a_sum <<" " << b_sum <<endl;
            return a<b;
        }
    }
}

int main(int argc, const char * argv[]) {
    int N;
    cin >> N;
    vector<string>serial;
    
    
    for (int i=0; i<N; i++){
        string s;
        cin >> s;
        serial.push_back(s);
    }
    sort(serial.begin(),serial.end(), compare);
    
    for (int i = 0; i < serial.size(); ++i)

        cout << serial[i] << endl;

    return 0;

}
