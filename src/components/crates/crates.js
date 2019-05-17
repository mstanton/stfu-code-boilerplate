import React from 'react';
import _ from 'lodash';

//import './crates.scss';

class Crates extends React.Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const { crates } = this.props;

		//console.log( 'CRATES: ', crates );

		return (
			<React.Fragment>
                {
                    crates && _.map( crates, ( crate ) => {
                        return ( 
                            <div key={ crate.id }>
                                <h3>Title: { crate.title }</h3> 
                                { 
                                    _.map( crate.items, ( item ) => {
                                      console.log('DETAIL DETAIL', item )
                                        return (      
                                           <div key={ item.id }>
                                                <h5>{ item.artist }</h5>
                                                {
                                                    item.art.photo && <img src={'./src/' + item.art.photo } width="200" height="200"/>
                                                }
                                                {
                                                    item.art.cover && <img src={'./src/' + item.art.cover } width="200" height="200"/> 
                                                }    

                                            </div>
                                        )
                                        
                                    })}
                            </div>
                        )
                    })
                }
			</React.Fragment>
		);
	}
}

export default Crates;
