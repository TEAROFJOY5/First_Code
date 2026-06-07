#include<iostream>
using namespace std;
class Solution{
    private:
        int* arr;
        int size;

    public:
        Solution(int x, int target)
{
    size = x;
    arr = new int[size];

    int i, j, sum = 0;

    for (i = 0; i < size; i++)
    {
        bool duplicate;

        do
        {
            duplicate = false;

            cout << "Enter " << i + 1 << " element: ";
            cin >> arr[i];

            for (j = 0; j < i; j++)
            {
                if (arr[i] == arr[j])
                {
                    duplicate = true;
                    cout << "Duplicate value not allowed! Enter a different number.\n";
                    break;
                }
            }

        } while (duplicate);

        cout << endl;
    }
             bool found = false;
            //one loop to traverse the array
            for( i = 0; i <= size; i++)
            {   
               
                // to calculate if the sum equavates target
                for( j = i + 1 ; j < size; j++)
                {   
                    sum = arr[i] + arr[j];
                    if(sum == target)
                       { 
                            found = true;
                             break;
                       }

                }
                if(found)
                    break;
            }
            if(found)
            {
                cout<<"["<<i<<","<<j<<"]";
                cout<<endl<<"Because nums["<<i<<"]"<<" + "<<"nums["<<j<<"] == "<<target<<", we reture ["<<i<<","<<j<<"]";

            }
            if(!found)
            {
                cout<<endl<<"Can't find the sum for the target"<<endl;
            }
        }

};

int main()
{
    int size, target;
    cout<<"What is the size of array: ";
    cin>>size;
    cout<<endl<<"What is the Target:";
    cin>>target;
    Solution(size,target);
    return 0;
    
}
