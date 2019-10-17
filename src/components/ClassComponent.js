import React, { Component } from 'react'

class ClassComponent extends Component {
    constructor(props) {
        super(props)
        console.log('props in class:', props.msg);
        props.getPropsAttribute('message from class component to parent');

        this.state = {
            message: 'message inside state'
        }
    }

    change = () => {
        this.setState({
            message: 'message modified by button click'
        })
    }


    render() {
        console.log('props in class:', this.props.msg);
        this.props.getPropsAttribute('from render function message from class component to parent')
        return (
            <div>
                {/* <p>class component</p> */}
                <div>
                    <p>{this.state.message}</p>
                    <button onClick={this.change}>Change class state</button>
                </div>

            </div>
        )
    }
}

export default ClassComponent
