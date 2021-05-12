import * as helpers from './helpers.js';

export async function bubbleSort(array, length) {

    for(let k = 0; k < length - 1; k ++) {
        for(let i = 0; i < (length - k - 1); i++) {
            if(array[i] > array[i + 1]) {
                
                await helpers.mark(i);

                await helpers.swap(array, i, i + 1);

                await helpers.unmark(i);

                // let temp = array[i];
                // array[i] = array[i+1];
                // array[i+1] = temp;
            }
        }
    }

    
}