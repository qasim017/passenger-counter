let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")



let count = 0

function increment (){
    count += 1
    countEl.textContent = count
}

function save(){
let countstr = count + " - "
saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}


// let message = "You have three new notification"
// let messageToUser = message
// console.log(messageToUser)

// let name = "qasim"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name
// console.log(myGreeting)
