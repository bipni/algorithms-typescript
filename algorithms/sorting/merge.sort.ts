export const mergeSort = (arr: Array<number>, order: 'ASC' | 'DESC' = 'ASC'): Array<number> => {
    const length = arr.length;

    mergeSortFunc(arr, 0, length - 1, order);

    return arr;
}

const mergeSortFunc = (arr: Array<number>, startIndex: number, endIndex: number, order: 'ASC' | 'DESC') => {
    if (startIndex >= endIndex) {
        return;
    }

    const mid = Math.floor(startIndex + ((endIndex - startIndex) / 2));

    mergeSortFunc(arr, startIndex, mid, order);
    mergeSortFunc(arr, mid + 1, endIndex, order);
    merge(arr, startIndex, mid, endIndex, order);
}

const merge = (arr: Array<number>, startIndex: number, mid: number, endIndex: number, order: 'ASC' | 'DESC') => {
    const n1 = mid - startIndex + 1;
    const n2 = endIndex - mid;

    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++)
        L[i] = arr[startIndex + i];
    for (let j = 0; j < n2; j++)
        R[j] = arr[mid + 1 + j];

    let i = 0;
    let j = 0;
    let k = startIndex;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j] && order === 'ASC') {
            arr[k] = L[i];
            i++;
        } else if (L[i] >= R[j] && order === 'DESC') {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}