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

// 4.1.6
const obj = {
    double(num: number): number {
        return num*2;
    },

    // 通常のプロパティの書き方+arrow関数の省略形
    double2: (num: number): number => num*2,
};

console.log(obj.double(100));
console.log(obj.double2(-50))

// 4.1.7
const sum = (...args: number[]): number => { // rest引数の型注釈は必ず配列型もしくはタプル型
    let result = 0;
    for (const num of args) {
        result += num;
    }
    return result;
};

console.log(sum(1,10,100));
console.log(sum(123,456));

// 4.1.8
const nums = [1,2,3,4,5];
console.log(sum(...nums, 6, ...nums));

// 4.1.9
const toLowerOrUpper = (str: string, upper: boolean = false): string => {
    if (upper) {
        return str.toUpperCase();
    } else {
        return str.toLowerCase();
    }
}

console.log(toLowerOrUpper("Hello", undefined));
console.log(toLowerOrUpper("Hello", false));
console.log(toLowerOrUpper("Hello", true));

// 4.1.10
type User_chap4 = { name: string, age: number };

const getName = (u: User_chap4): string => {
    console.log("u is", u);
    return u.name
};
const users_chap4: User_chap4[] = [
    { name: "uhyo", age: 26 },
    { name: "John Smith", age: 15 }
];

// const names = users_chap4.map(getName);

const names = users_chap4.map((u: User_chap4): string => u.name);
console.log(names);

const adultUsers = users_chap4.filter((user: User_chap4): boolean => user.age >= 20);
const allAdult = users_chap4.every((user: User_chap4): boolean => user.age >= 20);
const seniorExists = users_chap4.some((user: User_chap4): boolean => user.age >= 60);

const john = users_chap4.find((user: User_chap4) => user.name.startsWith("John"));

console.log(adultUsers);
console.log(allAdult);
console.log(seniorExists);
console.log(john);
