# Day 14 js reference vs copying :baby_bottle:   

## JavaScript :baby_chick:  

### Primitive  

```js
let a = 10;
let b = a;
console.log(a, b);
a = 1;
console.log(a, b);

let name = 'steven'
let name2 = name;
console.log(name, name2);
name = 'steven wang';
console.log(name, name2);
```
直接指定為 `copy` 而不是 `reference`。  

### Aray

```js
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;
team[3] = 'lux';
console.log(players, team);

const team2 = players.slice();
const team3 = [].concat(players);
const team4 = [...players];
const team5 = Array.from(players);

team2[2] = 'lux';
team3[2] = 'lux';
team4[2] = 'lux';
team5[2] = 'lux';

console.log(players, team2, team3, team4, team5);
```

- 直接指定為 `reference`。  

- `copy` 的方法有 `Array.slice()` `Array.concat()` `...` `Array.from()`。  

### Object  

```js
const person = {
    name: 'Wes Bos',
    age: 80
};
const mayer = person;
mayer.age = 10;
console.log(person, mayer);


const mayer2 = Object.assign({}, person, {number: 10, age: 10});
const mayer3 = {...person};

mayer2.age = 10;
mayer3.age = 10;

console.log(person, mayer2, mayer3);
```

- 直接指定為 `reference`。  

- `copy` 的方法有 `Object.assign()` `...`。  

### CloneDeep  

```js
const steve = {
    name: 'steve',
    age: 10,
    social: {
    twitter: '@steve',
    facebook: 'steve kk',
    }
}

const steve2 = Object.assign({}, steve); // 1 level deep
const steve3 = JSON.parse(JSON.stringify(steve)); // full copy
```

`array` & `object` 物件超過一層，需要用其他方法做 `copy`，不然只有第一層的 `copy`。  

> 相關資源:  
> [4 CREATIVE WAYS TO CLONE OBJECTS](https://heyjavascript.com/4-creative-ways-to-clone-objects/)  
> [StackOverflow](https://stackoverflow.com/questions/728360/how-do-i-correctly-clone-a-javascript-object)  
