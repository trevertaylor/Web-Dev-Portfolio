export default function Section2(){
    return(
    <div class="section-2 bg-slate-200">
				<div class="uk-container">
				<div id="about-section" class="about-info translate-y-10">
					<div class="flex mx-10">
						<div data-aos="fade-up" data-aos-once="true">
							<h1 class="text-slate-900 text-5xl font-bold">About</h1>
						</div>
						<div data-aos="fade-up" data-aos-delay="100" data-aos-once="true">
							<h1 class="text-slate-900 text-5xl font-bold ml-2">Me</h1>
						</div>
					</div>
					<div class="about py-10 mx-10" data-aos="fade-up" data-aos-delay="200" data-aos-once="true"> 
						<p class="text-slate-900 text-xl">Hello! My name is Trever Taylor and I enjoy all things music, outdoors, and web development. I have experience in Javascript and JS Libraries like React & jQuery, HTML/CSS/SASS, PHP, Wordpress, and MySQL</p>
						<a href="/about" class="uk-button uk-button-default text-white bg-red-700 uk-border-rounded font-bold mt-5">Read More About Me</a>
					</div>
					<div class="progress mx-10" data-aos="fade-right" data-aos-delay="600" data-aos-anchor="#me" data-aos-once="true">
						<div class="progress-value bg-red-700"></div>
					  </div>
					  <div class="flex mx-10 py-10">
						<div data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
							<h1 class="text-slate-900 text-5xl font-bold">My</h1>
						</div>
						<div data-aos="fade-up" data-aos-delay="400" data-aos-once="true">
							<h1 class="text-slate-900 text-5xl font-bold ml-2">Proficiencies</h1>
						</div>
					</div>
					<div class="about mx-10 pb-7 " data-aos="fade-up" data-aos-delay="600" data-aos-once="true"> 
						<div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" data-uk-slider="autoplay: true; autoplay-interval: 0; easing: linear; velocity: 0.02;">

							<ul class="uk-slider-items uk-child-width-1-4 uk-child-width-1-6@m uk-grid">
								<li data-aos="fade-up" data-aos-once="true" data-aos-delay="300">
										<i class="fa-brands fa-html5 fa-4x fa-spin-reverse text-slate-900"></i>		
								</li>
								<li data-aos="fade-up" data-aos-once="true" data-aos-delay="500">
									<i class="fa-brands fa-php fa-4x text-slate-900"></i>			
								</li>
								<li data-aos="fade-up" data-aos-once="true" data-aos-delay="700">
									<i class="fa-brands fa-react fa-4x  text-slate-900"></i>			
								</li>
								<li data-aos="fade-up" data-aos-once="true" data-aos-delay="900">
									<i class="fa-brands fa-js fa-4x text-slate-900"></i>			
								</li>
								<li data-aos="fade-up" data-aos-once="true" data-aos-delay="1100">
									<i class="fa-brands fa-wordpress fa-4x text-slate-900"></i>			
								</li>
								<li data-aos="fade-up" data-aos-once="true" data-aos-delay="1300">
									<i class="fa-brands fa-sass fa-4x text-slate-900"></i>			
								</li>
								
							</ul>
						</div>
					</div>
					<div class="progress-2 mr-10 py-7" data-aos="fade-left" data-aos-delay="800" data-aos-anchor="#about-section" data-aos-once="true">
						<div class="progress-value-2 bg-red-700"></div>
					</div>
				</div>
				</div>
			</div>
    )
}