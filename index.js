const intersection = (...arrays) => {
    if (arrays.length === 0) {
        return null
    }

    // Создаём массив для всех значений,, которые встречаются сразу во всех массивах.
    const commonCharsFromAll = [];

    //Проверяем каждое значение в первом массиве - встречается ли оно в остальных массивах из переданных в функцию массивов.
    const [firstArray, ...rest] = arrays;

        for (const item of firstArray) {

            // Изначально считаем элемент подходящим. Если вдруг он не встречается в каком-либо из массивов, меняем значение на фолси, то есть элемент нам не подходит.
            let commonItem = true; 
            rest.forEach((array) => {
                if (!array.includes(item)) {
                    commonItem = false;
                }
                return commonItem;
            })
            // Есди после проверок элемента во всех массивах он остаётся подходящим, и его еще нет в результирующем массиве, то записываем его в результирующий массив
            if ((commonItem === true) && (!commonCharsFromAll.includes(item))) {
                commonCharsFromAll.push(item);
            }
        }

    return commonCharsFromAll;
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