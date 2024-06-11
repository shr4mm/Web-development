function boilWater() {
    console.log("start boiling");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("water has been boiled");
            resolve();
        }, 20000);
    });
}

function addTeapack() {
    console.log("adding teapack");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("teapack has been added");
            resolve();
        }, 5000);
    });
}

function addSugar() {
    console.log("adding sugar");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("sugar has been added");
            resolve();
        }, 2000);
    });
}

function sliceBread() {
    console.log("slicing bread");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("bread has been sliced");
            resolve();
        }, 10000);
    });
}

function sliceSausage() {
    console.log("slicing sausage");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("sausage has been sliced");
            resolve();
        }, 10000);
    });
}

function addButter() {
    console.log("adding butter");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("butter has been added");
            resolve();
        }, 5000);
    });
}

function cookBreakfast(teapack, sugar, bread, sausage, butter) {
    return new Promise((resolve, reject) => {
        if (!bread) {
            reject(new Error("There is no bread for sandwich. cannot cook breakfast for you"));
            return;
        }
        
        let makingTeaPromise = boilWater()
            .then(() => addTeapack(teapack))
            .then(() => {
                if (sugar) {
                    return addSugar(sugar);
                } else {
                    console.log("skipping sugar");
                    return Promise.resolve();
                }
            });

        let makingSandwichPromise = sliceBread(bread)
            .then(() => sliceSausage(sausage))
            .then(() => addButter(butter));

        Promise.all([makingTeaPromise, makingSandwichPromise])
            .then(() => {
                console.log("Breakfast is ready!");
                resolve();
            })
            .catch((error) => {
                reject(error);
            });
    });
}

cookBreakfast("Lipton", null, "whole grain", "chicken sausage", "butter")

