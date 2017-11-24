import React from 'react';

export default class OrderListing extends React.Component {
    render() {
        const {orders} = this.props;
        return (
            <tbody>
                {orders.map((order, i) => (
                    <tr key={i}>
                        <td>{order.reference}</td>
                        <td>{order.customer}</td>
                        <td>{order.orderedAt}</td>
                        <td>{order.products.map((p, i) => p.name).join(', ')}</td>
                        <td>{order.amount}</td>
                        <td>{order.paymentStatus}</td>
                        <td>{order.orderStatus}</td>
                    </tr>
                ))}
                
            </tbody>
        );
    }
}
