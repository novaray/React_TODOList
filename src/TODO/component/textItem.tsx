import React from 'react';

interface ITextItem{
    appendText: string,
    handleText: (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleButton: () => void,
    handleKeyUp: (event:React.KeyboardEvent) => void
}

const TextItem:React.SFC<ITextItem> = (props) => (
    <div className="appendTODO">
        <input type="text" title="추가" className="append_input" onChange={props.handleText} value={props.appendText} onKeyUp={props.handleKeyUp} />
        <button type="button" className="append_button" onClick={props.handleButton}>추가</button>
    </div>
)

export default TextItem;