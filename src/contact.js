const contactInit = function () {
    const center = document.querySelector(".center");

    let centerContact = document.createElement("div");
    centerContact.classList.add("center-contact");

    let contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    let tel = document.createElement("p");
    tel.classList.add("tel");
    tel.innerHTML = '<i class="fa fa-solid fa-phone"></i> (00)12345-6789';
    contactInfo.append(tel);

    let email = document.createElement("p");
    email.classList.add("email");
    email.innerHTML = '<i id ="emailIcon" class="fa fa-solid fa-envelope fa-2xs"></i> contact-us@casentino.com.br';
    contactInfo.append(email);

    let address = document.createElement("p");
    address.classList.add("address");
    address.innerHTML = '<i class="fa fa-solid fa-location-arrow"></i> Nova Esperança - Rio Branco - AC';
    contactInfo.append(address);

    let contactMap = document.createElement("div");
    contactMap.classList.add("contact-map");
    contactMap.innerHTML = '<img class ="map" src="../src/imgs/mapa.png">';

    centerContact.append(contactInfo);
    centerContact.append(contactMap);
    center.append(centerContact);

    
}

export {contactInit};