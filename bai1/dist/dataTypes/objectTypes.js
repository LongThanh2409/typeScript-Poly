var arr = ["1", "2", "3",];
var arr2 = [[1, 2, 3], [3, 4, 5]];
// const arr: Array<string>= ["1", "2", "3", "4"]
// const arr2: Array<Array<number>> =[[1, 2, 3], [3, 4, 5]]
// typles
var tuples = ['Long', 'HN', 20];
//Enum 
var STATUS;
(function (STATUS) {
    STATUS[STATUS["A"] = 0] = "A";
    STATUS[STATUS["B"] = 1] = "B";
    STATUS[STATUS["C"] = 2] = "C";
})(STATUS || (STATUS = {}));
var CODE;
(function (CODE) {
    CODE[CODE["color"] = 200] = "color";
    CODE[CODE["D"] = 400] = "D";
    CODE[CODE["E"] = 500] = "E";
    CODE[CODE["F"] = 501] = "F";
})(CODE || (CODE = {}));
console.log(CODE);
//functions
var upperCase = function (a) {
    if (typeof a == "string") {
        console.log(a.toUpperCase());
    }
    else {
        console.log(a);
    }
};
upperCase("gfgfd");
