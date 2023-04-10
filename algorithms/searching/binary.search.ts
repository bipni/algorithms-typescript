export const binarySearch = (arr: Array<number>, value: any): boolean => {
    let sortedArray = arr.sort((a, b) => a - b);

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === value) {
            return true;
        } else if (arr[mid] < value) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
}