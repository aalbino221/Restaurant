import './styles.css';
import {header,center,footer} from './home';
import {centerMenu} from './menu';
import {contactInit} from './contact';


class listeners {
    static tab(select) {
        let homeBorder = document.querySelector(".home");
        let menuBorder = document.querySelector(".menu");
        let contactBorder = document.querySelector(".contact");
        homeBorder.style.borderBottom = "0"
        menuBorder.style.borderBottom = "0";
        contactBorder.style.borderBottom = "0";
        select.style.borderBottom = "2px solid #bbbaba"; 
    }

    static remove() {
        let center1 = document.querySelector(".center");
        center1.innerHTML = '';
    }

    static home() {
        let homeBorder = document.querySelector(".home");
        let home = document.querySelector(".home-cont");
        home.addEventListener("click", ()=> {
            this.remove(); center() ; this.tab(homeBorder);
        })
    }

    static menu() {
        let menuBorder = document.querySelector(".menu");
        let menu = document.querySelector(".menu-cont");
        menu.addEventListener("click", ()=> {
            this.remove(); centerMenu() ; this.tab(menuBorder);
        })
    }

    static contact() {
        let contactBorder = document.querySelector(".contact");
        let contact = document.querySelector(".contact-cont");
        contact.addEventListener("click", ()=> {
            this.remove(); contactInit() ; this.tab(contactBorder);
        })
    }
}

(function init () {
    header();
    center();
    footer();
    listeners.home();
    listeners.menu();
    listeners.contact();
}())
