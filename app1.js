// Додаємо усі змінні
const ResultElement = document.getElementById('result')
console.log (ResultElement.textContent)
const inp1js = document.getElementById('inp1')
const inp2js = document.getElementById('inp2')
const Calcjs = document.getElementById('Calc')
const plus = document.getElementById('but1')
const minus = document.getElementById('but2')
const multiplication = document.getElementById('but3')
const division = document.getElementById('but4')
let action = '+'

// Задаємо функції для кнопок
plus.onclick = function () {
    action = '+'
}
minus.onclick = function () {
    action = '-'
}
multiplication.onclick = function () {
    action = '*'
}
division.onclick = function () {
    action = '/'
}


function printResult (result) {
    if (result < 0) {
        ResultElement.style.color = 'red'
    } else {
        ResultElement.style.color = 'green'
    }
    ResultElement.textContent = result
}

function computeNumbersWithAction (inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    }

    if (actionSymbol == '-') {
        return num1-num2
    }

    if (actionSymbol == '*') {
        return num1*num2
    }

    if (actionSymbol == '/') {
        if (num2 === 0) {
            return 'Error: Division by zero'; // Добавлена проверка на деление на ноль
        }
        return num1/num2
    }
}

Calcjs.onclick = function () {
    const result = computeNumbersWithAction(inp1js, inp2js, action)
    printResult (result)
}


// Загальна функція на кнопку Calculate
// Calcjs.onclick = function () {
//     if (action === '+') {
//         const sum = Number(inp1js.value) + Number(inp2js.value)
//         ResultElement.textContent = sum
//     } else if (action === '-') {
//         const sum = Number(inp1js.value) - Number(inp2js.value)
//         ResultElement.textContent = sum
//     } else if (action === '*') {
//         const sum = Number(inp1js.value) * Number(inp2js.value)
//         ResultElement.textContent = sum
//     } else (action === '/'); {
//         const sum = Number(inp1js.value) / Number(inp2js.value)
//         ResultElement.textContent = sum
//     }
// }