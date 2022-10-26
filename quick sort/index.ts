function quickSort(list:number[]):number[]{

    if (list.length < 2) {
      return list;
    }

    //pick a pivot
    let pivot = list[list.length - 1];
    
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < list.length - 1; i++) {
      list[i] <= pivot ? leftArr.push(list[i]) : rightArr.push(list[i]);
    }


    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];


}


console.log(quickSort([10,5,3,6,9]));