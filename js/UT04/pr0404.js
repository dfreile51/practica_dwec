let div = document.getElementById('board');
let table = document.createElement('table');
div.append(table);

let letras = "A B C D E F G H".split(' ');

for(let i=8; i>=0; i--) {
    let tr = document.createElement("tr");
    for(let j=0; j<=8; j++) {
        let td = document.createElement("td");
        if(j == 0) {
            if(i == 0) {
                td.textContent = "";
            } else {
                td.classList.add(letras[j]+""+i);
                td.textContent = i;
            }
        } else if(i == 0 && j > 0) {
            td.textContent = letras[j-1];
        } else {
            if((i+j)%2 == 0){
                td.classList.add("blanca");
            }else{
                td.classList.add("negra");
            } 
        }
        tr.append(td);
    }
    if(i != 0){
        table.append(tr);
    }else{
        table.prepend(tr);
    }
}