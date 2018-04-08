import React from 'react';

/**
 * Text Input
 * @param {*} props 
 */
export const Text = ( props ) => {
	return (
		<div className='form-input'>
			<label>Label</label>
			<input placeholder="Text Input" />
		</div>
	);
};

/**
 * Select Input
 * @param {*} props 
 */
export const Select = ( props ) => {
	return (
		<div className='form-input'>
			<label>Label</label>
			<select>
				<option>Test</option>
			</select>
		</div>
	);
};
