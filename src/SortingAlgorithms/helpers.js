

export async function swap(array, a, b) {
    await sleep(20);

    if(a !== undefined && b !== undefined) {
        let temp = array[a];
        array[a] = array[b];
        array[b] = temp;

        document.getElementById(`bar-${a}`).style.height = `${array[a]}px`;
        document.getElementById(`bar-${b}`).style.height = `${array[b]}px`;
    }
    
}

export async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

export async function mark(idx) {
    if(document.getElementById(`bar-${idx}`)) {
        document.getElementById(`bar-${idx}`).classList.add('active');
    }
}

export async function unmark(idx) {
    if(document.getElementById(`bar-${idx}`)) {
        document.getElementById(`bar-${idx}`).classList.remove('active');
    }
}

export async function markMoving(idx) {
    if(document.getElementById(`bar-${idx}`)) {
        document.getElementById(`bar-${idx}`).classList.add('moving');
    }
}

export async function unmarkMoving(idx) {
    if(document.getElementById(`bar-${idx}`)) {
        document.getElementById(`bar-${idx}`).classList.remove('moving');
    }
}

export async function mergeSwap(array , index) {
    await sleep(100);

    document.getElementById(`bar-${index}`).style.height = `${array[index]}px`;
}