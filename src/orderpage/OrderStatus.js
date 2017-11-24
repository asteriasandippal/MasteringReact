import React from 'react';

export default class OrderStatus extends React.Component {
    render() {
        return (
            <div className="orderstatus">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="nav-link active" href="#/">All</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/">Open</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#/">shipped</a>
                    </li>
                </ul>
                <hr/>
            </div>
        );
    }
}