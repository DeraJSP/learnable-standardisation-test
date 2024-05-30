import React from "react";
import { Link } from "react-router-dom";
import * as LandingImages from "../../components/LandingImages";
// import Importer from "../../components/Importer";

export default function NavBar() {
	return (
		<>
			<nav>
				<div className="darknavwrap">
					<div className="darknav">
						<div className="contact">
							{" "}
							<div>
								<img
									src={require("../../assets/landing_page/phone.svg")}
									alt="mail"
								/>
								<h6 className="phone"> (225) 555-0118 </h6>
							</div>
							<img
								src={require("../../assets/landing_page/mail.svg")}
								alt=""
							/>
							<h6>michelle.rivera@example.com</h6>
						</div>
						<h6>Follow Us and get a chance to win 80% off </h6>

						<div>
							<h6>Follow Us : </h6>
							<img
								src={require("../../assets/landing_page/instagram.svg")}
								alt="instagram"
							/>
							<img
								src={require("../../assets/landing_page/youtube.svg")}
								alt="youtube"
							/>
							<img
								src={require("../../assets/landing_page/facebook.svg")}
								alt="facebook"
							/>
							<img
								src={require("../../assets/landing_page/twitter.svg")}
								alt="twitter"
							/>
						</div>
					</div>
				</div>
				<div>
					<div>
						<p>Bandage</p>
					</div>
					<div>
						<Link to="">
							<p>Home</p>
						</Link>
						<Link to="">
							<p>Shop</p> <img src="" alt="" />
						</Link>
						<Link to="">
							<p>About</p>
						</Link>
						<Link to="">
							<p>Blog</p>
						</Link>
						<Link to="">
							<p>Contact</p>
						</Link>
						<Link to="">
							<p>Pages</p>
						</Link>
					</div>
					<div>
						<Link to=""></Link>
						<img src="" alt="" />
						<img src="" alt="" />
						<img src="" alt="" />
					</div>
				</div>
			</nav>
		</>
	);
}
