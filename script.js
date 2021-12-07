const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) =>{
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }
    const celToKel = (cel) =>{
        let kelvin = Math.round(cel + 273.15);
        return kelvin;
}


    const FahtoCel = (fehr) =>{
        let celsius = Math.round((fehr - 32) * 5/9);
        return celsius;
    }
    const FahToKel = (fehr) =>{
        let temp = FahtoCel(fehr);
        let kelvin = celToKel(temp);
        return kelvin;
    }

    const KeltoCel = (kel) =>{
        let kelvin = Math.round(kel - 273.15);
        return kelvin;
    }

    const KelToFah = (kel) =>{
        let temp = KeltoCel(kel);
        let kelvin = celToFah(temp);
        return kelvin;
    }
    let result1;
    let result2;
    
    if(valueTemp == 'cel'){
        result1 = celToFah(numberTemp);
        result2 = celToKel(numberTemp);
        document.getElementById('resultContainer1').innerHTML = `${result1} Fahrenheit`;
        document.getElementById('resultContainer2').innerHTML = `${result2} Kelvin`;
    }
    else if (valueTemp == 'fah'){
        result1 = FahtoCel(numberTemp);
        result2 = FahToKel(numberTemp);
        document.getElementById('resultContainer1').innerHTML = `${result1} Celsius`;
        document.getElementById('resultContainer2').innerHTML = `${result2} Kelvin`;
    }
    else{
        result1 = KeltoCel(numberTemp);
        result2 = KelToFah(numberTemp);
        document.getElementById('resultContainer1').innerHTML = `${result1} Celsius`;
        document.getElementById('resultContainer2').innerHTML = `${result2} Fahrenheit`;
    }


}