import { 
    ChangeEvent, 
    KeyboardEvent 
} from "react";

export interface DatePickerProps {
    label?: string;
    required: boolean;
    onChange: (date: string) => void;
    className?: string;
    style?: object
    value?: string
    name? : string
    id? : string
}

export interface BasicInputProps {
    value: string;
    required: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onKeyUp: (e: KeyboardEvent<HTMLInputElement>) => void;
    onClick: () => void;
    onKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
    style?: object;
    className?: string;
    name? : string
    id? : string
}