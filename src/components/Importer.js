// function Importer(r) {
// 	let images = {};
// 	r.keys().map((item) => {
// 		images[item.replace("./", "")] = r(item);
// 	});
// 	return images;
// }

// const images = Importer(
// 	require.context("../assets/landing_page", false, /\.(png|svg)$/),
// );

// export default Importer;

function Importer({ imageName }) {
	// Construct the image path based on the prop
	const imagePath = require(`../../assets/landing_page/${imageName}.svg`);

	return (
		<>
			<img
				src={imagePath}
				alt={imageName}
				className="pt-2 pb-2 w-130px"
			/>
		</>
	);
}

export default Importer;
