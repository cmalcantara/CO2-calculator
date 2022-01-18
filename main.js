
let display = document.getElementById('display');
display.innerHTML = 0.0;
let buttons = Array.from(document.getElementsByClassName('button'));
/*
        "title": "High Meat",
        "description": "When you try to eat meat after every meal / red meat",
        "category": "food",
        "kg_CO2": 64.8,
        "state": 0
*/
let co2_src = [
    {
        "title": "High Meat",
        "description": "When you try to eat meat after every meal / red meat",
        "category": "food",
        "kg_CO2": 64.8,
        "state": 0
    },/*
    {
        "name": "Medium Meat",
        "id": "medium_meat",
        "kg_CO2": 50.7,
        "state": 0
    },
    {
        "name": "Pescetarian",
        "id": "pescetarian",
        "kg_CO2": 35.1,
        "state": 0
    },
    {
        "name": "Vegetarian",
        "id": "vegetarian",
        "kg_CO2": 34.2,
        "state": 0
    },
    {
        "name": "Vegan",
        "id": "vegan",
        "kg_CO2": 26.1,
        "state": 0
    },
    {
        "name": "Car",
        "id": "car",
        "kg_CO2": 150.8,
        "state": 0
    },
    {
        "name": "Train",
        "id": "train",
        "kg_CO2": 36.6,
        "state": 0
    },
    {
        "name": "Bus",
        "id": "bus",
        "kg_CO2": 96.2,
        "state": 0
    },
    {
        "name": "Motorbike",
        "id": "motorbike",
        "kg_CO2": 134.3,
        "state": 0
    },
    {
        "name": "Vegan",
        "id": "vegan",
        "kg_CO2": 26.1,
        "state": 0
    }*/
];

co2_src.forEach(function(arrayItem) {
    document.addEventListener('DOMContentLoaded', function() {
        var btn = document.createElement('input');
        btn.type = 'button';
        btn.href = '#'
        btn.value = arrayItem.title;
        btn.dataset.description = arrayItem.description;
        btn.classList.add(arrayItem.category);
        //var innerButton = document.createElement('div');
        //button.appendChild(innerButton);
    
        btn.onclick = function() {
            let display = document.getElementById('display');
            updateVal(arrayItem.kg_CO2, arrayItem.state);
            btn.classList.toggle("test");
            if (arrayItem.state == 0){
                arrayItem.state = 1;
            }else {
                arrayItem.state = 0;
            } 
        // …
        };
    
        var buttons= document.getElementById('buttons');
        buttons.appendChild(btn);
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