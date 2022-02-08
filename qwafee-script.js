//Variables
let milesPerGallon = 0;
let tankSize = 0;
let distance = 0;

//CYMI = Can You Make It (on one tank of gas)
let cYMI = (milesPerGallon * tankSize) - distance;

//button
let userSubmit = document.querySelector(".userSubmit");

//Initial states

document.getElementById("milesPerGallon").value = milesPerGallon;
document.getElementById("tankSize").value = tankSize;
document.getElementById("distance").value = distance;
let currentTank = document.getElementById("currentTank");


//output
//Good Result: document.getElementById("result").style.backgroundColor = "limegreen";
//Bad Result: document.getElementById("result").style.backgroundColor = "red";
let result = document.querySelector(".result");


function checkTank()
{
    currentTankValue = currentTank.value;
    console.log(currentTankValue);
    switch(currentTankValue)
    {
        case "quadQuad":
            currentTankValue = 1;
            break;
        case "triQuad":
            currentTankValue = 3/4;
            break;
        case "halfQuad":
            currentTankValue = 1/2;
            break;
        case "quarterQuad":
            currenTankValue = 1/4;
            break;
    }
}

function ask()
{
    milesPerGallon = document.getElementById("milesPerGallon").value
    tankSize = document.getElementById("tankSize").value;
    distance = document.getElementById("distance").value;
    cYMI = (milesPerGallon * tankSize * currentTankValue ) - distance;
    document.getElementById("result").style.color = "black";
   


    
    if (isNaN(milesPerGallon) || isNaN(tankSize) || isNaN(distance))
    {6
        result.textContent = "Enter Numbers Only";
        document.getElementById("result").style.backgroundColor = "red";
    }
    else 
    {
        if (Number(cYMI) <= (0 - 0.009))
        {
            result.textContent = "Result: You didn't make it :(";
            document.getElementById("result").style.backgroundColor = "red";   
        }

        else if (Number(cYMI) <= 1 && Number(cYMI) >= 0)
        {
            result.textContent = "Result: You JUST made it!";
            document.getElementById("result").style.backgroundColor = "black";
            document.getElementById("result").style.color = "whitesmoke";

        }
        else if (Number(cYMI) >= 1 && cYMI <= 10)
        {
            result.textContent = `You're cutting it close! You'll make it, but with only ${cYMI} miles to spare`;
            document.getElementById("result").style.backgroundColor = "orange";

        }
        else if (Number(cYMI) >= 10 && cYMI <= 50)
        {
            result.textContent = `You should make it with approximately ${cYMI} miles to spare`;
            document.getElementById("result").style.backgroundColor = "yellow";

        }
        else if (Number(cYMI) >= 50)
        {
            result.textContent = `You should have plenty of gas to spare with ${cYMI} miles left to travel`;
            document.getElementById("result").style.backgroundColor = "limegreen";

        }
        
    }
}


userSubmit.addEventListener('click', ask);
currentTank.addEventListener("change",checkTank);