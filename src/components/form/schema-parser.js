import React from 'react';




export const SchemaParser = ( { schema } ) => {
    const mockSchema = {
        "schema": {
            "fields":[
                {
                    "fieldId": 0,
                    "type": 'text',
                    "field": 'name',
                    "label": 'Name',
                    "required": true,
                    "disabled": false
                },
                {
                    "fieldId": 1,
                    "type": 'email',
                    "field": 'email',
                    "label": 'Email',
                    "required": true,
                    "disabled": false
                },
                {
                    "fieldId": 2,
                    "type": 'text',
                    "field": '',
                    "label": 'Name',
                    "required": false,
                    "disabled": false
                }
            ]
        }
    }

    schema.map(

    )
return ( <div>parse me baby</div> );
};


