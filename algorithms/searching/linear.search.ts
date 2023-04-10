export const linearSearch = (arr: Array<number>, value: any): number => {
    const length = arr.length;

    for (let i = 0; i < length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }

    return -1;
}