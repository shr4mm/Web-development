function main(data) {
    return new Promise((resolve) => {
        if (typeof data !== 'number') {
            resolve("error");
        }
        else if(data%2==0){
            setTimeout(() => {
                resolve("even");
            }, 1000);

        }
        else{
            setTimeout(() => {
                resolve("odd");
            }, 2000);
        }
    })
}
main("asdfjkl;").then(result => {console.log(result);});
main(1).then(result => {console.log(result);});;
main(2).then(result => {console.log(result);});;