//1. Function declaration
function func1() {
    console.log("Hello world!");

}
const func2 = function () {
    console.log("Hello world!");

}
const func3 = () => {
    console.log('Heelo ba');

}
//2. Function return
function func4(): string {
    return;
}
function sum(a: number): number {
    return a
}
function func5(): void {
    console.log("hello function5!");

}
function func7(): never {
    const error = new Error("Lỗi cả rổ")
    throw error
}
// 3. Function parameter
function divide(a: number, b?: number): number {
    if (b) {
        return a * b
    }
    else {
        return a
    }

}
function divide2(a: number, b: number = 3): number {
    return a * b
}
divide(20)
// 4. Rest parameter
const showClass = (name: string, ...classs: string[]): string => {
    return `Sinh viên ${name} học lớp ${classs.join(', ')}`
}
console.log(showClass("Long", "Toán", "Văn"));
//5. callback
const arr_1 = [3, 5, 7]
// const temp = arr_1.map((item) => {
//     return item * 2
// })


const we17304_map = function (arr: number[], callback?: (item: number, index: number) => number) {
    const temp = []
    for (let i = 0; i < arr.length; i++) {
        const newItem = callback(arr[i], i);
        temp.push(newItem)

    }
    return temp
}
const result = we17304_map(arr_1, (item, index) => {
    return index
})
console.log(result);
