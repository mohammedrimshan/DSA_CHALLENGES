function selectionSort(arr){
    let n = arr.length
    for(let i=0;i<n-1;i++){
        let minIndex = i 
        for(let j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex!=i){
            [arr[i],arr[minIndex]] = [arr[minIndex],arr[i]]
        }
    }
    return arr
}

const array = [29, 10, 14, 37, 13];
console.log("Original Array:", array);
const sortedArray = selectionSort(array);
console.log("Sorted Array:", sortedArray);