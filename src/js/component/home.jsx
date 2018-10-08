import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Light } from "./Light.jsx";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div>
				<Light />
			</div>
		);
	}
}
