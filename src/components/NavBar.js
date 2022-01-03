import { React ,Component } from 'react';
import {Link} from "react-router-dom";
import '../styles/NavBar.css'
class NavBar extends Component {

    render(){
        return(
            <div className='NavBar'>
                <div><Link to="/">Transactions</Link></div>
                <div>Operations</div>
                <div><Link to="/Breakdown">Breakdown</Link></div>
            </div>
        );
    }
}
export default NavBar;