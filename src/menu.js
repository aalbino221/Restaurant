import pizza from './imgs/pizza.jpg';
import risotto from './imgs/risotto.jpg';
import lasagna from './imgs/lasagna.jpg';
import pep from './imgs/pep.jpg';
import gnochi from './imgs/gnochi.jpg';

const centerMenu = function () {

    function card (title, content, imgRoute ) {
        let box = document.querySelector(".center-box");

        let card = document.createElement("div");
        card.classList.add("card");
    
        let cardText = document.createElement("div");
        cardText.classList.add("card-text");
        
        let cardTitle = document.createElement("p");
        cardTitle.classList.add("card-title");
        cardTitle.textContent= title;
    
        let cardCont = document.createElement("p");
        cardCont.classList.add("card-cont");
        cardCont.textContent= content;
    
        let cardImg = document.createElement("div");
        cardImg.classList.add("card-img");
        let img = new Image();
        img.src  = imgRoute;
        cardImg.append(img);

        cardText.append(cardTitle);
        cardText.append(cardCont);
        card.append(cardText);
        card.append(cardImg);
        box.append(card);
    
    }
    
    const center = document.querySelector(".center");
    let contMenu = document.createElement("div");
    contMenu.classList.add("center-content-menu");
    center.append(contMenu);

    let box = document.createElement("div");
    box.classList.add("center-box");
    contMenu.append(box)

    card("Italian Pizza","San Marzano tomato sauce, fresh mozzarella, grated parmesan and pepperoni from Il Mondo Vecchio", pizza);
    card("Risotto","San Marzano tomato sauce, fresh mozzarella, grated parmesan and pepperoni from Il Mondo Vecchio", risotto);
    card("Lasagna","San Marzano tomato sauce, fresh mozzarella, grated parmesan and pepperoni from Il Mondo Vecchio", lasagna);
    card("Pepperoni Pizza","San Marzano tomato sauce, fresh mozzarella, grated parmesan and pepperoni from Walmart", pep);
    card("Gnocchi","San Marzano tomato sauce, fresh mozzarella, grated parmesan and onions", gnochi);

};

export {centerMenu};