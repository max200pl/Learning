# Algorithms

## ======= Strings ========

### Compare strings

1. find the missing letter from a string and return it

    ```javascript
    // fiend uniq literals form alphabet
    function fearNotLetter(str) {
    let currCharCode = str.charCodeAt(0);
    let missing = undefined;

    str.split("").forEach((letter) => {
        if (letter.charCodeAt(0) === currCharCode) {
        currCharCode++;
        } else {
        missing = String.fromCharCode(currCharCode);
        }
    });

    return missing;
    }
    ```

2. convert the characters &, <, "", '' to name code
    Решение один:
    1. разбить строку на массив элементов str.split("")
    2. создать массив с characters &, <, "", ''
    3. перебрать массив
    4. найти элемент и заменить на нужный
    5. собрать массив в кучу
    Решение два:
    6. создать объект ключ characters значение на что надо заменить
    7. создать регулярное выражение и заменить по ключу

    ```javascript
    function convertHTML(str) {
        const characterEntries = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&apos;"
        }
        return str.replace(/([&<>\"'])/g, match => characterEntries[match]);
    }
    ```
