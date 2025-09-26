

def TwoSum(arr,target):
    arr.sort() #ensures that the array is sorted 
    l,r=0,len(arr)-1

    while(l<r):
        sum=arr[l]+arr[r]
        if(sum==target):
            return(l,r)
        if(sum<target):
            l+=1
        else:
            r-=1


arr = [2 , 7 , 11, 9 ,6 ,4]
result = TwoSum(arr, 10)
print("Result:", result)
 
