let lis = document.querySelectorAll('li');

lis.forEach( (li) => {
    li.addEventListener('click', () => {
        li.classList.toggle('selected');
    });
} );