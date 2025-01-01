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