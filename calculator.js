document.getElementById("calcBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value)
    const num2 = parseFloat(document.getElementById("num2").value)
    const operator = document.getElementById("operator").value
    const resultDiv = document.getElementById("result")
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Result: Iltimos 2ta raqam kiriting"
        return
    }
    let result
    switch (operator) {
        case "add":
            result = num1 + num2
            break;
        case "minus":
            result = num1 - num2
            break;
        case "multiply":
            result = num1 * num2
            break;
        case "divide":
            if (num2 === 0) {
                resultDiv.textContent = "Result: 0 ga bo'lib bo'lmaydi"
                return
            }
            result = num1 / num2;
            break
        default:
            resultDiv.textContent = "Result: Operatorni tanlang"
            return
    }
    resultDiv.textContent = "Result: " + result
})
document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("num1").value = ""
    document.getElementById("num2").value = ""
    document.getElementById("operator").value = ""
    document.getElementById("result").textContent = "Result:"
})
