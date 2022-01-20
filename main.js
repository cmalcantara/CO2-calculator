
var display = document.getElementById('display');
display.innerHTML = 0.00;
var buttons = Array.from(document.getElementsByClassName('button'));
/*
        "title": "High Meat",
        "description": "When you try to eat meat after every meal / red meat",
        "category": "food",
        "kg_CO2": 64.8,
        "state": 0
*/
var co2_src = [
    {
        "title": "High Meat",
        "description": "When you eat meat in every meal",
        "category": "food",
        "kg_CO2": 64.8,
        "state": 0
    },
    {
        "title": "Medium Meat",
        "description": "When you eat meat in every meal",
        "category": "food",
        "kg_CO2": 50.7,
        "state": 0
    },
    {
        "title": "Pescetarian",
        "description": "When you eat meat in every meal",
        "category": "food",
        "kg_CO2": 35.1,
        "state": 0
    },
    {
        "title": "Vegetarian",
        "description": "When you eat meat in every meal",
        "category": "food",
        "kg_CO2": 34.2,
        "state": 0
    },
    {
        "title": "Vegan",
        "description": "When you eat meat in every meal",
        "category": "food",
        "kg_CO2": 26.1,
        "state": 0
    },
    {
        "title": "Car",
        "description": "When you eat meat in every meal",
        "category": "transport",
        "kg_CO2": 150.8,
        "state": 0
    },
    {
        "title": "Train",
        "description": "When you eat meat in every meal",
        "category": "transport",
        "kg_CO2": 36.6,
        "state": 0
    },
    {
        "title": "Bus",
        "description": "When you eat meat in every meal",
        "category": "transport",
        "kg_CO2": 96.2,
        "state": 0
    },
    {
        "title": "Motorbike",
        "description": "When you eat meat in every meal",
        "category": "transport",
        "kg_CO2": 134.3,
        "state": 0
    },
    {
        "title": "Heating",
        "description": "When you eat meat in every meal",
        "category": "lifestyle",
        "kg_CO2": 87.3,
        "state": 0
    },
    {
        "title": "Water Heating",
        "description": "When you eat meat in every meal",
        "category": "lifestyle",
        "kg_CO2": 12.9,
        "state": 0
    },
    {
        "title": "Refrigerator",
        "description": "When you eat meat in every meal",
        "category": "lifestyle",
        "kg_CO2": 46.8,
        "state": 0
    },
    {
        "title": "Oven",
        "description": "When you eat meat in every meal",
        "category": "lifestyle",
        "kg_CO2": 12.5,
        "state": 0
    },
    {
        "title": "LED Lights",
        "description": "When you eat meat in every meal",
        "category": "lifestyle",
        "kg_CO2": 3.7,
        "state": 0
    },
    {
        "title": "TV",
        "description": "When you eat meat in every meal",
        "category": "lifestyle",
        "kg_CO2": 1.6,
        "state": 0
    },
];

var foodState = 0;
var transportState = 0;

//adding a constraint to have only 1 food option             
co2_src.forEach(function(arrayItem) {
    document.addEventListener('DOMContentLoaded', function() {
        var btn = document.createElement('div');
        btn.classList.add('btn', arrayItem.category);
        btn.dataset.description = arrayItem.description;

        btn.onclick = function(event) {
            var display = document.getElementById('display');
            updateVal(arrayItem.kg_CO2, arrayItem.state);
            btn.classList.toggle("toggled");
            if (arrayItem.state == 0){
                arrayItem.state = 1;
            }else {
                arrayItem.state = 0;
            }
             
             
            //adding a constraint to have only 1 food option             
            //when a food is pressed & state = 0, it turns state to 1
            //when a food is pressed & state = 1, it searches for toggled

            //function test(elem){
            //    var elemTest = elem;
            //}

            //elem = event.target;
            //if (elem.classList.contains("food")){
            //   alert("this runs");
            //   tog = document.getElementsByClassName("toggled");
            //   tog.classList.toggle("toggled");
            //}
        // …
        };
        //appending element based on category
        var buttons;
        if (arrayItem.category == "food"){
            buttons = document.getElementById('foods');
        }else if (arrayItem.category == "transport"){
            buttons = document.getElementById('transports');
        }else {
            buttons = document.getElementById('lifestyles');
        }
        buttons.appendChild(btn);

        //appending inner & child title element
        var innerBtn = document.createElement('div');
        innerBtn.classList.add('inner');
        btn.appendChild(innerBtn);
        var title = document.createElement('div');
        title.innerHTML= arrayItem.title;
        title.classList.add('title');
        innerBtn.appendChild(title);
    
    }, false);
});

function updateVal(kg_CO2, state) {
    var val = display.innerHTML;
    if (state == 0){
        val = parseFloat(val) + kg_CO2;
        val = val.toFixed(2);
    }
    else{
        val = parseFloat(val) - kg_CO2;
        val = val.toFixed(2);
    }
    display.innerHTML = val;
}