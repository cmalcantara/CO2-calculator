var co2_src = [
    {
        "title": "High Meat",
        "description": "Eating meat in every meal",
        "category": "food",
        "kg_CO2": 194.4
    },
    {
        "title": "Medium Meat",
        "description": "Eating meat a few times a week or reduced red meat consumption",
        "category": "food",
        "kg_CO2": 152.2
    },
    {
        "title": "Pescetarian",
        "description": "No meat consumption except for fish",
        "category": "food",
        "kg_CO2": 105.3
    },
    {
        "title": "Vegetarian",
        "description": "No meat consumption",
        "category": "food",
        "kg_CO2": 102.6
    },
    {
        "title": "Vegan",
        "description": "Vegetarian without consuming animal products",
        "category": "food",
        "kg_CO2": 78.3
    },
    {
        "title": "Fossil Fuel Car",
        "description": "Based on the average distance traveled by a German car owner",
        "category": "transport",
        "kg_CO2": 150.8
    },
    {
        "title": "Electric Car",
        "description": "Based on the average distance traveled by a German car owner",
        "category": "transport",
        "kg_CO2": 49.5
    },
    {
        "title": "Hybrid Car",
        "description": "Based on the average distance traveled by a German car owner",
        "category": "transport",
        "kg_CO2": 109.9
    },
    {
        "title": "Car Sharing",
        "description": "Based on the average distance traveled by a German car owner",
        "category": "transport",
        "kg_CO2": 89.7
    },
    {
        "title": "Train",
        "description": "Based on the average distanced traveled by a German commuter",
        "category": "transport",
        "kg_CO2": 19.2
    },
    {
        "title": "Bus",
        "description": "Based on the average distanced traveled by a German commuter",
        "category": "transport",
        "kg_CO2": 47.2
    },
    {
        "title": "Motorbike",
        "description": "Based on the average distance traveled by a German motorbike owner",
        "category": "transport",
        "kg_CO2": 65.9
    },
    {
        "title": "Heating",
        "description": "Based on average heating of a German household",
        "category": "lifestyle",
        "kg_CO2": 91.8
    },
    {
        "title": "Water Heating",
        "description": "Based on average water heating of German household",
        "category": "lifestyle",
        "kg_CO2": 13.6
    },
    {
        "title": "Refrigerator",
        "description": "Based on 24 hour daily usage",
        "category": "lifestyle",
        "kg_CO2": 28.1
    },
    {
        "title": "Oven",
        "description": "Based on 30 minute daily usage",
        "category": "lifestyle",
        "kg_CO2": 12.5
    },
    {
        "title": "Electric Stove Top",
        "description": "Based on 1 hour daily usage",
        "category": "lifestyle",
        "kg_CO2": 23.4
    },
    {
        "title": "LED Lights",
        "description": "Based on mulitple bulbs and 6 hours of daily usage",
        "category": "lifestyle",
        "kg_CO2": 3.7
    },
    {
        "title": "TV",
        "description": "Based on 1.5 hours of daily usage",
        "category": "lifestyle",
        "kg_CO2": 0.9
    },
    {
        "title": "Washing Machine",
        "description": "Based on 2 hours usage every week",
        "category": "lifestyle",
        "kg_CO2": 0.6
    },
];

var display = document.getElementById('display');
display.innerHTML = 0.00;
var buttons = Array.from(document.getElementsByClassName('button'));

var lastToggled = 0;
//Generate buttons based on inline json
co2_src.forEach(function(arrayItem) {
    document.addEventListener('DOMContentLoaded', function() {
        var btn = document.createElement('div');
        btn.classList.add('btn', arrayItem.category);
        btn.dataset.description = arrayItem.description;
        btn.dataset.kg_CO2 = arrayItem.kg_CO2;

        btn.onclick = function() {
            var display = document.getElementById('display');
            if (lastToggled != btn){
                limitCategory(arrayItem.category);
            }
            btn.classList.toggle("toggled");
            updateDisplay();
            lastToggled = btn;
             
        };

        //Append buttons based on category
        var buttons;
        if (arrayItem.category == "food"){
            buttons = document.getElementById('foods');
        }else if (arrayItem.category == "transport"){
            buttons = document.getElementById('transports');
        }else {
            buttons = document.getElementById('lifestyles');
        }
        buttons.appendChild(btn);

        //Append inner & child title element
        var innerBtn = document.createElement('div');
        innerBtn.classList.add('inner');
        btn.appendChild(innerBtn);
        var title = document.createElement('div');
        title.innerHTML= arrayItem.title;
        title.classList.add('title');
        innerBtn.appendChild(title);
    
    }, false);
});

//limits a category to only once choice
function limitCategory(category){
    var foods;
    if (category == 'food'){
        foods = document.getElementsByClassName('food toggled');
        Array.prototype.forEach.call(foods, function(foo) {
            foo.classList.toggle('toggled');
        });
    } else if (category == 'transport'){
        foods = document.getElementsByClassName('transport toggled');
        Array.prototype.forEach.call(foods, function(foo) {
            foo.classList.toggle('toggled');
        });
    }
}

//sums the value of toggled
function updateDisplay(){
    var val = display.innerHTML;
    val = 0;
    var toggl = document.getElementsByClassName('toggled');
    
    Array.prototype.forEach.call(toggl, function(tog) {
        val = parseFloat(val) + parseFloat(tog.dataset.kg_CO2);
        val = val.toFixed(2);
    });
    display.innerHTML = val;
}