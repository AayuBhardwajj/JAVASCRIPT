const prom= new Promise((Resolve,Reject)=>{
    setTimeout(()=>{
    let error=false;
    if(!error){
        Resolve({
            userName:"Aayush",
            password:"123$"
        })
    }else{
        Reject("An error occured and the operation was terminated")
    }
},1000)
});

async function consumeProm(){
    try{
        const resp= await prom;
        console.log(resp);
    }catch(err){
        console.log(err);
        
    }
}

consumeProm();

//STUDY ABOUT FETCH AND ITS BACKEND WORKING