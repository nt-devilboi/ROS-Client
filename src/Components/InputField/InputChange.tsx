import React from 'react';

class InputChange extends React.Component<{ func: (e: string) => void, placeholder: string }, {}> {
    render() {
        return <div>
            <input type='text' placeholder={this.props.placeholder} onChange={(e) => this.props.func(e.target.value)}/>
        </div>;
    }
}


export default InputChange;