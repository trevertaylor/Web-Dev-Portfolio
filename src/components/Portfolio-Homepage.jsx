
import { portfolioItems } from "./portfolioItems";
import { portfolioItemsHomepage } from "./portfolioItemsHomepage";

export default function PortfolioHomepage(){
    return(
        
        <div class="portfolio">
             <div class="uk-container">
                    <div className="uk-child-width-1-1 uk-child-width-1-3@s uk-grid-match uk-grid-large" data-uk-grid>
                        {portfolioItemsHomepage.map((portfolio, index) => {
                                return (
                                    <>
                                    <div class="uk-text-center box">
                                         <div class="uk-inline-clip uk-transition-toggle" tabindex="0">
                                            <img src={portfolio.imageurl} class="uk-border-rounded" width="2100" height="1400" alt="" />
                                                <div class="uk-transition-slide-bottom uk-position-bottom uk-overlay uk-overlay-default">
                                                    <p class="uk-h4 uk-margin-remove font-bold">{portfolio.title}</p>
                                                    <a href={portfolio.projecturl} class="uk-button uk-button-danger uk-border-rounded bg-red-500 font-bold">View Project</a>
                                                </div>
                                        </div>
                                        </div>
                                     </>
                                );
                                })}
                                </div>
                            </div>
                            <div class="uk-flex uk-flex-center mt-10">
                                <a href="/projects" class="uk-button uk-button-default border-slate-600 mx-10 bg-red-700 uk-border-rounded text-white hover:text-white">View Full Portfolio</a>
                            </div>
                            <p class="text-white py-10 mx-10"><i>Disclaimer: I do not own any rights to projects done within my current employer nor do I take any design credit. It is simply a showcase of what I have worked on both professionally and personally that have helped me further build my skills.  </i></p>
                         </div>
                    
    )
    
                            }
