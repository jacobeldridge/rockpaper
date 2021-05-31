// moves image which i cut = 
//https://www.google.com/
//search?q=rock+paper+scissors+images&safe=strict&sxsrf=ALeKk01gX8Xasq05bSLsWdwLRbP07o7poQ:1615210784943&tbm=isch&source=iu&i
//ctx=1&fir=yTGUsYUZjOtVcM%252CoptIN_5_g4OWUM%252C_&vet=1&usg=AI4_-kS65ExzrwtECJ-AMQNfyIOfJKeMLw&sa=X&ved=2ahUKEwi_k8uI6aDvAhXKVs0KHTHWBRMQ9QF6BAgIEAE#imgrc=yTGUsYUZjOtVcM
//randomitem function scource = https://www.w3resource.com/javascript-exercises/javascript-array-exercise-35.php
rock = "images/rock.png"
paper = "images/paper.png"
scissors = "images/scissors.png"
listimg = [rock, paper, scissors]
bot1count = 0
bot2count = 0
moves = []
count = 0
var howfast = ""
var howmany = ""
var timerstop = false
function stop(){
    location.reload()
}
function determine() {
    console.log("ajk")
    if (moves[0] === "images/rock.png" && moves[1] === "images/paper.png" 
    || moves[0] === "images/scissors.png" && moves[1] === "images/rock.png" 
    || moves[0] === "images/paper.png" && moves[1] === "images/scissors.png"){
        bot2count = bot2count + 1
        console.log("asd")
        moves = []
        console.log("if1")

    }
    if (moves[1] === "images/rock.png" && moves[0] === "images/paper.png" 
    || moves[1] === "images/scissors.png" && moves[0] === "images/rock.png" 
    || moves[1] === "images/paper.png" && moves[0] === "images/scissors.png"){
        bot1count = bot1count + 1
        console.log("asd")
        moves = []
        console.log("if2")
    }
    if (moves[0] === moves[1]){
        console.log("tie")
        moves = []
        console.log("else")
        
    }
    if (bot1count === 0 || bot2count === 0){
        percDiff = bot1count+bot2count*100
        document.getElementById("perc").innerHTML = percDiff.toFixed(2) + "%"     
    }
    else{
    percDiff =  100 * Math.abs( (bot1count - bot2count) / ( (bot1count+bot2count)/2 ) );
    document.getElementById("perc").innerHTML = percDiff.toFixed(2) + "%"     
    }           
}
function random_item(items){ 
return items[Math.floor(Math.random()*items.length)];    
}
function retrieve() {
    console.log("ad")
    howfast = document.getElementById("howfast").value
    howmany = document.getElementById("howmany").value  
}
function play(){
    if (howfast <= 0){
        error("silly goose you need to put in a valid value for howfast")
        return
    }
    if (howmany <= 0){
        error("silly goose you need to put in a valid value for howmany")
        return
    }
    document.getElementById("img1").src = ""
    document.getElementById("img2").src = ""
    for (i = 1; i < 3; i++) { 
        rand = random_item(listimg)
        img = document.getElementById("img"+i)
        moves.push(rand)
        console.log(moves[0])
        // document.getElementById("player"+i).appendChild(listempt[i-1])
        img.src = rand
}
determine()
document.getElementById("score2").innerHTML = "wins: "+bot1count
document.getElementById("score1").innerHTML = "wins: "+bot2count
}
function error(text){
    alert(text)
    if (text === "silly goose you need to put in a valid value for howfast"){
        for(i=0; i<20; i++){
            console.log("user did not enter how fast the function should run"+i)}
    }
    else{
        for(i=0; i < 20; i++){
            console.log("user did not enter how many times the function should run"+i)}
    }
}

function run(){
    retrieve()
    interval()
    play()
    console.log(howmany)
}
function interval(){
    if (count < howmany){
        console.log("ad")
        count++
        console.log(count)
        window.setTimeout(run, howfast)
}
}