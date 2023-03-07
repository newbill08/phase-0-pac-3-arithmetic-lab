function add(a,b){
let output = 0;

output = a + b
return output
}

console.log(add(81,1))

function subtract(a,b){
    let output = 0;
    
    output = a - b
    return output
    }
console.log(subtract(81,1))


function multiply(a,b){
        let output = 0;
        
        output = a * b
        return output
}
        
console.log(multiply(81,1))    

function divide(a,b){
    let output = 0;
            
    output = a / b
    return output
}
            
 console.log(divide(81,9))        

function increment(n){
    let output = n;
    
    output++;
    return output
}
    
console.log(increment(2))

function decrement(n){
    let output = n;
    
    output--;
    return output
}
    
console.log(decrement(2))

function makeInt(string){
    
    let output = parseInt(string, 10); ;
    
    return output
}
    
console.log(makeInt("75.215"))

function preserveDecimal(string){

return parseFloat(string)

}

console.log(preserveDecimal("144"))