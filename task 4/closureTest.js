

const add = (a,b) =>{

    if (b == undefined){
        return (b)=>{
            return a+b;
        }
    }
    
    return a+b;

}

console.log(add(2,5));
console.log(add(2)(5));