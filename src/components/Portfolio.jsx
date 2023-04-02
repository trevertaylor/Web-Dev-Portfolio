
import { portfolioItems } from "./portfolioItems";

export default function Portfolio(){
    return(
        
        <div class="portfolio">
            
        <div class="uk-position uk-position-center">
            <h1 class="text-6xl text-center font-bold text-white my-10">
                Portfolio of Work
            </h1>
                <hr class="uk-divider-icon" />
             
             <div class="uk-container uk-container-large">
                    <div className="uk-child-width-1-2 uk-child-width-1-3@s uk-grid-match uk-grid-large" data-uk-grid>
                        {portfolioItems.map((portfolio, index) => {
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
                            <p class="text-white py-10"><i>Disclaimer: I do not take design/hosting credit for projects done within my current employer. It is simply a showcase of what I have worked on that have helped me further build my skills.  </i></p>
                         </div>
                    </div>
    )
    
                            }
