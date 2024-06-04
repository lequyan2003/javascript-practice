// filter => loc du lieu
const users = [
    {
        id: 7,
        email: 'lqa@mail.com',
        first_name: 'An',
        last_name: 'Le',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
        tags: ["AAA", "BBB"]
    },
    {
        id: 8,
        email: 'xbs@mail.com',
        first_name: 'Son',
        last_name: 'Xa',
        avatar: 'https://reqres.in/img/faces/8-image.jpg',
        tags: ["AAA"]
    },
    {
        id: 9,
        email: 'thn@mail.com',
        first_name: 'Nam',
        last_name: 'Tran',
        avatar: 'https://reqres.in/img/faces/9-image.jpg',
        tags: ["BBB"]
    }
];

/*
=> {
    [email]: {
        id: ...,
        email: ...
    }
}    
*/

// reduce
// const customUsers = users.reduce((acc, cur) => { // accumulate ~ tich luy => ac = {}, current
//     return {...acc, [cur.email]: cur}
// }, {});

// console.log({customUsers})

// console.log({customUsersValue: Object.values(customUsers)})

// const arrayUsers = Object.values(customUsers).reduce((acc, cur) => { // acc = []
//     return [...acc, cur.email]
// }, []);

// console.log({arrayUsers});

const numbers = [1, 2, 4, 1111, 222];

const total = numbers.reduce((acc, cur) => {
    return acc + cur;
})

console.log(total);

// const filterUsers = users.filter(user => {
//     // let found = false;
//     // user.tags.forEach(tag => {
//     //     if (tag === "BBB")    found = true;
//     // })
//     // return found;

//     // return user.tags.some(tag => {
//     //     return tag === "BBB";
//     // })  // => true =>> false

//     return user.tags.every(tag => {
//         return tag === "BBB";
//     })
// });

// console.log({filterUsers})

// map
// const customUsers = users.map(user => {
//     return {
//         ...user,
//         last_name: `${user.last_name} Edited`   
//     }
// });

// console.log({customUsers, users});

// const filterUser = users.filter((user) => {
//     return user.first_name == 'Nam' || user.last_name == 'Xa';
// });

// const findUser = users.find(user => {
//     return user.first_name == 'Nam' || user.last_name == 'Xa';
// });

// console.log({filterUser, findUser});