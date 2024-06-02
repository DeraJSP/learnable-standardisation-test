import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<footer>
				<div className="bottomnav">
					<div>
						<div>
							<h3 className="logo">Bandage</h3>
						</div>
						<div className="socials">
							<img
								src={require("../../assets/landing_page/facebook-b.svg")}
								alt=""
							/>
							<img
								src={require("../../assets/landing_page/instagram-b.svg")}
								alt=""
							/>
							<img
								src={require("../../assets/landing_page/twitter-b.svg")}
								alt=""
							/>
						</div>
					</div>
				</div>
				<div className="footerlinkswrap">
					<div className="footerlinks">
						<div>
							<h5>Company Info</h5>
							<Link to="">
								<p>About Us</p>
							</Link>
							<Link to="">
								<p>Carrier</p>
							</Link>{" "}
							<Link to="">
								<p>We are hiring</p>
							</Link>
							<Link to="">
								<p>Blog</p>
							</Link>{" "}
						</div>
						<div>
							<h5>Legal</h5>
							<Link to="">
								<p>About Us</p>
							</Link>
							<Link to="">
								<p>Carrier</p>
							</Link>{" "}
							<Link to="">
								<p>We are hiring</p>
							</Link>
							<Link to="">
								<p>Blog</p>
							</Link>{" "}
						</div>
						<div>
							<h5>Features</h5>
							<Link to="">
								<p>Business Marketing</p>
							</Link>
							<Link to="">
								<p>User Analytic</p>
							</Link>{" "}
							<Link to="">
								<p>Live Chat</p>
							</Link>
							<Link to="">
								<p>Unlimited Support</p>
							</Link>{" "}
						</div>
						<div>
							<h5>Resources</h5>
							<Link to="">
								<p>IOS & Android</p>
							</Link>
							<Link to="">
								<p>Watch a Demo</p>
							</Link>{" "}
							<Link to="">
								<p>Customers</p>
							</Link>
							<Link to="">
								<p>API</p>
							</Link>{" "}
						</div>
						<div className="search">
							<h5>Get In Touch</h5>
							<form>
								<input
									type="text"
									placeholder="Your Email"
									name="search"
								/>
								<button type="submit">Subscribe</button>
							</form>

							<p>Lore imp sum dolor Amit</p>
						</div>
					</div>
				</div>
				<div className="copyright">
					<div>
						<h6>Made With Love By Finland All Right Reserved </h6>
					</div>
				</div>
			</footer>
		</>
	);
}
