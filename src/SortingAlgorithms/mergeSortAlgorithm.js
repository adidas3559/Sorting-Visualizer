import * as helpers from './helpers.js';


export async function mergeSort(array) {
    await mergeDivider(array, 0, array.length - 1);
    // await mergeDivider(array, array);

    for(let i = 0 ; i < array.length ; ++i) {
        document.getElementById(`bar-${i}`).classList.add('done');
    }
}

async function mergeDivider(oldArray, start, end) {
    if(start < end) {
        let mid = start + Math.floor((end - start) / 2);
        await mergeDivider(oldArray, start, mid);
        await mergeDivider(oldArray, mid + 1, end);
        await merge(oldArray, start, mid, end);
    }
}

async function merge(oldArray, start, mid, end) {
    let newArray = [];
    let leftIndex = start;
    let rightIndex = mid + 1;

    while(leftIndex <= mid && rightIndex <= end) {
        if(oldArray[leftIndex] >= oldArray[rightIndex]) {
            newArray.push(oldArray[rightIndex]);
            rightIndex++;
        }
        else {
            newArray.push(oldArray[leftIndex]);
            leftIndex++;
        }
    }

    while(leftIndex <= mid) {
        newArray.push(oldArray[leftIndex]);
        leftIndex++;
    }

    while(rightIndex <= end) {
        newArray.push(oldArray[rightIndex]);
        rightIndex++;
    }

    for(let i = start; i <= end; i++) {
        await helpers.mark(i);
    }

    for(let i = start, j = 0; i <= end && j < newArray.length; i++, j++) {
        await helpers.sleep(100);
        oldArray[i] = newArray[j];
        document.getElementById(`bar-${i}`).style.height = `${newArray[j]}px`;
    }

    for(let i = start; i <= end; i++) {
        await helpers.unmark(i);
    }

    console.log(newArray);
    console.log(oldArray);
}
