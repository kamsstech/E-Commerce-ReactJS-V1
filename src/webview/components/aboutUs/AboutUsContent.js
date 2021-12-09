import React, { useEffect } from "react";
import { Button, Container, Grid } from '@material-ui/core';
import Aos from "aos";
import "aos/dist/aos.css";
import '../privacyAndPolicy/css/PrivacyAndPolicyStyle.css';
const AboutUsContent = () => {
		useEffect(() => {
			// window.scrollTo(0, 0)
			window.scrollTo({
				top: 0, 
				behavior: 'smooth' /* you can also use 'auto' behaviour in place of 'smooth' */
				});
				Aos.init({
					duration: 1000,
				});
		}, []);
		
		return (
			<Container
				data-aos="fade-up"
				data-aos-delay="1500"
			>
				<div className="terms-content-container">
					
					<p
						className="terms-content-paragraph"
						// data-aos="fade-up"
						// data-aos-delay="2000"
					>
						ABOUT USWelcome to JERSEYE – the web's one-stop shop for apparel of all kinds.
						We offer a wide selection of blank apparel styles, brands, and sizes for crafting, DIY projects, and just wearing every day.
						Our goal is to satisfy the apparel needs of online shoppers with plenty of options, a user-friendly site and affordable prices. From cozy fleeces, to casual t-shirts and sweat-wicking athletic wear, Clothing Shop Online has it all.
						Online Shopping site for Women & Men in India. Buy Shoes, Clothing, Jewellery and Accessories for Women & Men JERSEYE.com
						SHOP ON JERSEYE FOR ALL THINGS NICE!
						We all love shopping online and if you often find yourself casually browsing online clothing stores on your smartphone or laptop then you’re certainly not alone. The benefits of shopping online are second to none, no hassles of store hopping, no issues with lost receipts and returns, we could go on and on. The online boom has helped boost benefits for both brands and customers by bringing both closer than before. 
						Enter JERSEYE, India’s hottest place for fashion and lifestyle, shop the widest range of apparels from the latest trends to the most retro classics. We are the one-stop-shop for both genders and all ages. Redefine yourself and refresh your wardrobe with up-to-date fashion, buy clothes online and find compliments coming your way lauding your impeccable taste in fashion.
						Explore clothing options for every member of the family at JERSEYE
					</p>
					
				</div>
			</Container>
		)
}
export default AboutUsContent;
