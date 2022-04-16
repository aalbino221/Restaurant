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
        cardImg.innerHTML = imgRoute;
    
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

    card("Italian Pizza","San Marzano tomato sauce, fresh mozzarella, grated parmesan and pepperoni from Il Mondo Vecchio",' <img src="../src/imgs/pizza.jpg"> ');
    card("Risotto","San Marzano tomato sauce, fresh mozzarella, grated parmesan and pepperoni from Il Mondo Vecchio", ' <img src="../src/imgs/risotto.jpg">');
    card("Lasagna","San Marzano tomato sauce, fresh mozzarella, grated parmesan and pepperoni from Il Mondo Vecchio", ' <img src="../src/imgs/lasagna.jpg">');
    card("Pepperoni Pizza","San Marzano tomato sauce, fresh mozzarella, grated parmesan and pepperoni from Walmart", ' <img src="../src/imgs/pep.jpg">');
    card("Gnocchi","San Marzano tomato sauce, fresh mozzarella, grated parmesan and onions", ' <img src="../src/imgs/gnochi.jpg">');

};

export {centerMenu};