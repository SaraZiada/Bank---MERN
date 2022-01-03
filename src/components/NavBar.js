import { React ,Component } from 'react';
import {Link} from "react-router-dom";
import '../styles/NavBar.css'
class NavBar extends Component {

    render(){
        return(
            <div className='NavBar'>
                <span><Link to="/">Transactions</Link></span>
                <span><Link to="/">Operations</Link></span>
                <span><Link to="/Breakdown">Breakdown</Link></span>
            </div>
        );
    }
}
export default NavBar;