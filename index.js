// Add your code here
/*const formData={
    dogName: 'Byron',
    dogBreed: 'Poodle',
}

const configurationObject={
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
    },
    body:JSON.stringify(formData)
        
};

fetch('http://localhost:3000/dogs', configurationObject)
.then(res=> res.json())
.then(object=>console.log(object))

  .catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
  });
*/


 function submitData (userName, userEmail) {
    return fetch("http://localhost:3000/users",{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(response=> response.json())
    .then(data=>document.body.append(data.id))
    .catch((error)=> {
        return document.body.append(error.message)
      
})
}

