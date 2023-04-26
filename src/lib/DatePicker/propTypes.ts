export interface DatePickerProps {
    label: string;
    required: boolean;
    onChange: (date: string) => void;
}