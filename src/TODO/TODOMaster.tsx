import React from 'react';
import TextItem from './component/textItem';
import TODOItem from './component/TODOItem';

interface ITODOMaster{
    appendText: string,
    TODOItems: string[]
}

class TODOMaster extends React.Component<{}, ITODOMaster> {
    state: ITODOMaster = {
        appendText: '',
        TODOItems: []
    }

    constructor(props: {}) {
        super(props);
        this.handleText = this.handleText.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleAppendButton = this.handleAppendButton.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleText(event:React.ChangeEvent<HTMLInputElement>) {
        this.setState({appendText: event.target.value});
    }
    
    handleRemoveClick (removeItem: string) {
        this.setState(state => {
            let TODOItems = state.TODOItems.filter((item) => removeItem !== item);

            return {
                appendText: state.appendText,
                TODOItems
            }
        });
    }

    handleAppendButton () {
        this.appendTODOItem();
    }

    handleKeyUp (event:React.KeyboardEvent){
        if(event.keyCode === 13){
            this.appendTODOItem();
        }
    }

    private appendTODOItem () {
        if(this.state.appendText === '') {
            return;
        }

        const existTODO = this.state.TODOItems.filter(TODOItem => TODOItem === this.state.appendText);
        if(existTODO.length === 0) {
            this.setState(state => {
                const TODOItems = [...state.TODOItems, state.appendText];

                return {
                    appendText: '',
                    TODOItems
                }
            });            
        } else{
            alert('이미 있는 할 일입니다. 다시 입력해주세요.');
        }
    }

    render() {
        return (
            <div>
                <header className="header">
                    <div className="logo">TODO</div>
                    <TextItem handleText={this.handleText} handleButton={this.handleAppendButton} appendText={this.state.appendText} handleKeyUp={this.handleKeyUp} />
                </header>
                {this.state.TODOItems.map(item => (
                    <div key={item}>
                        <TODOItem TODOText={item} handleClick={this.handleRemoveClick} />
                    </div>
                ))}
            </div>
        )
    }
}

export default TODOMaster;