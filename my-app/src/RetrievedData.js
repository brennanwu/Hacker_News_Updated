import React from 'react';

class RetrievedData extends React.Component  { 
    constructor(props) { 
        super(props);
        this.state ={ 
            data: props.data
        };

    }

    render () { 
        return ( 
            this.state.data
        );

    }





}

export default RetrievedData;