import { 
    ChangeEvent, 
    KeyboardEvent 
} from "react";

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
}

export interface BasicInputProps {
    readonly: boolean
    value: string;
    required?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    style?: object;
    className?: string;
    name? : string
    id? : string
}