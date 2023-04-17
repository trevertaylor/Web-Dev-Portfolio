import React from "react"
import { menuItems } from "./menuItems"


export default function Navbar(){
    return(
        <header class="uk-sticky bg-slate-800 h-14" data-uk-sticky>
        <div class="uk-flex uk-flex-center">
        <div class="navbar-container">
        <div class="uk-container uk-container-large mx-10">
                <div class="uk-grid pt-3" data-uk-grid>
                    <div class="logo-container px-4 uk-width-1-2">
                        <div class="uk-flex uk-flex-center">
                           <a class="hover:no-underline text-white" href="/"><h3 className="text-white text-2xl">trevertaylor.dev</h3></a>
                         </div>
                    </div>
                    <div class="uk-visible@m uk-width-1-2 uk-flex uk-flex-right">
                         <nav>
                                <ul className="menus uk-flex uk-flex-right">
                                    {menuItems.map((menu, index) => {
                                        return (
                                            <li className="menu-items uk-animate-slide-top ml-6" key={index}>
                                                <a className="text-white text-xl font-bold hover:text-red-700 underline-offset-4" href={menu.url}>{menu.title}</a>
                                            </li>
                                        );
                                        })}
                                </ul>
                            </nav>
                        </div>
                        <div class="uk-hidden@m mobile-container uk-width-1-4"></div>
                            <a class="uk-hidden@m translate-x-12" uk-toggle="target: #offcanvas-overlay"><i class="fa fa-bars fa-2x text-white"></i></a>

                                <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
                                    <div class="uk-offcanvas-bar bg-slate-900 w-full ease-linear">

                                        <a class="uk-offcanvas-close text-white text-2xl" uk-close><i class="fa-solid fa-x"></i></a>

                                        <nav class="uk-flex uk-flex-center translate-y-20">
                                            <ul className="menus">
                                                {menuItems.map((menu, index) => {
                                                    return (
                                                        <li className="menu-items uk-animate-slide-top ml-6 mt-10" key={index}>
                                                            <a className="text-white text-4xl py-10 font-bold hover:text-red-700 underline-offset-4" href={menu.url}>{menu.title}</a>
                                                        </li>
                                                    );
                                                    })}
                                            </ul>
                                        </nav>
                                                <div class="uk-flex uk-flex-center pt-10 translate-y-20">
                                                    <div class="uk-grid" data-uk-grid>
                                                        <i class="fa-brands fa-github fa-3x"></i>
                                                        <i class="fa-brands fa-facebook fa-3x"></i>
                                                        <i class="fa-brands fa-linkedin fa-3x"></i>
                                                    </div>
                                       </div>
                                        
                                    </div>
                                </div>
                            </div>
                            </div>
                    </div>
                </div>
            </header>
            
            
                
            
    )
            
    
}
