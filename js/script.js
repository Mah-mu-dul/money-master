

// function to find value 
function value(id) {

    const value = document.getElementById(id).value
    return value
}

// function for inner text 
function innerText(id) {
    const innerText = document.getElementById(id).innerText
    return innerText
}










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
            console.log('total cost is greater then  income');
        }

    }   
    else{
        console.log('Please input a valid number ');
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
    const percentRemain = income*remain/100
    if (saveInput < percentRemain) {
    const saveAmount = income * saveInput/100
    document.getElementById('saving-amount').innerText = saveAmount
    }
    else{
        console.log('save percentage is bigger then remain amount');
        console.log('you can save only ', remain,' Taka');

    }
})

