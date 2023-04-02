
import { LinkHTMLAttributes } from "react";


export default function Buttons(){
    return(
        <div className="uk-grid uk-flex uk-flex-center uk-margin-top button-container" data-uk-grid>
            <div class="uk-flex uk-flex-center">
                <a href="/contact">
                <button class="uk-button uk-button-primary mx-3 uk-border-rounded bg-white text-black font-bold">
                    Contact Me
                </button>
                </a>
                <a href="/projects"><button class="uk-button uk-button-primary uk-border-rounded bg-red-400 font-bold">
                 Portfolio</button>
                </a>
        </div>
        </div>
    )
}