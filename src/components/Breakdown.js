import React, { Component } from 'react';
import '../styles/BreakDown.css'

class Breakdown extends Component {

    componentDidMount = () => {
        this.props.groupByCategory()
    }
    render(){
        return(
            <div className='breakDown'>
                <div className='header'>
                    <span>Category</span>
                    <span>Total</span>
                </div>
                {this.props.categories.map(c => {
                    return(
                        <div key={c._id} className='category'>
                            <span>{c._id}</span>
                            <span>{c.totalSum}</span>
                        </div>
                    )
                })}
            </div>
        );
    }
}
export default Breakdown;