import React from "react"
import { menuItems } from "./menuItems"
import logo from "../assets/images/logo.png";


export default function Navbar(){
    return(
    <header className="uk-sticky bg-black" data-uk-sticky>
        <div class="logo-container px-4 py-3">
            <img src={logo} height="30px" width="30px" />
        </div>
        <div class="menu-wrap">
            <input type="checkbox" class="toggler" />
            <div class="hamburger"><div></div></div>
            <div class="menu">
                <div>
                    <div>
                        <nav>
                            <ul className="menus">
                            {menuItems.map((menu, index) => {
                                return (
                                    <li className="menu-items py-3 uk-animate-slide-top" key={index}>
                                    <a className="text-white text-4xl font-bold" href={menu.url}>{menu.title}</a>
                                    </li>
                                );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
            
    
}