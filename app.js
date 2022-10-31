/*
    Create random object to create the brief
*/
const mOrAm = ["I'm", "I am"][Math.floor(Math.random() * 2)];

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
        "pastelle"
    ];
    // get a random color in the list
    var randomcolor = colorList[Math.floor(Math.random() * colorList.length)];
    // adding some change to the quote to look different
    var question = ["I think", `${mOrAm} thinking`][Math.floor(Math.random() * 2)]
    // 1/2 chance to have a submited color
    var randomBool = Math.random() > 0.5 ? true : false;
    // return the random color for the brief
    return randomBool ? `${question} that a ${randomcolor} logo will fit perfect with what i want` : `I don't think about a specific color. I let you decide`;
}

const getRandomName = () => {
    let nameList = [
        "James",
        "Mary",
        "Robert",
        "Patricia",
        "John",
        "Jennifer",
        "Michael",
        "Linda",
        "David",
        "Elizabeth",
        "William",
        "Barbara",
        "Richard",
        "Susan",
        "Joseph",
        "Jessica",
        "Thomas",
        "Sarah",
        "Charles",
        "Karen",
        "Christopher",
        "Lisa",
        "Daniel",
        "Nancy",
        "Matthew",
        "Betty",
        "Anthony",
        "Margaret",
        "Mark",
        "Sandra",
        "Donald",
        "Ashley",
        "Steven",
        "Kimberly",
        "Paul",
        "Emily",
        "Andrew",
        "Donna",
        "Joshua",
        "Michelle",
        "Kenneth",
        "Carol",
        "Kevin",
        "Amanda",
        "Brian",
        "Dorothy",
        "George",
        "Melissa",
        "Thimothy",
        "Deborah",
    ];
    return nameList[Math.floor(Math.random() * nameList.length)];
}
/* 
    Create the brienf with all random objects
*/

const createBrief = () => {
    // import all function for random brief
    let work = getRandomWork(),
        shop = getRandomShop(),
        color = getRandomColor(),
        name = getRandomName();

    // create some change to look different for each brief
    let intro = ["Hi,", "Hello,", "Hey,", "Hi!", "Hey!"][Math.floor(Math.random() * 5)];
    let presentation = [`I'm ${name}`, `My name is ${name}`, `I am ${name}`][Math.floor(Math.random() * 3)];
    let need = ["I need", `${mOrAm} looking for`, "I've been looking for", `For a while now, ${mOrAm} looking for`][Math.floor(Math.random() * 4)];

    // create the brief and send it to the html
    // the <br /> tag is for the line break the usual \n doesn't work in the innerHTML function
    return `${intro}<br />
    ${presentation}. ${need} a logo for my ${shop}. I want a ${work} logo.<br />
    ${color}.`;
}



const submitBrief = () => {
    document.onkeyup = function (e) {
        /* keyboard shortcut to submit brief
                ctrl             spacebar */
        if (e.keyCode == 13 || e.keyCode == 32) submitBrief();
    }
    // select the brief element in the html
    let brief = document.querySelector("#brief");
    // create the brief and send it to the html
    brief.innerHTML = createBrief();
}