//1. Function declaration
function func1() {
    console.log("Hello world!");
}
var func2 = function () {
    console.log("Hello world!");
};
var func3 = function () {
    console.log('Heelo ba');
};
//2. Function return
function func4() {
    return;
}
function sum(a) {
    return a;
}
function func5() {
    console.log("hello function5!");
}
function func7() {
    var error = new Error("Lỗi cả rổ");
    throw error;
}
// 3. Function parameter
function divide(a, b) {
    if (b) {
        return a * b;
    }
    else {
        return a;
    }
}
function divide2(a, b) {
    if (b === void 0) { b = 3; }
    return a * b;
}
divide(20);
// 4. Rest parameter
var showClass = function (name) {
    var classs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classs[_i - 1] = arguments[_i];
    }
    return "Sinh vi\u00EAn ".concat(name, " h\u1ECDc l\u1EDBp ").concat(classs.join(', '));
};
console.log(showClass("Long", "Toán", "Văn"));
//5. callback
var arr_1 = [3, 5, 7];
// const temp = arr_1.map((item) => {
//     return item * 2
// })
var we17304_maps = function (arr, callback) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        var newItem = callback(arr[i], i);
        temp.push(newItem);
    }
    return temp;
};
var results = we17304_maps(arr_1, function (item, index) {
    return index;
});
console.log(results);
