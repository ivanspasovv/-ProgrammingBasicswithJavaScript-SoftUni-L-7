function solve(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let allNumbers = ''
    let sum = 0;

    for (let i = n1; i <= n2; i++) {
        if (i % 9 === 0) {
            sum = sum + i;
            allNumbers = allNumbers + i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(allNumbers);
}
    
solve(["100", "200"])