function sum(a, b) {
    return a + b;
}
var answer = sum(10, 20); // 30
console.log(answer);
// Tuple
var basket;
basket = ['basketball', 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeValue = Size.Small;
// void
var sing = function () {
    console.log('Lalalala');
};
// never
var error = function () {
    throw Error('oops');
};
