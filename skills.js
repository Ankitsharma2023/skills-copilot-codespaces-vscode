function calculatenumber() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var result = parseInt(number1) + parseInt(number2);
    document.getElementById("result").value = result;
}