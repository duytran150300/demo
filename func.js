function data() {
    try {
    // get data from data.json by fetch
        fetch("data.json")
    .then((response => response.json()))
    .then(data =>{
        //get tbody
        const tbody = document.querySelector(".tbody");
        var count = 1;
        data.forEach((item) => {
            //create tr 
            const tr = document.createElement("tr");

            // render 
            tr.innerHTML = `
            <td scope="col">${count++}</td>
            <td scope="col">${item.code}</td>
            <td scope="col">${item.name}</td>
            <td scope="col" class="d-flex justify-content-center align-items-center"><img
                    src="${item.img}" alt="" width=50px></td>
            <td scope="col">${item.address}</td>
            <td scope="col">${item.phone}</td>
            <td scope="col">${item.note}</td>
            `
            tbody.appendChild(tr);
        });

    })
    } catch (error) {
        console.log("Failed to fetch data", error);
    }
    
}
data();