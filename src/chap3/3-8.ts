type User = {
    name: string;
    age: number;
    premiumUser: boolean;
}

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;

const users: User[] = [];

const lines = data.split('\n');

for (const line of lines) {
    if (line === '') {
        continue;
    }
    const [name, ageString, premiumUserString] = line.split(',');
    const age = Number(ageString);
    const premiumUser = Boolean(Number(premiumUserString));

    users.push({
        name,
        age,
        premiumUser
    })
}



for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name} is a premium user`);
    } else {
        console.log(`${user.name} is not a premium user`);
    }
}