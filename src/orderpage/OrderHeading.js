import React from 'react';

export default class OrderHeading extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th scope="col">Order #</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Ordered At</th>
                    <th scope="col">Products</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Payment status</th>
                    <th scope="col">Order status</th>
                </tr>
            </thead>
        );
    }
}
