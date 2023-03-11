const arr: string[] = ["1", "2", "3",];
const arr2: number[][] = [[1, 2, 3], [3, 4, 5]]
// const arr: Array<string>= ["1", "2", "3", "4"]
// const arr2: Array<Array<number>> =[[1, 2, 3], [3, 4, 5]]
// typles
const tuples: [string, string, number] = ['Long', 'HN', 20]

//Enum 
enum STATUS { A, B, C }
enum CODE { color = 200, D = 400, E = 500, F }
console.log(CODE);

//functions

const upperCase = (a: string | number) => {
    if (typeof a == "string") {
        console.log(a.toUpperCase());

    }
    else {
        console.log(a);

    }
}
upperCase("gfgfd")
