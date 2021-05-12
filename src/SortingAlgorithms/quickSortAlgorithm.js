import * as helpers from './helpers.js';

export async function quickSort(array, start, end) {
    if (start >= end) {
        return;
    }

    console.log(array);

    let index = await partition(array, start, end);


    //await, but allows the two quickSorts to go simultatneously.
    //But won't move on until those two quicksorts are done
    await Promise.all([
        quickSort(array, start, index-1),
        quickSort(array, index + 1, end)
    ]);
  

    return array;
}

async function partition(array, start, end) {
    let pivotIndex = start;
    let pivotValue = array[end];

    for(let i = start; i < end; i++) {
        if(array[i] < pivotValue) {
            await helpers.mark(pivotIndex);
            await helpers.swap(array, i, pivotIndex);
            await helpers.unmark(pivotIndex);
            pivotIndex++;
        }
    }

    await helpers.swap(array, pivotIndex, end);
    return pivotIndex;
}
