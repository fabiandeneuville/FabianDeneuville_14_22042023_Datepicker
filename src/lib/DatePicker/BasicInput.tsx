import { BasicInputProps } from "./propTypes";

const BasicInput = (props : BasicInputProps) => {
    return (
        <input
        value={props.value} 
        onChange={props.onChange}
        onClick={props.onClick}
        onKeyDown={props.onKeyDown}
        style={{...props.style, padding: '5px', textAlign: 'center'}}
        className={props.className}
        type="text"
        id={props.id ? props.id : "datepicker"}
        name={props.name ? props.name : "datepicker"}
        pattern="\d{4}-\d{2}-\d{2}"
        />
    )
};

export default BasicInput;