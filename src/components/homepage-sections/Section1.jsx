
export default function Section1(){
    return(
        <>
            <div class="section-1 bg-slate-800" id="me">
			<div class="uk-flex uk-flex-center py-20">
				<div>
				<div class="uk-grid uk-child-width-expand@s" data-uk-grid>
					<div class="main-info uk-flex uk-flex-center">
						<div>
							<div data-aos="fade-up">
								<h1 class="text-white font-bold text-5xl ">
									Trever Taylor
								</h1>
							</div>
							<div class="flex">
								<div data-aos="fade-up" data-aos-delay="700">
										<h2 class="text-4xl text-white py-7">Web</h2>
								</div>
								<div data-aos="fade-up" data-aos-delay="800">
									<h2 class="text-4xl text-white py-7 ml-2">&</h2>
								</div>
								<div data-aos="fade-up" data-aos-delay="900">
									<h2 class="text-4xl text-white py-7 ml-2">UX</h2>
								</div>
								<div data-aos="fade-up" data-aos-delay="1000">
									<h2 class="text-4xl text-white py-7 ml-2">Developer</h2>
								</div>
							</div>
							<div class="flex">
								<div data-aos="fade-up" data-aos-delay="1300">
									<button class=" font-bold uk-border-rounded uk-button uk-button-primary bg-red-700 text-white">My Projects</button>
								</div>
								<div data-aos="fade-up" data-aos-delay="1400">
									<button class=" font-bold uk-border-rounded uk-button uk-button-primary bg-red-700 ml-2 text-white">Contact Me</button>
								</div>
							</div>
						</div>
					</div>
					<div class="my-image uk-flex uk-flex-center" data-aos="fade-up" data-aos-delay="1700" data-aos-duration="900">
						<img src="../assets/images/me.jpeg" class="uk-border-circle z-50" height="350" width="350" />
					</div>
				</div>
				</div>
			</div>
		</div>
        </>
    )
}