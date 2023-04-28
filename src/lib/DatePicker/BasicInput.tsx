import { BasicInputProps } from "./propTypes";

const BasicInput = (props : BasicInputProps) => {
    return (
        <input
        value={props.value} 
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        onClick={props.onClick}
        onKeyDown={props.onKeyDown}
        style={{...props.style, padding: '5px', textAlign: 'center'}}
        className={props.className}
        type="text"/>
    )
};

export default BasicInput;