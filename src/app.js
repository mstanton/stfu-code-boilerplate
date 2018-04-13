import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/header';
import './styles.scss';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null
		};
	}
	componentDidMount() {
		fetch('http://localhost:3000/api/song/2')
		.then(response => response.json())
		.then( data => this.setState( { data: data } )
		.catch( error => console.error(error))
	)}

	// componentWillReceiveProps( props, state  ) {
	// 	console.log(props, state);
	// }

	
	render() {		
		const { data } = this.state

		console.log( 'DATA', data )
		
		return (
			<div>
				<Header/>
				<h3>This is some sweet test data</h3>
				{
					data && data.map( ( item, index ) => {
						return <p key={ index }>id: {item.id}<br/>title: {item.title}</p>
					})
				}
			</div>
		);
	}
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
