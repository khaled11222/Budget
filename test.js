/*var i = 0;

for (;;)  {

	if (i > 10) {

		break;
	}
	console.log(i);

	i++;
}
*/

/*
 var myCar = {

 	name: "Toyota",
 	type: "car",
 	colour: "Red"

Expenses

 };
var prop;

 for (prop in myCar) {

 	console.log(myCar[prop]);

 }
*/ 

/*
var i=0;

do {

	console.log(i);

	i++;

}while (i <= 10); 
*/

/*
var i, x;

MainLoop:

for (i = 0; i < 5; i++) {

	ChildLoop:

	for (x = 10; x < 14; x++) {

		if (x === 13) {

			continue MainLoop;
		}

		console.log(i + " => " + x);

	}

}
*/


var myElement = document.getElementsByClassName('percent');

myElement[0].innerHTML = '--';


var opertion ;
var text;
var num;

var totalIncome = 0;
var totalExpenses = 0;
var count = 0; 
var totalBudget;
var deleteBtn;
var unit = [];


var incomeList = document.getElementById('income-list');
var expensesList = document.getElementById('expenses-list');
var expensesPercentage = document.getElementById('expensesPercentage');
var totalExpensesPercentage = document.getElementById('totalExpensesPercentage');
var calculateIncome = document.getElementById('num1+count');
var calculateExpenses = document.getElementById('num2+count');

function getValue(){

     opertion = document.getElementById("option").value;
     text = document.getElementById("text").value;
     num = document.getElementById("num").value;

     if ( (num >= 0) && text){
    	if(opertion == "+"){
            incomeList.innerHTML += `<div class="item" id="item${count}">
                                        <div class="item-description">${text}</div>
                                        <div class="right">
                                            <div class="item-value">${opertion} <span id="num${count}">${num}</span></div>
                                            <div class="item-delete">
                                                <button class="delete-btn" onclick="deleteBtn('item${count}',${count},'${opertion}')"><i class="fa fa-times-circle"></i></button>
                                            </div>
                                        </div>
                                    </div>`
                                    totalIncome += +num;
                                    document.getElementById('totalIncome').innerHTML = totalIncome;
            	}

            	if(opertion == "-"){
            expensesList.innerHTML += `<div class="item" id="item${count}">
                                        <div class="item-description">${text}</div>
                                        <div class="right">
                                            <div class="item-value">${opertion} <span id="num${count}">${num}</span></div>
                                            <div class="item-per1%<centage">21%</div>
                                            <div class="item-delete">
                                            <button class="delete-btn" onclick="deleteBtn('item${count}',${count},'${opertion}')"><i class="fa fa-times-circle"></i></button>
                                            </div>
                                        </div>
                                    </div>`
                                    totalExpenses += +num;     	
                                    document.getElementById('totalExpenses').innerHTML = totalExpenses;
            	}
            	document.getElementById("num").value = '';
            	document.getElementById("text").value = '';
                totalBudget = totalIncome -  totalExpenses;
            	document.getElementById('totalBudget').innerHTML = totalBudget;
            	expensesPercentage.innerHTML = (totalExpenses / totalIncome) *100+'%'

                unit.push({opertion: opertion,text: text,num: num});
                localStorage.setItem("id", JSON.stringify(unit));        
            	count++;
}}
	
 function deleteBtn(idforelement,count,opertion) {  
 	var num = document.getElementById("num"+count).innerHTML

    if (opertion == '+'){
        totalBudget -= num;
        totalIncome -=num;
        document.getElementById('totalBudget').innerHTML = totalBudget;
        document.getElementById('totalIncome').innerHTML = totalIncome;
    }else{
        totalBudget = +totalBudget + +num;
        totalExpenses -= num;
        document.getElementById('totalBudget').innerHTML = totalBudget;
        document.getElementById('totalExpenses').innerHTML = totalExpenses;
    }

 	document.getElementById(idforelement).remove()



}

if (localStorage.getItem("id") !== null) {

    unit = JSON.parse(localStorage.getItem("id"))
}


for (let i = 0; i < unit.length; i++) {
    if (unit[i].opertion == "+") {
            incomeList.innerHTML += `<div class="item" id="itemcash${i}">
                                        <div class="item-description">${unit[i].text}</div>
                                        <div class="right">
                                            <div class="item-value">${unit[i].opertion} <span id="num${count}">${unit[i].num}</span></div>
                                            <div class="item-delete">
                                                <button class="delete-btn" onclick="deleteBtn('itemcash${i}',${count},'${opertion}')"><i class="fa fa-times-circle"></i></button>
                                            </div>
                                        </div>
                                    </div>`
}else{
            expensesList.innerHTML += `<div class="item" id="itemcash${i}">
                                        <div class="item-description">${unit[i].text}</div>
                                        <div class="right">
                                            <div class="item-value">${unit[i].opertion} <span id="num${count}">${unit[i].num}</span></div>
                                            <div class="item-per1%<centage">21%</div>
                                            <div class="item-delete">
                                            <button class="delete-btn" onclick="deleteBtn('itemcash${i}',${count},'${opertion}')"><i class="fa fa-times-circle"></i></button>
                                            </div>
                                        </div>
                                    </div>`


}}

































