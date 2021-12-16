import { useState } from "react";
import { Container, ResponsiveNav } from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

export function HeaderNav() {
	const [navbarState, setNavbarState] = useState(false);
	return (
		<Container>
			
				<div className="content">
					<div className="logo">
						<img src={require(`../../assets/logo.png`).default} alt="" />
					</div>

					<div className="toogle">
						{navbarState ? (
							<VscChromeClose
								size={25}
								onClick={() => {
									setNavbarState(false);
								}}
							/>
						) : (
							<GiHamburgerMenu
								size={25}
								onClick={() => {
									setNavbarState(true);
								}}
							/>
						)}
					</div>
				</div>
				<ul className="menu-nav">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#features">Features</a>
					</li>
					<li>
						<a href="#partners">Partners</a>
					</li>
					<li>
						<a href="#testimonials">Testimonials</a>
					</li>
					<li>
						<a href="#pricing">Princing</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
				<div className="phone">(843) 555-0130</div>
		
			<ResponsiveNav state={navbarState}>
				<ul>
					<li>
						<a href="#home" onClick={() => setNavbarState(false)}>
							Home
						</a>
					</li>
					<li>
						<a href="#features" onClick={() => setNavbarState(false)}>
							Features
						</a>
					</li>
					<li>
						<a href="#partners" onClick={() => setNavbarState(false)}>
							Partners
						</a>
					</li>
					<li>
						<a href="#testimonials" onClick={() => setNavbarState(false)}>
							Testimonials
						</a>
					</li>
					<li>
						<a href="#pricing" onClick={() => setNavbarState(false)}>
							Princing
						</a>
					</li>
					<li>
						<a href="#contact" onClick={() => setNavbarState(false)}>
							Contact
						</a>
					</li>
				</ul>
			</ResponsiveNav>
		</Container>
	);
}
