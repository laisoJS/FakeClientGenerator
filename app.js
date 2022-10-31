const getRandomWork = () => {
    let workList = [
        "pictorial marks",
        "mascots logos",
        "abstract mark",
        "combination mark",
        "wordmark",
        "letter mark"
    ];
    return workList[Math.floor(Math.random() * workList.length)];
}

const getRandomShop = () => {
    let ShopOrStore = ["shop", "store"][Math.floor(Math.random() * 2)];
    let shopList = [
        `art gallery`,
        `bakery ${ShopOrStore}`,
        `bar`,
        `beauty salon`,
        `bookstore`,
        `butcher`,
        `car repair ${ShopOrStore}`,
        `car ${ShopOrStore}`,
        `chemist ${ShopOrStore}`,
        `clothes ${ShopOrStore}`,
        `computer ${ShopOrStore}`,
        `confectionery ${ShopOrStore}`,
        `convenience ${ShopOrStore}`,
        `department ${ShopOrStore}`,
        `do-it-yourself ${ShopOrStore}`,
        `dry cleaner ${ShopOrStore}`,
        `electronics ${ShopOrStore}`,
        `fashion ${ShopOrStore}`,
        `fishmonger ${ShopOrStore}`,
        `florist ${ShopOrStore}`,
        `furniture ${ShopOrStore}`,
        `garden centre ${ShopOrStore}`,
        `gift ${ShopOrStore}`,
        `greengrocery ${ShopOrStore}`,
        `hairdresser ${ShopOrStore}`,
        `hardware ${ShopOrStore}`,
        `jewelry ${ShopOrStore}`,
        `kiosk ${ShopOrStore}`,
        `laundry ${ShopOrStore}`,
        `marketplace`,
        `mobile phone ${ShopOrStore}`,
        `motorcycle ${ShopOrStore}`,
        `newsagent ${ShopOrStore}`,
        `optician ${ShopOrStore}`,
        `pet ${ShopOrStore}`,
        `photo ${ShopOrStore}`,
        `shoe ${ShopOrStore}`,
        `sports ${ShopOrStore}`,
        `stationery ${ShopOrStore}`,
        `supermarket`,
        `tobacco ${ShopOrStore}`,
        `toys ${ShopOrStore}`,
        `travel agency`,
        `variety ${ShopOrStore}`,
        `video ${ShopOrStore}`,
        `wine ${ShopOrStore}`,
    ]
    return shopList[Math.floor(Math.random() * shopList.length)];
}

const getRandomColor = () => {
    let colorList = [
        "red",
        "crimson",
        "orange",
        "gilt",
        "green",
        "grassy",
        "blue",
        "cobalt",
        "purple",
        "lavender",
        "black & white",
        "pastelle",
        "'young'"
    ];
    var randomcolor = colorList[Math.floor(Math.random() * colorList.length)];
    var randomBool = Math.random() > 0.5 ? true : false;
    return randomBool ? `I think that a ${randomcolor} logo will fit perfect with what i want` : `I don't think about a specific color. I let you decide`;
}

const createBrief = () => {
    let work = getRandomWork();
    let shop = getRandomShop();
    let color = getRandomColor();

    return `I need a logo for my ${shop}. I want a ${work} logo.\n${color}.`;
}



const submitBrief = () => {
    document.onkeyup = function (e) {
        if (e.keyCode == 13 || e.keyCode == 32) {
            submitBrief();
        }
    }
    let brief = document.querySelector("#brief");
    brief.innerHTML = createBrief();
}

console.log(createBrief());