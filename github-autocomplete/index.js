(function(){

const search    = document.getElementById('search');
const matchList = document.getElementById('matchList');
const sortingId = document.getElementById('sorting');

let matches = [];

const debounce = (fn, delay) => {
    try {
        let timer = null;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                fn.apply(this, arguments);
            }, delay)
        }
    } catch (error) {
        console.error(`debounce function ${fn} failed ${error}`);
    }
}

search.addEventListener('input', debounce(function () {
    searchList(search.value);
}, 400))

sortingId.addEventListener('click',function(e){
    if(e.target.value==="1"){
        let sortedArrAscending = matches;
        sortedArrAscending.sort((a,b)=> a.id - b.id);
        outputHTML(sortedArrAscending);
    }
    if(e.target.value==="2"){
        let sortedArrDescending = matches;
        sortedArrDescending.sort((a,b)=> b.id - a.id);
        outputHTML(sortedArrDescending);
    }
})

async function initialRender(){
    const response  = await fetch('https://5f93c74d9ecf720016bfbfcd.mockapi.io/supreet');
    const state     = await response.json();
    matches = state;
    outputHTML(matches);
}

window.onload = function(e){ 
    initialRender();
}

const searchList = async (searchText) => {
    filtered = matches.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return state.name.match(regex);
    })
    matches.sort((a, b) => b.current_price - a.current_price);
    if (searchText.length > 0) {
        outputHTML(filtered);
    }
    if (searchText.length === 0) {
        filtered = [];
        outputHTML(matches);
    }
}

const outputHTML = (matches) => {
    const html = matches.map(repo => {
        return (
            `<li  class="suggestion-li">
                <span class="span-li">${repo.id}</span>
                <span class="span-li">${repo.name}</span>
                <img class="img-icon span-li" src=${repo.owner.avatar_url} />
            </li>`
        )
    })
    matchList.innerHTML = html;
}
})()
