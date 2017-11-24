import React from 'react';
import OrderListing from './OrderListing';
import OrderHeading from './OrderHeading';
import OrderHeaderTitle from './OrderHeaderTitle';
import ORDER_DATA from './OrderData';
// import OrderStatus from './OrderStatus';
const STATUES = ['all', 'orders', 'shipped'];
export default class OrderPage extends React.Component{
    constructor(props) {
        super(props);
        this.state =  {
            selectedStatus : 'shipped'
        }
    };

    handleStatusClick(e) {
        e.preventDefault();
        this.setState({
            selectedStatus: e.target.text
        });
        console.log(this.state.selectedStatus);
    }

    render() {
        
        const {selectedStatus} = this.state;
        const setatues = STATUES.map((statues, i) => {
            const className = statues === selectedStatus ? 'nav-link active' : 'nav-link';
            return (
                <li className="nav-item">
                    <a key={i}
                        className={className}
                        onClick={(e) => this.handleStatusClick(e)}>
                        {statues}
                    </a>
                </li>
            );
        });

        let orders = ORDER_DATA;
        if(selectedStatus !== 'all') {
            orders = ORDER_DATA.filter((order) => {
                return order.orderStatus === selectedStatus;
            })
        }

        return (
            <div className="container">
                <OrderHeaderTitle title="Order" />
                {/* <OrderStatus/> */}
                <div className="orderstatus">
                    <ul className="nav nav-pills">
                        {setatues}
                    </ul>
                </div>
                <table className="table">
                    <OrderHeading/>
                    <OrderListing orders={orders}/>
                </table>
            </div>
        );
    }
}
