let enlaces =  {
    google: 'https://google.com',
    duck: 'https://duckduckgo.com', 
    bing: 'https://www.bing.com', 
    ecosia: 'https://www.ecosia.org/', 
    wolf: 'https://www.wolframalpha.com/'
}

let lis = document.querySelectorAll('li');

for(let i = 0; i<lis.length; i++) {
    lis[0].innerHTML = `<a href='${enlaces['google']}'>Google</a>`;
    lis[1].innerHTML = `<a href='${enlaces['duck']}'>DuckDuckGo</a>`;
    lis[2].innerHTML = `<a href='${enlaces['bing']}'>Bing</a>`;
    lis[3].innerHTML = `<a href='${enlaces['ecosia']}'>Ecosia</a>`;
    lis[4].innerHTML = `<a href='${enlaces['wolf']}'>WolframAlpha</a>`;
}