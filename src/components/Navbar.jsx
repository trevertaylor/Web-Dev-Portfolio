import React from "react"
import { menuItems } from "./menuItems"


export default function Navbar(){
    return(
    <header className="uk-sticky" data-uk-sticky>
        <div class="logo-container px-4 py-3">
            <span><h3 className="text-white text-2xl">trevertaylor.dev</h3></span>
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