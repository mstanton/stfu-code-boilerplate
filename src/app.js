import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import _ from 'lodash';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}
	componentDidMount() {
		fetch('http://localhost:3000/api/song/2')
		.then(response => response.json())
		.then( data => this.setState( { data: data } )
	)}

	componentWillReceiveProps( props, state  ) {
		console.log(props, state);
	}

	
	render() {		
		console.log('STATE', this.state );
		
		const { data } = this.state
		
	
		return (
			<div>
				{
					_.map( this.state.data, ( item ) => {
						return <p>{item.id}<br/>{item.title}</p>
					})
				}
			</div>
		);
	}
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
