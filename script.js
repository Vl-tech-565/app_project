let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let outcome = prompt("Введите обязательную статью расходов в этом месяце");
let value = prompt("Во сколько это обойдется");
let outcome_1 = prompt("Введите обязательную статью расходов в этом месяце");
let value_1 = prompt("Во сколько это обойдется");
let expenses = {
    outcome: value
};
appData.expenses.outcome = value;
appData.expenses.outcome_1 = value_1;

alert(appData.budget / 30);