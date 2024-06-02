import { Link } from "react-router-dom";

export default function MainSection() {
	return (
		<>
			<section className="hero">
				<div className="herocontent">
					<div className="firstcolumn">
						<img
							src={require("../../assets/landing_page/furniture1.svg")}
							alt=""
						/>
						<div className="firstoverlay">
							<h6 className="items">5 Items</h6>
							<h2>FURNITURE</h2>
							<h6>Read More</h6>
						</div>
					</div>
					<div className="secondcolumn">
						<div>
							<img
								src={require("../../assets/landing_page/furniture2.svg")}
								alt=""
							/>
							<div className="secondoverlay">
								<h6 className="items">5 Items</h6>
								<h2>FURNITURE</h2>
								<h6>Read More</h6>
							</div>
						</div>
						<div className="thirdsection">
							<div>
								<img
									src={require("../../assets/landing_page/furniture3.svg")}
									alt=""
								/>
								<div className="thirdoverlay">
									<h6 className="items">5 Items</h6>
									<h2>FURNITURE</h2>
									<h6>Read More</h6>
								</div>
							</div>
							<div>
								<img
									src={require("../../assets/landing_page/furniture4.svg")}
									alt=""
								/>
								<div className="fourthoverlay">
									<h6 className="items">5 Items</h6>
									<h2>FURNITURE</h2>
									<h6>Read More</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="featurewrap">
					<div className="servicehead">
						<h2>Featured Products</h2>
						<h3>THE BEST SERVICES</h3>
						<p>Problems trying to resolve the conflict between </p>
					</div>
					<div className="servicebody">
						<div>
							<img
								src={require("../../assets/landing_page/easywins.svg")}
								alt=""
							/>
							<h3>Easy Wins</h3>
							<p>Get your best looking smile now!</p>
						</div>
						<div>
							<img
								src={require("../../assets/landing_page/concrete.svg")}
								alt=""
							/>
							<h3>Concrete</h3>
							<p>
								Defalcate is most focused in helping you
								discover your most beautiful smile
							</p>
						</div>
						<div>
							<img
								src={require("../../assets/landing_page/hackgrowth.svg")}
								alt=""
							/>
							<h3>Hack Growth</h3>
							<p>Overcame any hurdle or any other problem.</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="postswrap">
					<div className="posts">
						<div className="advice">
							<h6>Practice Advice</h6>
							<h3>Featured Posts</h3>
						</div>
						<div className="featuredposts">
							<div>
								<img
									src={require("../../assets/landing_page/bedroom1.svg")}
									alt=""
								/>
								<div className="trending">
									<p>Google</p>
									<p>Trending</p>
									<p>New</p>
								</div>
								<h4>Loudest à la Madison #1 (L'integral)</h4>
								<p className="postcontent">
									We focus on ergonomics and meeting you where
									you work. It's only a keystroke away.
								</p>
								<div className="dateandcomments">
									<div>
										<img
											src={require("../../assets/landing_page/time.svg")}
											alt=""
										/>
										<p>22 April 2021</p>{" "}
									</div>
									<div>
										<img
											src={require("../../assets/landing_page/comments.svg")}
											alt=""
										/>
										<p>10 comments</p>
									</div>
								</div>
								<div>
									<h6>Learn More</h6>
								</div>
							</div>
							<div>
								<img
									src={require("../../assets/landing_page/kitchen.svg")}
									alt=""
								/>
								<div className="trending">
									<p>Google</p>
									<p>Trending</p>
									<p>New</p>
								</div>
								<h4>Loudest à la Madison #1 (L'integral)</h4>
								<p className="postcontent">
									We focus on ergonomics and meeting you where
									you work. It's only a keystroke away.
								</p>
								<div className="dateandcomments">
									<div>
										<img
											src={require("../../assets/landing_page/time.svg")}
											alt=""
										/>
										<p>22 April 2021</p>{" "}
									</div>
									<div>
										<img
											src={require("../../assets/landing_page/comments.svg")}
											alt=""
										/>
										<p>10 comments</p>
									</div>
								</div>
								<div>
									<h6>Learn More</h6>
								</div>
							</div>
							<div>
								<img
									src={require("../../assets/landing_page/bedroom2.svg")}
									alt=""
								/>
								<div className="trending">
									<p>Google</p>
									<p>Trending</p>
									<p>New</p>
								</div>
								<h4>Loudest à la Madison #1 (L'integral)</h4>
								<p className="postcontent">
									We focus on ergonomics and meeting you where
									you work. It's only a keystroke away.
								</p>
								<div className="dateandcomments">
									<div>
										<img
											src={require("../../assets/landing_page/time.svg")}
											alt=""
										/>
										<p>22 April 2021</p>
									</div>
									<div>
										<img
											src={require("../../assets/landing_page/comments.svg")}
											alt=""
										/>
										<p>10 comments</p>
									</div>
								</div>
								<div>
									<h6>Learn More</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="reviewwrap">
					<div className="review">
						<div className="reviewer">
							<div>
								<h6>What they say about us</h6>
								<img
									className="reviewerpic"
									src={require("../../assets/landing_page/reviewerpic.svg")}
									alt=""
								/>
							</div>
							<div>
								<img
									className="stars"
									src={require("../../assets/landing_page/stars.svg")}
									alt=""
								/>
							</div>
							<h6 className="slate">
								Slate helps you see how many more days you need
								to work to reach your financial goal.
							</h6>
							<Link to="">
								<p>Regina Miles</p>
								<h6 className="role">Designer</h6>
							</Link>
						</div>
						<div className="imagegrid">
							<img
								src={require("../../assets/landing_page/camera.svg")}
								alt=""
							/>
							<img
								src={require("../../assets/landing_page/womanscarf.svg")}
								alt=""
							/>
							<img
								src={require("../../assets/landing_page/alley.svg")}
								alt=""
							/>
							<img
								src={require("../../assets/landing_page/cream.svg")}
								alt=""
							/>
							<img
								src={require("../../assets/landing_page/womanpose.svg")}
								alt=""
							/>
							<img
								src={require("../../assets/landing_page/writing.svg")}
								alt=""
							/>
							<img
								src={require("../../assets/landing_page/mountain.svg")}
								alt=""
							/>
							<img
								src={require("../../assets/landing_page/highangle.svg")}
								alt=""
							/>
							<img
								src={require("../../assets/landing_page/glasswall.svg")}
								alt=""
							/>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="utensilswrap">
					<div className="utensils">
						<h6>Designing Better Experience</h6>
						<h2>
							Problems trying to resolve the conflict between{" "}
						</h2>
						<p>
							Problems trying to resolve the conflict between the
							two major realms of Classical physics:{" "}
						</p>
						<h3>$16.48</h3>
						<button className="utensilsbtn">
							<p>ADD YOUR CALL TO ACTION</p>
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
