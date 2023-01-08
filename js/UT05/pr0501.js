let lis = document.querySelectorAll('li');

lis.forEach( (li) => {
    li.addEventListener('click', handleClick);
    li.onmousedown = function() { return false; }
} );

function handleClick(e) {
    if(e.ctrlKey) {
        e.target.classList.toggle('selected');
    } else {
        if(e.target.classList.contains('selected')) {
            lis.forEach( (li) => {
                li.classList.remove('selected');
            });
        } else {
            lis.forEach( (li) => {
                li.classList.remove('selected');
            });
            e.target.classList.add('selected');
        }
        
    }
}