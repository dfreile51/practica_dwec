/* let months = document.getElementById('months');
let monthName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', ' Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
for(let i = 1; i<=12; i++) {
    months.innerHTML += `<div class = "month"><div class = "month-number">${i}</div><div class = "month-name">${monthName[i-1]}</div></div>`;
} */

let months = document.getElementById('months');
let monthName = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', ' Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
for(let i = 1; i<=12; i++) {
    let div = document.createElement("div");
    div.classList.add('month');
    let div2 = document.createElement("div");
    div.classList.add('month-number');
    let div3 = document.createElement("div");
    div.classList.add('month-name');
   months.append(div);
   div.append(div2);
   div.append(div3);
}