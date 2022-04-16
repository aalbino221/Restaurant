const header = function () {
    const content = document.querySelector("#content")
    const header =  document.createElement("div");
    header.classList.add("header");

    let headerName = document.createElement("div");
    headerName.classList.add("header-name");
    headerName.textContent = "CASENTINO";
    header.append(headerName);

    let home = document.createElement("div");
    home.classList.add("home");
    let homeContent = document.createElement("p");
    homeContent.classList.add("home-cont");
    homeContent.textContent = "Home";
    home.append(homeContent);
    header.append(home);

    let menu = document.createElement("div");
    menu.classList.add("menu")
    let menuContent = document.createElement("p");
    menuContent.classList.add("menu-cont");
    menuContent.textContent = "Menu";
    menu.append(menuContent);
    header.append(menu);

    let contact = document.createElement("div");
    contact.classList.add("contact")
    let contactContent = document.createElement("p");
    contactContent.classList.add("contact-cont");
    contactContent.textContent = "Contact";
    contact.append(contactContent);
    header.append(contact);

    content.append(header);
};

const center = function () {
    const content = document.querySelector("#content");
    let center = document.querySelector(".center");

    if (center ==  null) {
        center = document.createElement("div");
        center.classList.add("center");
        content.append(center);
}

    let centerCont = document.createElement("div");
    centerCont.classList.add("center-content");

    let name = document.createElement("p");
    name.classList.add("name");
    name.textContent = "CASENTINO";
    centerCont.append(name);

    let days1 = document.createElement("p");
    days1.classList.add("days1");
    days1.textContent = "Monday to Friday - 12h to 20h";
    centerCont.append(days1);

    let days2 = document.createElement("p");
    days2.classList.add("days2");
    days2.textContent = "Saturday and Sunday - 12h to 00h";
    centerCont.append(days2);

    center.append(centerCont);
}

const footer = function () {
    const content = document.querySelector("#content");
    const footer = document.createElement("div");
    footer.classList.add("footer");

    let footerCont = document.createElement("div");
    footerCont.classList.add("footer-content");

    footerCont.innerHTML = ' 2022 @ <i class="fa fa-brands fa-github"></i> aalbino221';
    footer.append(footerCont);
    content.append(footer);
}

export {header, center,footer};