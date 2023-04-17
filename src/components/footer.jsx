import { menuItems } from "./menuItems"


export default function Footer(){
    return(
        <>
        
        <footer class="bg-slate-900 h-96">
            <div class="footer-info">
            <div className="uk-flex uk-flex-center">
                            <nav className="mx-10 py-12">
                                <ul className="footer-menu">
                                        <div class="uk-grid uk-child-width-expand@s" data-uk-grid>
                                            {menuItems.map((menu, index) => {
                                                return (
                                                    <li className="py-1 mx-1 uk-animate-slide-left" key={index}>
                                                        <a className="text-white text-center text-2xl font-bold hover:text-white underline-offset-4" href={menu.url}>{menu.title}</a>
                                                    </li>
                                                );
                                                })}
                                            </div>
                                    </ul>
                            </nav>
            </div>
            <div className="contact-info bg-slate-900 h-64">
                <div class="uk-flex uk-flex-center mx-10">
                    <p class="text-white text-xl">
                        For Inquires, please email <a href="mailto:trever@trevertaylor.dev" class="text-red-500 hover:text-red-300 underline-offset-2">trever@trevertaylor.dev</a> or fill out my <a href="/contact" class="text-red-500 hover:text-red-300 underline-offset-2">contact form</a>!
                                                  
                    </p>
                    </div>
            </div>
        </div>
            <div className="copyright uk-flex uk-flex-center bg-slate-900 py-5">
                <p class="text-gray-400">&copy; 2023 trevertaylor.dev</p>
                </div> 

        </footer>
            </>
    )
}