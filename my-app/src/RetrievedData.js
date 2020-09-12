import React from 'react';
import {Table, Container} from 'reactstrap';
import { BsFillCaretUpFill } from 'react-icons/bs';
import NavBar from './NavBar';

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
                            <td className="title">{item.title}</td>
                            <td className="txtbody">{item.txt_body}</td>
                            {/* <td className="comment">{item.comment}</td> */}
                            </tr>
                            )}
                    </Table>
                </Container>
            </div>
        );
    }
}
export default RetrievedData;