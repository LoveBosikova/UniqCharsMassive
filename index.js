const intersection = (...arrays) => {
    if (arrays.length === 0) {
        return null
    }

    const commonCharsFromAll = [];

    for (const array of arrays) {
        for (const item of array) {
            
            let commonItem = true;

            arrays.forEach((array) => {
                if (!array.includes(item)) {
                    commonItem = false;
                }
                return commonItem;
            })

            if (commonItem === true) {
                commonCharsFromAll.push(item);
            }
        }
    }

    function makeArrUniq(arr) {
        const result = [];

        for (const item of arr) {
            if (!(result.includes(item))) {
                result.push(item);
            }
        }
        return result;
    }
    return makeArrUniq(commonCharsFromAll);
}

const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];
console.log(intersection(arr1, arr2)) // [2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']