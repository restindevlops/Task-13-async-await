
//.then()
//--------------------------------------------------------------------------------

console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

const promisewifebringingtickets= new Promise ((resolve, reject)=> {
setTimeout(()=> resolve ('Husband & Wife enters with ticket, '),3000);
});

const getPopcorn = promisewifebringingtickets.then((t)=>{
    
    console.log('wife: I have the tickets');
    console.log('husband: We should go in');
    console.log('wife: No, I need a popcorn');

    return new Promise ((resolve,reject)=>resolve(t+ 'popcorn,'));
});

const getButter = getPopcorn .then((t)=>{
    
    console.log('husband: Shall we  go in ?');
    console.log('wife: No I need butter on my popcorn');

    return new Promise ((resolve,reject)=>resolve(t+ ' butter'));
});

const getColddrink = getButter .then((t)=>{
    
    console.log('husband: Ok, lets go in');
    console.log('wife: Wait, I need a cool drink ');
    console.log('husband: Anything else ?');
    console.log('wife: No nothing..come lets go, we are getting late ');
    console.log('husband: Thank you for the reminder *grinds*')

    return new Promise ((resolve,reject)=>resolve(t+ ' & Coke'));
});

getColddrink.then((t)=> console.log(t));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');



//Aysnc Await
//--------------------------------------------------------------------------------

// console.log('person 1: shows ticket');
// console.log('person 2: shows ticket');

// const preMovie= async ()=> {
//     const promisewifebringingtickets= new Promise ((resolve, reject)=> {
//         setTimeout(()=> resolve ('Husband & Wife shows ticket'),3000);
//     });
//     const getPopcorn = new Promise((resolve,reject)=> resolve('popcorn'));
//     const getButter = new Promise((resolve,reject)=> resolve('butter'));
//     const getColddrink = new Promise((resolve,reject)=> resolve('coke'));

//     let ticket = await promisewifebringingtickets;

//     console.log('wife: I have the ' + ticket);
//     console.log('husband: We should go in');
//     console.log('wife: No I am hungry');

//     let popcorn = await getPopcorn;

//     console.log('husband: I got some ' + popcorn);
//     console.log('husband: Ok, we should go in');
//     console.log('wife: Wait, I need some butter on the popcorn');

//     let butter = await getButter;

//     console.log('husband: I got some ' + butter);
//     console.log('husband: Ok, we should go in');
//     console.log('wife: No I need a cool drink too');

//     let colddrink = await getColddrink;

//     console.log('husband: I got some ' + colddrink);
//     console.log('husband: Anything else');
//     console.log('wife: No nothing..come lets go, we are getting late ');
//     console.log('husband: Thank you for the reminder *grinds*');
   


// return ticket;
// }

// preMovie().then((m)=> console.log(m));
// console.log('person 4: shows ticket');
// console.log('person 5: shows ticket');

//