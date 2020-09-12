import React from 'react';
import {Table, Container} from 'reactstrap';
import { Link } from 'react-router-dom'
import { BsFillCaretUpFill } from 'react-icons/bs';
import NavBar from './NavBar';
import Comments from './Comments';

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
                <NavBar />
                <Container>
                    <Table size="sm">
                        {list.map((item, index) => <tr key={item._id} className="lists">
                            <td className="index">{index+1}</td>
                            <td className="upvotes"><BsFillCaretUpFill />{item.upvotes}</td>
                            <td className="title"><Link to={{pathname: '/comments', aboutProps:{name: item._id}}} props={item._id}>{item.title}</Link></td>
                            <td className="txtbody">{item.txt_body}</td>
                            </tr>
                            )}
                    </Table>
                </Container>
            </div>
        );
    }
}
export default RetrievedData;