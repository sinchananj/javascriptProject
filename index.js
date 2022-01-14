// Write Javascript Here
const baseUrl = "http://localhost:3000/users";
const headers = {
    'Content-type': 'application/json; charset=UTF-8'
};



getUsersRequest().then(users =>{
    //This function has been implemented already for you
    const tableEl = document.getElementById("table");
    for (const user of users) {
        tableEl.appendChild(createTableRow(user))
    }
})



function addNewUser(){
    debugger
    let person = prompt("Please Enter your name", "");
  if (person != null) {
    createUserRequest()
  }
    
    //TODO: Implement me
}



function editUser(id, userName){
    debugger
    let person = prompt("Edit name", "");
  if (person != null) {
    updateUserRequest(id,userName)
  }
    //TODO: implement me
}

function deleteUser(id){
    if (confirm('Delete User')) {
        deleteUserRequest(id)
      } else{
      }

}




//CRUD HELPER METHODS
function createUserRequest(user){
    return fetch(baseUrl, {
        method: 'POST',
        headers: headers,
        body:JSON.stringify(user),
    }).then(response => response.json())
}


function  getUsersRequest()  {
    return fetch(baseUrl, {
        method: 'GET',
    }).then(response => response.json())
}

function  deleteUserRequest(id)  {
    return fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
    }).then(response => response.json())
}


function updateUserRequest(user){
    return fetch(`${baseUrl}/${user.id}`, {
        method: 'PATCH',
        headers: headers,
        body:JSON.stringify(user),
    }).then(response => response.json())
}


//HELPER METHODS
function createTableRow(user){
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${user.name}</td> <td><a href="#" onclick="editUser(${user.id}, '${user.name}')">Edit</a> / <a href="#" onclick="deleteUser(${user.id})">Delete</a></td>`;
    return tr;
}
