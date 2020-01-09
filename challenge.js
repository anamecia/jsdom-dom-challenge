
//timer
let counter = document.querySelector('#counter')

function incrementNumber(){
    let number = parseInt(counter.innerText)
    number ++
    counter.innerText = `${number}`
}

function callCounter(){
    counter.classList.add("running")
    intervalID = setInterval(incrementNumber, 1000)
}
callCounter()

// - and + buttons 

let minusBtn = document.querySelector('#minus')
let plusBtn = document.querySelector('#plus')

minusBtn.addEventListener('click', decrement)

function decrement(){
    let counterNumber = parseInt(counter.innerText)
    counterNumber--
    counter.innerText = `${counterNumber}`
}

plusBtn.addEventListener('click', increment)

function increment(){
    let counterNumber = parseInt(counter.innerText)
    counterNumber++
    counter.innerText = `${counterNumber}`
}

//likes button

let likes = document.querySelector('#heart')
let likesList = document.querySelector('.likes')
let arrayLikes = document.querySelector('ul.likes li')


likes.addEventListener('click',addLike)

function addLike (){
    let currentTime = counter.innerText
    
   let target_li = document.getElementById(currentTime)
    if (target_li != null){
        target_li.value = parseInt(target_li.value) + 1 
        target_li.innerText = `${currentTime} has been liked ${target_li.value} times`
    }else{
        li = document.createElement('li')
        li.id = currentTime
        li.value = 1
        li.innerText = `${currentTime} has been liked ${li.value} time`
        likesList.appendChild(li) 
    }
}
 
//pause button 
let pauseBtn = document.querySelector('#pause')

pauseBtn.addEventListener('click', pauseAction)

function pauseAction(){
    if(counter.classList.contains("running")){
        clearInterval(intervalID)
        counter.classList.remove("running")
    }else{
        callCounter()
    }       
}

//add comments
let commentForm = document.querySelector('#comment-form')
let commentInputField = document.querySelector('#comment-input')
let commentList = document.querySelector('#list')

commentForm.addEventListener('submit', newComment)

function newComment(){
    event.preventDefault()
    comment = document.createElement('p')
    comment.innerText = commentInputField.value
    commentList.appendChild(comment)
    commentForm.reset()
}