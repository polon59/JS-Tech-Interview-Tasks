color();

function color() {
    const rowsCollection = document.getElementsByTagName("tr");
    const rowsArray = Array.from(rowsCollection);

    let cells;

    rowsArray.forEach((row, index) => {
        cells = Array.from(row.getElementsByTagName("td"));
        cells[index].style.backgroundColor = "red";
        console.log(cells);
    })

    const incrementBy5 = add(5);

    console.log(incrementBy5(5));
    console.log(incrementBy5(7));
    console.log(incrementBy5(8));


    console.log(add(2)(5));
    console.log(add(2,5));

}

function add(number1, number2) {

    if (number2 == undefined) {
        return function(x){
            return x + number1;
        }
    }
    return number1+number2;
    
}