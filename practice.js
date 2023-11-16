// function sum (a, b) {
//     return a+b;
// }
// function shipment (f) {
//     return function (a) {
//         return function (b) {
//             return f(a, b);
//         }
//     }
// }

// const calculateShipping = shipment(sum); //
// const basicProcessing = calculateShipping (5) //
// console.log(basicProcessing (3));
// console.log(basicProcessing (4));
// console.log(shipment(sum)(25) (4));

// // const newSum = sum.bind(null, 5, 74);
// // console.log(newSum(2));

// const multiplyBy = (num1) => {
//     return (num2) => {
//         return num1 * num2;
//     }
// }

// console.log(multiplyBy(3)(40));

// // function callMeMayBe() {
// // 	setTimeout(function() {
// // 		console.log(callMe);
// // 	}, 4000)
// // 	const callMe = 'Hi! I am out';
// // }
// // callMeMayBe()

// function makesApiCall() {
//     // We make an api call
//     const arr = new Array(9000).fill(20);
//     console.log('Data filled');
//     return function (index) {
//         return arr[index]
//     }
// }
// console.log(makesApiCall()(56));

// // function setIntervalExample() {
// //     const array = [1,2,3,4];
// //     for (let i = 0; i < array.length; i++) {
// //         setTimeout(function() {
// //             console.log(array[i]);
// //         }, 5000)
// //         console.log(array[i]);
// //     }
// // }
// // setIntervalExample();


// const extendedFunction = {
//     attack() {
//         return 'attacked';
//     }
// };

// function createSoldier (name, weapon) {
//     let newSold = Object.create(extendedFunction);
//     newSold.name = name;
//     newSold.weapon = weapon;
//     return newSold;
// }
// const alpha1 = createSoldier('James','Gun');
// console.log(alpha1);

// function Soldier(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
// }
// Soldier.prototype.shoot = function() {
//     const fire = () => {
//         return `${this.name} fire shooting`;
//     }
//     return fire(this.name);
// }
// const obj = new Soldier('Viky', 'AKM');
// console.log(obj.shoot());



// const array = [];
// array['id'] = 2;
// array['id1'] = 2;
// array['id2'] = 2;
// function mutatedArray(arr) {
//     const newArray = [...arr];
//     newArray.pop();
//     return newArray;
// }
// console.log(mutatedArray(array));

// console.log(array);


const fetchData = async () => {
    try {
        const data = await fetch(`https://mcstaging.travers.com.mx/rest/V1/categories/`, {
            headers: {Authorization: 'Bearer 8ck225g726ul26345xuqi8dpeh556l2x'}
          })
        if (!data.ok) throw Error("Please reload the app");
        const response = await data.json();
        console.log(response);
    } catch (error) {
        console.error(error.message)
    }
}
(async () => fetchData())();