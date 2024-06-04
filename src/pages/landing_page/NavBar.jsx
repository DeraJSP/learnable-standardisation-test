import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import * as LandingImages from "../../components/LandingImages";
// import Importer from "../../components/Importer";

export default function NavBar() {
	const totalQuantity = useSelector((state) => state.cart.totalQuantity);

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
				<div className="lightnavwrap">
					<div className="lightnav">
						<div className="sitesections">
							<Link to="/">
								<h3 className="logo">Bandage</h3>
							</Link>
							<Link to="/">
								<p>Home</p>
							</Link>
							<Link to="">
								<p>Shop</p>
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
						<div className="userarea">
							<div className="login">
								<img
									src={require("../../assets/landing_page/user.svg")}
									alt="user"
								/>
								<Link to="">
									<p>Login / Register</p>
								</Link>
							</div>
							<div>
								<img
									src={require("../../assets/landing_page/search.svg")}
									alt="search"
								/>
							</div>
							<div className="cartlink">
								<Link to="/Cart">
									{" "}
									<div className="carttotal">
										<img
											src={require("../../assets/landing_page/cart.svg")}
											alt="cart"
										/>
										<p>{totalQuantity}</p>
									</div>
								</Link>
							</div>
							<div>
								<img
									src={require("../../assets/landing_page/fav.svg")}
									alt="favourite"
								/>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
