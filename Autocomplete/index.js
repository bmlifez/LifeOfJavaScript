const search = document.getElementById('search');
const matchList = document.getElementById('matchList');
const productView = document.getElementById('productView');

let matches = [];
let productComparison = [];

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
}, 2000))

const searchList = async (searchText) => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    const state = await response.json();
    matches = state.filter(state => {
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
    const html = matches.map(coin => {
        return (
            `<li  class="suggestion-li" onClick=updateCart("${coin.id}","add")>
                <span class="span-li">${coin.name}</span>
                <img class="img-icon span-li" src=${coin.image} />
                <span>${coin.current_price}</span>
            </li>`
        )
    })
    matchList.innerHTML = html;
}

const uniqueArray = (inp) => {
    inp = [...new Set(inp)];
}

const updateCart = (crypto, type) => {
    
    if (type === "add") {
        for (let i = 0; i < matches.length; i++) {
            if (matches[i].id === crypto) {
                productComparison.push(matches[i]);
            }
        }
    }

    if (type === "delete") {
        let index = 0;
        for (let i = 0; i < productComparison.length; i++) {
            if (productComparison[i].id === crypto) {
                index = i;
            }
        }
        productComparison.splice(index, 1);
        productComparison;
    }
    let html = productComparison.map((ele) => {
        return (
            `<div class="flex-container">
                <span class="span-li">${ele.name}</span>
                <img class="img-icon span-li" src=${ele.image} />
                <div>
                    <span>${ele.current_price}</span>
                </div>
                <button onClick=updateCart("${ele.id}","delete")>Remove</button>
            </div>`
        )
    })

    productView.innerHTML = html;
    matches = [];
    outputHTML(matches);
}
