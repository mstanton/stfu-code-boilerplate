import React from 'react';

export const SchemaGenerator = () => {
    let schema = { 
        field0: {
            id: 0,
            name: 'texttest1',
            type: 'text',
            required: false,
            placeholder: 'text placeholder' 
        }
    }
	// this will generate a schema based on user input
    console.log('generate schema', schema );
    
    return schema
};
