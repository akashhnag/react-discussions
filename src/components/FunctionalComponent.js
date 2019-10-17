import React from 'react'

function FunctionalComponent(props) {
    console.log('props in function:', props.msg);
    //props.msg = 'modify message'; immutable props
    props.getPropsAttribute('message from functional component to parent');
    //props.getAttribute('message from functional component to parent'); will throw error. you address the prop name and not the actual function.
    return (
        <div>
            functional component
        </div>
    )
}

export default FunctionalComponent
