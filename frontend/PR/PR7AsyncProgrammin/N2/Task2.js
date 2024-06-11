function job(){
    return new Promise( (resolve) =>{
        setTimeout(()=>{
            resolve("Hello World!");
        },2000);})

}

job().then(result => {
    console.log(result);
});
