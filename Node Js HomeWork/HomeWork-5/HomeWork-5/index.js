const users = [
    {
        user_id: 1,
        userName: 'Javohir',
        email: 'burxonsultonov5678@gmail.com',
        password: '12345678'
    }
]
let user_id = 1

function addUser(userName,email,password){
    let localUser = []
    const date = new Date()
    user_id += 1
    let result = users.push({user_id,userName,email,password,date})
    return result
}

function searchUser(n){
    return users.find(x => x.user_id === n);
}

addUser('Burkhon','burxonsultonov5678@gmail.com','qwertyui')
addUser('Burkhon','burxonsultonov5678@gmail.com','qwertyui')
addUser('Burkhon','burxonsultonov5678@gmail.com','qwertyui')

console.log(searchUser(1));
console.log(users)





