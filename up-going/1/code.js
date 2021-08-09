const tax = 0.08;
const balance = 500;
const phoneCost = 99.99;
const accessoryCost = 9.99;
let totalCost = 0;

for (totalCost = phoneCost; totalCost <= balance; totalCost += phoneCost) {
    if (totalCost <= balance) {
        totalCost += accessoryCost;
    }
}

totalCost = totalCost + (totalCost * tax);

console.log("Стоимость покупки: $" + totalCost)

if (totalCost > balance) {
    console.log("Недостаточно средств");
}
