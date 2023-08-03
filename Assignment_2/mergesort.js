const testArr = [1, 5, 2, 8, 3, 7, 4, 6];

function mergeSort(arr) {
    const middleIndex = Math.ceil(arr.length / 2);
    if (arr.length < 2){
        return arr
    } else {
        const leftArr = arr.splice(0, middleIndex);
        const rightArr = arr.splice(-middleIndex);
        const sortedLeft = mergeSort(leftArr);
        const sortedRight = mergeSort(rightArr);
        return merge(sortedLeft, sortedRight);
    }
}

function merge(leftArr, rightArr) {
    const mergedArr = []
    let lIndex = 0;
    let rIndex = 0;

    while(lIndex < leftArr.length && rIndex < rightArr.length) {
        if(leftArr[lIndex] <  rightArr[rIndex]) {
            mergedArr.push(leftArr[lIndex]);
            lIndex++;
        } else {
            mergedArr.push(rightArr[rIndex]);
            rIndex++;
        }
    }
    return mergedArr.concat(leftArr.slice(lIndex)).concat(rightArr.slice(rIndex));
}

console.log(mergeSort(testArr))