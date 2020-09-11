import React from 'react';

class RetrievedData extends React.Component  { 
    constructor(props) { 
        super(props);
        this.state ={ 
            data: []
        };
    }

    async componentDidMount() {
        const save = await fetch('/retrieveSaved');
        const results_temp = await save.json();
        const results = await results_temp["results"];
        console.log(results);
        // let house = this; 
        this.setState({ 
            data : results

        });
    }

    render () { 
        const list = this.state.data; 
        return ( 
            <div className="display">
                {list.map(item => <div key={item._id} className="lists">
                <span className="lis">{item.title}</span>
                <span className="lis">{item.upvotes}</span>
                <span className="lis">{item.txt_body}</span>
                <span className="lis">{item.comment}</span>
                </div>
                )}
            </div>
        );
    }
}

export default RetrievedData;