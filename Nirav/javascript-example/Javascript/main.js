// x = 5;
// y = 6;
// console.log(x + y);

// const obj = {
//     fname : 'Nirav',
//     lname : 'Ghinaiya',
//     age : 21
// }
// console.log(obj.fname)
// console.log(Object.values(obj))

// const pobj = new Promise(() => {
//     setInterval(() => {
//         console.log(new Date().toLocaleTimeString())
//     }, 1000);
// })
// async function fun() {
//     const p1 = await pobj
//     console.log(p1)
// }
// fun();

//------------------------------>

// const pobj = new Promise((resolve, reject) => {
//     let a = [1,2,3,4,5]
//     setTimeout(() => {
//         resolve(a);
//         reject('data not found');
//     }, 1000);
// })
// const pobj1 = () => {
//     return new Promise((resolve, reject) => {
//         let obj = {
//             name : 'nirav',
//             age : 21
//         }
//         setTimeout(() => {
//             resolve(obj)
//             reject('p2 data not found')
//         }, 1000 );
//     })
// }
// const pobj2 = (fname, id) => {
//     return new Promise((resolve, reject) => {
//         let obj1 = {
//             lname : 'Ghinaiya',
//             std : 'BCA'
//         }
//         setTimeout(() => {
//             resolve(`my name is ${fname} ${obj1.lname}. Id number is ${id}.`)
//             reject('p3 data is not fount')
//         }, 2000, fname, id);
//     })
// }

// async function myfn() {
//     const p1 = await pobj
//     console.log(p1);

//     const p2 = await pobj1()
//     console.log(p2)

//     const p3 = await pobj2(p2.name, p1[2])
//     console.log(p3)
// }
// myfn();

//---------------------------------------->

// let n = 5;
// let string = '';
// for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n - i; j++) {
//         string += ' '
//     }
//     for (let k = 1; k <= i * 2 - 1; k++) {
//         if (k === 1 || k === i*2-1 ) {
//             string += "*";
//         }else if (n === i) {
//             string += ' ';
//         }
//         else{
//             string += ' ';
//         }
//     }
//     string += '\n'
// }
// for (let i = 1; i <= n - 1; i++) {
//     for (let j = 0; j < i; j++) {
//         string += ' ';
//     }
//     for (let k = (n - i) * 2 - 1; k > 0; k--) {
//         if (k === 1 || k === (n-i) *2-1 ) {
//             string += '*'
//         }else{
//         string += ' ';
//         }
//     }
//     string += '\n';
// }
// console.log(string);

//-------------------------

// console.log(typeof(Object))
// console.log(typeof(NaN))
// console.log(typeof(undefined))
// console.log(typeof Infinity)
// console.log(typeof new Date)


//------------( String method)----------
// let st = "JavaScript";
// let txt = 'apple, banana, kiwi , banana, banana'

// let st1 = st.padStart(15,"x")
// console.log(st.padEnd(14,'*'))
// console.log(st1)
// console.log(txt.padStart(2,'x'))


// const st1 = st.trim()
// const st1 = st.trimStart()
// const st1 = st.trimEnd()
// console.log(st.length)
// console.log(st1.length)


// const st1 = txt.replaceAll('banana', "hello")
// console.log(st1)
// const st1 = txt.replace(/banana/g, "hello")
// console.log(st1)

// console.log(st.split(""))
// console.log(txt.split(""))

// console.log(st.slice(1,5))  // start point - end point
// console.log(txt.slice(6))  // start point - end point

// console.log(st.substring(3,5))   // start point - end point
// console.log(txt.substring(7,14)) // start point - end point

// console.log(st.substr(2,4))     // start point - length

// ------------------(number)----
// let x = 9.5656;

//  console.log(typeof x.toExponential())
// console.log(typeof x.toFixed(2))
// console.log(typeof x.valueOf())
// console.log(typeof ((100 + 23).valueOf()))

// --------(Array)-----------------
// const x = ['apple','banana','kiwi','Orange','mango']
// const st = 'javascript'
// const num = [12,53,96,110,94,24,55,45,28,03,48,99,75]

// setInterval(() => {
//     console.log(new Date().toLocaleTimeString())
// }, 1000);


// console.log((Math.random() * 100).toFixed())
// console.log(num.sort())
// console.log(num.sort((a,b) => a - b))
// console.log(x.reverse())
// console.log(x.sort())

// console.log(x.slice(1,4))   // remove ele - (start) display end point

// let re = x.splice(1,1,'lemon')
// console.log(x)

// console.log(x.join('*'))
// console.log(st.split('').join('_'))

// console.log(typeof x)

// op:/ xyz
// const x = [
//     {name: 'abc'},
//     {name: [
//         {name : 'AAA'},
//         {name: [
//             {name : 'xyz'}
//         ]}
//     ]},
// ]
// // console.log(x)
// console.log(x[1].name[1].name[0].name)

// const fullNumber = '2034399002125581';
// const a = fullNumber.slice(-4);
// console.log(fullNumber.length)
// const b = a.padStart(fullNumber.length,"*")
// // console.log(a)
// console.log(b)

// ------------(Object method)------------
// const obj = {
//     name: 'nirav',
//     lname: 'ghinaiya',
//     age: 21
// }
// obj.fullname = function () {
//     return (this.name + '  ' + this.lname).toUpperCase();
// }
// console.log(obj.fullname())
// console.log(obj)

// let x = 2
// let z = x**3    // x * x * x
// console.log(z)

// -------------------------------------------------------------
// const data = [1,23,14,24,21,02,12,23,11,22]
// const mdata = data.map((val) => val * 2)
// const fldata = mdata.filter((val) => val > 30)
// const fgdata = mdata.filter((val) => val < 30)
// console.log(`Data < 30 : ${mdata}`)
// console.log(`Data > 30 : ${fldata}`)
// console.log(`Data < 30 : ${fgdata}`)


//----------------------------------------------
const x = "declared outside function";

exampleFunction();

function exampleFunction() {
    console.log("Inside function");
    console.log(x);
}

console.log("Outside function");
console.log(x);




