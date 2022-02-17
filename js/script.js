

// function to find value 
function value(id) {

    const value = document.getElementById(id).value
    return value
}

// function for inner text 
function innerText(id,msg) {
    const innerText = document.getElementById(id).innerText
    document.getElementById(id).innerText = msg 
    return innerText
}


const error = document.getElementById('error')



document.getElementById('calculate-btn').addEventListener('click', function remain() {
     // set total expenses
     const foodCost = parseFloat(value('food-cost'));
    const rentCost = parseFloat(value('rent-cost'));
    const clotheCost = parseFloat(value('cloth-cost'));
    const income = parseFloat(value('income-input'))
    const saveInput = parseFloat(value('save-input'))

    // add total cost 
    const totalCost = foodCost+rentCost+clotheCost

    const remain = income - totalCost





    if (foodCost >=0 && rentCost>=0 && clotheCost >=0 && income>=0) {
           
            
    
        if(income>=totalCost){
            // change inner text 
            
            document.getElementById('total-expenses').innerText = totalCost
            document.getElementById('total-remain').innerText = remain
            
            // // balance visibility visible
            // document.getElementById('none').style.display = "block";

        }
        else{
            document.getElementById('alert').style.display = 'block'
            document.getElementById('message').innerText = 'total cost is greater then  income'
        }

    
    } 
    else if(foodCost <0 || rentCost<0 || clotheCost <0 || income<0){
        document.getElementById('alert').style.display = 'block'
        innerText('message','please input  positive number') 
        
    }
    
    else{
        document.getElementById('alert').style.display = 'block'
        innerText('message','Please input a valid number ') 
    }
})


document.getElementById('save').addEventListener('click',function save() {
    // set total expenses
    const foodCost = parseFloat(value('food-cost'));
    const rentCost = parseFloat(value('rent-cost'));
    const clotheCost = parseFloat(value('cloth-cost'));
    const income = parseFloat(value('income-input'))
    const saveInput = parseFloat(value('save-input'))

    // add total cost 
    const totalCost = foodCost+rentCost+clotheCost

    const remain = income - totalCost


    // calculation for parcent remain
    const saveAmount = income * saveInput/100

    if (saveAmount < remain && saveAmount>=0) {
    
    document.getElementById('saving-amount').innerText = saveAmount
    document.getElementById('remaining-balance').innerText = remain-saveAmount
    }
    else if(saveInput<0){
        document.getElementById('alert').style.display = 'block'
        innerText('message','enter a positive number  ')
        
    }
    else{
        document.getElementById('alert').style.display = 'block'
        innerText('message','you  have not enough money to save  ')
    }
})
document.getElementById('got-it').addEventListener('click',function () {
    document.getElementById('alert').style.display = 'none'
    
})
