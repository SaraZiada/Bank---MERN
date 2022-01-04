import { React ,Component } from 'react';
import {Link} from "react-router-dom";
import '../styles/NavBar.css'
class NavBar extends Component {

    groupByCategory = () => this.props.groupByCategory()
    
    render(){
        return(
            <div className='NavBar'>
                <span><Link to="/">Transactions</Link></span>
                <span><Link to="/operations">Operations</Link></span>
                <span onClick={this.props.groupByCategory}><Link to="/Breakdown">Breakdown</Link></span>
            </div>
        );
    }
}
export default NavBar;