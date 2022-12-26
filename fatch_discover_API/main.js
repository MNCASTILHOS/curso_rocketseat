const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
    .then(response => console.logresponse.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUsers(id) {
    fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {
     userName.textContent = data.name
     userCity.textContent = data.city
     userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function updateUser(updateUser){
    fetch(`${url}/${id}`, {
        method:"PUT",
        body: JSON.stringify(updateUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function deletUser(id){
    fetch(`${url}/${id}`,{
        method:"DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
    name: "olivia Zars",
    avatar: "http://lorempixel.com/400/200",
    city: "Rio do Sul"
}
//adduser(newUser)

const updateUser = {
    name: "Marcelo Clovis",
    avatar: "https://pcsum.photos/200/300",
    city: "Recife"
}

//updateUser(updateUser, 9)

deletUser(5)

getUsers()
getUsers(9)