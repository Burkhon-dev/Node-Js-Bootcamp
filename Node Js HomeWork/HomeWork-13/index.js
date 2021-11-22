// Is the Number Symmetrical?


function palindrom(num){
    for(let i = 0; i < num.length / 2; i++){
        if(num[i] != num[num.length-i-1]){
            return false
        }
    }
    return true
    }   

console.log(palindrom(1111))



// Convert Hours into Seconds
//Write a function that converts hours into seconds.



function changeToSecond(hour){
    console.log(`${hour} Soat ==> ${hour * 3600} Sekund`)
}
changeToSecond(2)



// Find the Largest Numbers in a Group of Arrays
 

function findLargestNums(arr){
    let result = []
    arr.filter((value) => {
        let arrMax = Math.max(...value)
        result.push(arrMax)
    })
    console.log(result);
    return result
}

findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])



//TODO LIST
/*
    / todo list, user registratsiya qiladi har bitta user ni na'lunotlari arrayga yozilib boradi,
    / va har bir user todo qo'shnoqchi bo'lsa login parol bilan todo qo'shadi, userni qo'shgan todosi todos
    / degan arrayga tushadi
*/


const users = [
    {
        user_id: 1,
        username: "admin",
        password: "admin123456"
    },
    {
        user_id: 2,
        username: "admin2",
        password: "admin123456"
    },    {
        user_id: 3,
        username: "admin3",
        password: "admin123456"
    },  
]

const todos = [
    {
        todo_id: 1,
        todo_text: "Hello world hi",
        user_id:2
    },                         
    {
        todo_id: 2,
        todo_text: "Hello world hi", 
        user_id:2
    },      
    {
        todo_id: 3,
        todo_text: "Hello world hi",
        user_id:3
    }
]


function register(username, password){
    function validationUsername(usernm){
        if(usernm.length > 5 || 32< usernm.length){
            return usernm
        }else{
            return false
        }
    }
    function validationPassword(passwd){
        if(passwd.length >= 8 || 32 <= passwd.length){
            return passwd
        }else{
            return false
        }
    }
    user_id = users.length + 1 

    console.log();
    username1 = validationUsername(username)
    password1 = validationPassword(password)
    return users.push({user_id, username: username1, password: password1})
}


function addtodo(username, password, message){
    let result = users.filter((value) => {
            if(value.username !== username && value.password === password){
                null
            }else if(value.username != username && value.password != password){
                null
            }
            else{
                return value.user_id
            }
    })
    result = result.find(x => x.user_id).user_id
    let todo_id = todos.length + 1
    return todos.push({todo_id, todo_text: message, user_id: result}) 
}

// register('palanchi1sd', 'binninal3');
addtodo( 'admin2', "admin123456", "asdasdasd")
console.log(todos);




// SHARTLAR
/*
registratstya gilib turganda val idatsiya bilan uts in, usernane ning length nininun 8 ta naxsinun 32,
password ning tength nininun 8 ta, textning tchida kotta hart kichik hart va son gatnashtsht kerak
todos array ga yozilib turganda, { todo id, todo_text, user_id }, user id ni todo qushgan odanni
usernane va paroli dan olib user id ga yozsin !!!
*/





