const arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
const regex = /@gmail\.com|@yahoo\.com/g;

function findRightEmails(arr) {
    return arr.filter((value) => regex.test(value));
}
  
console.log(findRightEmails(arr)); 



