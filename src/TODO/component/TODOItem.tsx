import React from 'react';

interface ITODOItemProps {
    TODOText: string,
    handleClick: (removeItem: string) => void,
}

interface ITODOItemStates {
    TODO: string,
    isComplete: boolean,
    handleCheckbox: (event: React.ChangeEvent<HTMLInputElement>) => void
}

class TODOItem extends React.Component<ITODOItemProps, ITODOItemStates> {
    state: ITODOItemStates = {
        TODO: '',
        isComplete: false,
        handleCheckbox: this.handleCheckbox.bind(this)
    }

    constructor(props:ITODOItemProps) {
        super(props);
    }

    handleCheckbox(event:React.ChangeEvent<HTMLInputElement>) {        
        this.setState({isComplete : event.target.checked});
    }

    render() {
        return (
            <div className="flexContainer">
                <input 
                    type="checkbox" 
                    name="completed" 
                    value="completed" 
                    checked={this.state.isComplete} 
                    onChange={this.state.handleCheckbox} />
                <div className={this.state.isComplete ? 'completeTODOItem TODOItem' : 'TODOItem'}>
                    {this.props.TODOText}
                </div>
                <button className="remove_button" onClick={() => this.props.handleClick(this.props.TODOText)} >&times;</button>
            </div>
        )
    }
}

export default TODOItem;