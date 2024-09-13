var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };
    
price = function() {
        let total = 0;
        for (let key in services) {
            total += parseInt(services[key]); 
        }
    return total; 
}
   
minPrice = function() {
        let prices = Object.values(services).map(price => parseInt(price));
        return Math.min(...prices);
},
        
maxPrice = function() {
        let prices = Object.values(services).map(price => parseInt(price));
        return Math.max(...prices);
}

console.log(services);
console.log("Загальна вартість:" + price() + " грн");
console.log("Мінімальна вартість: " + minPrice() + " грн");
console.log("Максимальна вартість: " + maxPrice() + " грн");
services['Розбити скло'] = "200 грн";
console.log(services);
console.log("Загальна вартість:" + price() + " грн");
console.log("Мінімальна вартість: " + minPrice() + " грн");
console.log("Максимальна вартість: " + maxPrice() + " грн");
