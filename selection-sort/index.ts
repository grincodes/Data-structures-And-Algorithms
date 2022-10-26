function findSmallest(arr:number[]){
    //set the first item in the array to be the smallest number 

    let smallest_number =arr[0]
    let smallest_index = 0;


    for (let index = 0; index < arr.length; index++) {

        if (arr[index] < smallest_number) {
           smallest_number = arr[index];
           smallest_index = index;
         
        }
       
    }

    return smallest_index

}


function selectionSort(arr:number[]){
    let newArr:number[] = [];

    for (let index = 0; index < arr.length; index++) {
       let smallest = findSmallest(arr)
       newArr.push(arr[smallest])
       arr.splice(smallest,1)
    }

    return newArr
}

let sort = selectionSort([2,7,9,5,45,8])

console.log(sort);

