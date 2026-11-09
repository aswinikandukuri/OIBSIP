
function convertTemperature() {

    let temperature = parseFloat(document.getElementById("temperature").value);
    let fromUnit = document.getElementById("fromUnit").value;
    let toUnit = document.getElementById("toUnit").value;
    let result;

    if (document.getElementById("temperature").value === "") {
        document.getElementById("result").innerHTML = "Please enter a temperature";
        return;
    }

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (temperature * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = temperature + 273.15;
        } else {
            result = temperature;
        }
    }

    else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (temperature - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            result = (temperature - 32) * 5/9 + 273.15;
        } else {
            result = temperature;
        }
    }

    else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = temperature - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = (temperature - 273.15) * 9/5 + 32;
        } else {
            result = temperature;
        }
    }

    if (fromUnit === "kelvin" && temperature < 0) {
        document.getElementById("result").innerHTML = "Invalid Kelvin temperature";
        return;
    }

    if (fromUnit === "celsius" && temperature < -273.15) {
        document.getElementById("result").innerHTML = "Temperature below absolute zero";
        return;
    }

    if (fromUnit === "fahrenheit" && temperature < -459.67) {
        document.getElementById("result").innerHTML = "Temperature below absolute zero";
        return;
    }

    document.getElementById("result").innerHTML =
        result.toFixed(2) + " " + getUnitSymbol(toUnit);
}

function getUnitSymbol(unit) {
    if (unit === "celsius") {
        return "°C";
    } else if (unit === "fahrenheit") {
        return "°F";
    } else {
        return "K";
    }
}

function clearFields() {
    document.getElementById("temperature").value = "";
    document.getElementById("fromUnit").value = "celsius";
    document.getElementById("toUnit").value = "fahrenheit";
    document.getElementById("result").innerHTML = "Your result will appear here";
}
