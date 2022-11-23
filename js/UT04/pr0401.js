/* let numbers = document.getElementById('numbers');
for(let i = 1; i<=30; i++) {
    numbers.innerHTML += `<span class="number">${i}</span>`;
} */

let numbers = document.getElementById('numbers');

for(let i = 1; i<=30; i++) {
    let span = document.createElement('span');
    span.textContent = i;
    span.classList.add('number');
    numbers.append(span);
}