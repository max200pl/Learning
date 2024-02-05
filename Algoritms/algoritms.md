# алгоритмы по решению задач

## Массив в массиве

- нужно перебрать массив потом вложенный массив

1. отбить основной цикл и внутренний разделителями

```javascript
function uniteUnique(arr) {
  arrOfArg.map((arr, id) => {
    console.log("+++++++++++++++++++++++++")
    console.log("------arr---------", arr)

    arr.map((el) => {
      console.log("======el=====", el)
    });
  });
}
uniteUnique([1, 3, 2, 2, 2], [5, 2, 1, 4]);
```
