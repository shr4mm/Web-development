window.onload = (event) => {
    const formElem = document.getElementById("form");

    formElem.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const formData = new FormData(formElem);
        
        let jsonObject = {};
        formData.forEach((value, key) => {
            jsonObject[`${key}`] = value;
        });

        fetch("/api/products", { 
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(jsonObject)
        })
        .then(res => {
            document.location = '/products';
        })
        .catch(error => {
            console.log(error);
        });
    });
};