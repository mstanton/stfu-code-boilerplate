import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import Form from './components/form/form';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<React.Fragment>
				<Header/>
			</React.Fragment>
		);
	}
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
