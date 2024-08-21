// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise
// 
//             
//               Allows you write asumchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after Await is placed in a event queue
// 
// 
// 
// 
// 
// 







function walkDog(){


    

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const dogwalked = true

            if(dogwalked){
                resolve("You walk the dog 🐕‍🦺🐩🐕");
            }else{
                reject("YOu didn't walk the dog")
            }

            
            
        },1500)
    
    })
}

function cleanKitchen(){
  

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const cleankitchen =true

            if(cleanKitchen){
                resolve("You clean the kitchen🧹🧹 ");
            }else{
                reject("YOu didn't clean the kitchen ")
            }
            
            
        },2500)
    })
}


function takeOutTrash(){
 


    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            const taketrash=false
            if(taketrash){
                resolve("You took out the trash 🚮🚮");
            }else{
                reject("You didn't take out the trash")
            }
          
        
        },500)
    })
}




async function dochores(){
 

    try{
        const walkdog1= await walkDog()
        console.log(walkdog1);

        const cleankitchen= await cleanKitchen()
        console.log(cleankitchen);

        const taketrash = await takeOutTrash();
        console.log(taketrash);

        console.log("You finished all the chores");
    }
    catch(error){
        console.error(error);
    }
        
}

dochores()







// walkDog().then(value=>{console.log(value); return cleanKitchen()})
//          .then(value=>{console.log(value); return takeOutTrash()})
//          .then(value=>{console.log(value); console.log("You have done all the chores")})
//          .catch(error=>console.error(error));