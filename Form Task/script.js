async function postData(){
    var formdata={
        firstname:document.getElementById("firstname").value,
        lastname:document.getElementById("lastname").value,
        address:document.getElementById("address").value,
        pincode:document.getElementById("pincode").value,
        state:document.getElementById("state").value,
        country:document.getElementById("country").value,
        gender:document.getElementById("gender").value,
        food:document.getElementById("food").value,
    }
    try {
        let postData=await fetch("https://61f4eeec62f1e300173c3f56.mockapi.io/userdata",{
            method:"POST",
            body:JSON.stringify(formdata),
            headers:{
                "Content-type":"application/json"
            }
        })
        alert("Data stored succesfully")
        getData()
    } catch (error) {
        alert("Something went wrong")
    }
async function getData(){
    try {
        let userData=await fetch("https://61f4eeec62f1e300173c3f56.mockapi.io/userdata");
        let users=await userData.json();
        console.log(users)
        var tbody=document.getElementById("tbody");
        tbody.innerText=""
        users.forEach(user =>{
            var tr=document.createElement("tr");
            var idtd=document.createElement("td");
            idtd.innerText=user.id;
            var firstnametd=document.createElement("td");
            firstnametd.innerText=user.firstname;
            var lastnametd=document.createElement("td");
            lastnametd.innerText=user.lastname;
            var addresstd=document.createElement("td");
            addresstd.innerText=user.address;
            var pincodetd=document.createElement("td");
            pincodetd.innerText=user.pincode;
            var statetd=document.createElement("td");
            statetd.innerText=user.state;
            var countrytd=document.createElement("td");
            countrytd.innerText=user.country;
            var gendertd=document.createElement("td");
            gendertd.innerText=user.gender;
            var foodtd=document.createElement("td");
            foodtd.innerText=user.food;
            tr.appendChild(idtd);
            tr.appendChild(firstnametd);
            tr.appendChild(lastnametd);
            tr.appendChild(addresstd);
            tr.appendChild(pincodetd);
            tr.appendChild(statetd);
            tr.appendChild(countrytd);
            tr.appendChild(gendertd);
            tr.appendChild(foodtd);
            tbody.appendChild(tr);
        });
        
        } 
        catch(error){
        console.log(error);
    }
}
}
getData()