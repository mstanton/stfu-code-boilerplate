import React, { Component } from 'react';
import { Text, Select } from './inputs';
import { SchemaParser } from './schema-parser';
import { SchemaGenerator } from './schema-generator';
export const schema = {
	field0: {
		id: 0,
		name: 'texttest1',
		type: 'text',
		required: false,
		placeholder: 'text placeholder'
	},
	field1: {
        id: 1,
        name: 'selecttest1',
        type: 'select',
        required: false,
		options: [
			{
				name: 'name0',
				value: 'Name 0'
            },
            {
				name: 'name1',
				value: 'Name 1'
            },
            {
				name: 'name2',
				value: 'Name 2'
			}
		]
	}

};

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="form">
				<Text />
				<Select/>
				
			</div>
		);
	}
}

export default Form;
