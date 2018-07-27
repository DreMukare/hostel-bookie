import React, { Component } from "react";
import { fakepi, normalize } from "../../utils";
import Button from "../../components/Button";
// import { Link } from '@reach/router';

class BookRoomPage extends Component {
	state = {
		loading: false,
		data: []
	};
	componentDidMount() {
		fakepi.hostel();
	}
	handleClick = event => {
		const id = event.target.id;
		fakepi
			.hostel(id)
			.then(response => {
				this.setState(prevState => ({ loading: !prevState.loading }));
				if (response.ok) {
					return response.json;
				}
			})
			.then(json => {
				if (Boolean(json)) {
					this.setState({ data: json.vacant, loading: false });
				}
			});
	};
	render() {
		return (
			<div>
				<h2>Book room</h2>
				<Button id="a" onClick={this.handleClick} label="A" />
				|
				<Button id="b" onClick={this.handleClick} label="B" />
				|
				<Button id="c" onClick={this.handleClick} label="C" />
				<br />
				<h3>Vacant hostels</h3>
				{this.state.loading && "Loading..."}
				<ul>{this.state.data.map(room => <li>{room}</li>)}</ul>
			</div>
		);
	}
}

export default BookRoomPage;
