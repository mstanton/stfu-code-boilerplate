import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Crates from './components/crates/crates';
import './main.scss';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}

	componentDidMount() {}

	handleFetch = () => {
		return fetch( 'http://localhost:8080/src/mock.json')
			.then( ( response ) => {
				return response.json();
			})
			.then( ( result ) => {
				this.setState({ data: result });
			});
	};

	render() {
		let { data } = this.state;
		return (
			<div className="app">
				<button onClick={ this.handleFetch }>Fake Fetch</button>
				
				<Header />

				{
					data.crates && <Crates crates={ data.crates }/>
				}	
			</div>
		);
	}
}



export default App;

ReactDOM.render(<App />, document.getElementById('app'));
/* 

*/