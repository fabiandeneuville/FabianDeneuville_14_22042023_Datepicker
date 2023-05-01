export interface onChangeParameters {
    target: {
        name: string, 
        value: string
    }
}
export interface DatePickerProps {
    label?: string;
    required?: boolean;
    onChange: (e: onChangeParameters) => void;
    className?: string;
    style?: object
    value?: string
    name : string
    id? : string
    placeholder?: string
}