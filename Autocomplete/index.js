const search = document.getElementById('search');
const matchList = document.getElementById('matchList');

const debounce = (fn,delay) => {
    try {
        let timer = null;
        return function(){
            clearTimeout(timer);
            timer = setTimeout(function(){
                fn.apply(this, arguments);
            },delay)
        } 
    } catch (error) {
        console.error(`debounce function ${fn} failed ${error}`);
    }
}

search.addEventListener('input',debounce(function(){
    searchList(search.value);
},2000))

const searchList = async (searchText) => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const state = await response.json();
    let matches = state.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return state.name.match(regex);
    })
    matches.sort((a, b) => b.current_price - a.current_price);
    if (searchText.length > 0) {
        outputHTML(matches);
    }
    if (searchText.length === 0) {
        matches = [];
        outputHTML(matches);
    }
}

const outputHTML = (matches) => {
    const html = matches.map(match => {
        return (
            `<li class="suggestion-li">
                <span class="span-li">${match.name}</span>
                <img class="img-icon span-li" src=${match.image} />
                <span>${match.current_price}</span>
            </li>`
        )
    })
    matchList.innerHTML = html;
}
