import React from "react"
import { menuItems } from "./menuItems"


export default function Navbar(){
    return(
        <header class="uk-sticky bg-slate-800 h-14" data-uk-sticky>
           <div class="uk-container">
            <div class="flex flex-row justify-between">
                <div class="justify-start">
                    <a class="hover:no-underline text-white" href="/"><h3 className="text-white text-2xl pt-3">trevertaylor.dev</h3></a>
                 </div>
                <div class="uk-visible@m justify-end">
                     
                        <ul className="menus uk-flex pt-4 justify-end">
                            {menuItems.map((menu, index) => {
                                return (
                                    <li className="menu-items uk-animate-slide-top ml-6" key={index}>
                                        <a className="text-white text-xl font-bold hover:text-red-700 underline-offset-4" href={menu.url}>{menu.title}</a>
                                    </li>
                                     );
                                })}
                        </ul>
                   
                </div>
                 <div class="uk-hidden@m mobile-container "></div>
                    <a class="uk-hidden@m pl-10 pr-5 pt-3 uk-position uk-position-top-right" uk-toggle="target: #offcanvas-overlay"><i class="fa fa-bars fa-2x text-white"></i></a>

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
                                                                    <a href="https://github.com/trevertaylor" target="_blank"><i class="fa-brands fa-github fa-3x"></i></a>
                                                                    <a href="https://www.facebook.com/trever.taylor.142/" target="_blank"><i class="fa-brands fa-facebook fa-3x"></i></a>
                                                                    <a href="https://www.linkedin.com/in/trever-taylor-651b35167/" target="_blank"><i class="fa-brands fa-linkedin fa-3x"></i></a>
                                                                </div>
                                                </div>
                                                    
                                                </div>
                                            </div>
                                            </div>
                               </div>         
                            
                            
            </header>
            
            
                
            
    )
            
    
}
