import React from 'react';

function Header (props) {
    return (
        <header>
            <h3>{props.title}</h3>
        </header>
    );
}

export default class ComponentLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: 'Sandip Pal'
        }
    }

    ButtonClick(e) {
        console.log(this.state.search);
    }

    componentDidMount() {
        console.log('componentDidMount', this.state.search);
    }

    componentWillmount() {
        console.log('componentWillmount', this.state.search);
    }
    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate', nextProps);
    //     console.log('shouldComponentUpdate', nextState);
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate', nextProps);
        console.log('componentWillUpdate', nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate', prevProps);
        console.log('componentDidUpdate', prevState);
    }
    componentDidCatch(error, info) {
        console.log('componentDidCatch', error);
        console.log('componentDidCatch', info);
    }

    render() {
        return(
            <div>
                <Header title={this.state.search}/>
                <input type="text"
                    name="search"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}/>
                <button onClick={(e) => this.ButtonClick(e)}>Click Button</button>
            </div>
        );
    }
}
