import React from "react";
import { render } from "react-dom";

export class Light extends React.Component {
	constructor() {
		super();
		this.state = {
			active: null
		};
	}

	render() {
		let redActive = "";
		if (this.state.active == "red") redActive = "glow";
		let yellowActive = "";
		if (this.state.active == "yellow") yellowActive = "glow";
		let greenActive = "";
		if (this.state.active == "green") greenActive = "glow";

		return (
			<div>
				<div className="stick" />
				<div className="light">
					<div
						className={"red " + redActive}
						onClick={() => this.setState({ active: "red" })}
					/>
					<div
						className={"yellow " + yellowActive}
						onClick={() => this.setState({ active: "yellow" })}
					/>
					<div
						className={"green " + greenActive}
						onClick={() => this.setState({ active: "green" })}
					/>
				</div>
			</div>
		);
	}
}
