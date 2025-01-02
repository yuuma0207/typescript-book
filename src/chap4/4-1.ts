// 4.1.1
function range(min: number, max: number): number[] {

    const results: number[] = [];

    for (let i = min; i <= max; i++) {
        results.push(i);
    }
    return results;
}

console.log(range(5,10))

// 4.1.2
function helloWorldNTimes(n: number): void {
    if (n >= 100) {
        console.log(`${n}回はむりぽ`);
        return;
    }

    for (let i = 0; i < n; i++) {
        console.log("Hello World!");
    }
}

helloWorldNTimes(5)
helloWorldNTimes(121)

// 4.1.3
type Human = {
    height: number;
    weight: number;
}

// const calcBMI = function(human: Human): number {
//     return human.weight/human.height**2;
// };

const calcBMI = function({ height, weight }: Human): number {
    return weight/height**2;
};

const uhyo: Human = { height: 1.84, weight: 72 }

console.log(calcBMI(uhyo))

// 4.1.4
const calcBMI_arrow = ({ height, weight }: Human): number => {
    return weight/height**2;
};

// 4.1.5
const calcBMI_arrow2 = ({ height, weight }: Human): number => weight/height**2;

type ReturnObj = {
    bmi: number
}

// Objectリテラルの場合は式を()で囲む必要があり
const calcBMIObject = ({ height, weight }: Human): ReturnObj => ({ bmi: weight/height**2 });

//4.1.6
const obj = {
    double(num: number): number {
        return num*2;
    },

    // 通常のプロパティの書き方+arrow関数の省略形
    double2: (num: number): number => num*2,
};

console.log(obj.double(100));
console.log(obj.double2(-50))
