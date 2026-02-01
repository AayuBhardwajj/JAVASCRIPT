const prom2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let err=true;
        if(err){
            resolve({userName: "Aayush",
                        password: "123#"
            });
        }else{
            reject("Error occured");
        }
    },1000)
})

prom2.then((ab)=>{
    console.log(ab);
    return ab.password;
}).then((vq)=>{
    console.log(`The password is: ${vq}`);
}).catch((err)=>{
    console.log("promise rejected",err);
    
})
