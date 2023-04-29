import { DatePickerProps } from "./propTypes";
import Calendar from "../Calendar/Calendar";
import BasicInput from "./BasicInput";
import { getDateISO } from "../utils";

import { 
    ChangeEvent, 
    useState, 
    KeyboardEvent 
} from "react";

import { 
    DatePickerContainer,
    DatePickerFormGroup,
    DatePickerInput,
    DatePickerLabel
} from "./styled";

function DatePicker(props: DatePickerProps){

    const todayDate = new Date()
    const [displayCalendar, setDisplayCalendar] = useState<boolean>(false);
    const [datePicked, setDatePicked] = useState<string>(props.value ? props.value : "");
    const [dateDisplayed, setDateDisplayed] = useState<Date>(todayDate);

    const {onChange, name} = props
    
    const setDate = (date: [number, string, string]): void => {
        const dateString = getDateISO(date);
        const dateObject = new Date(date[0], Number(date[1]) - 1, Number(date[2]));
        setDatePicked(dateString);
        setDateDisplayed(dateObject);
        setDisplayCalendar(false);
        onChange({
            target: {
                name,
                value: dateString
            }
        });
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement> ): void => {
        setDatePicked(e.target.value);
        onChange({
            target: {
                name,
                value: datePicked
            }
        })
    };

    const handleOnClick = (): void => {
        setDisplayCalendar(!displayCalendar);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
        if(e.key === "Backspace"){
            setDatePicked("");
        }
    };

    return (
        <DatePickerContainer>
            <DatePickerFormGroup>
                {props.label &&
                    <DatePickerLabel>{props.label}</DatePickerLabel>
                }
                {props.style || props.className ? (
                    <BasicInput 
                    value={datePicked} 
                    readonly
                    required={props.required? props.required: false} 
                    onChange={handleOnChange} 
                    onClick={handleOnClick} 
                    onKeyDown={handleKeyPress}
                    style={props.style}
                    className={props.className}
                    id={props.id ? props.id : "datepicker"}
                    name={props.name ? props.name : "datepicker"}
                    />
                ) : (
                    <DatePickerInput 
                    value={datePicked}
                    readOnly
                    required={props.required? props.required: false} 
                    onChange={handleOnChange} 
                    onClick={handleOnClick} 
                    onKeyDown={handleKeyPress}
                    type={"text"}
                    id={props.id ? props.id : "datepicker"}
                    name={props.name ? props.name : "datepicker"}
                    pattern="\d{4}-\d{2}-\d{2}"
                    />

                )}
            </DatePickerFormGroup>
            {displayCalendar &&
                <Calendar
                date={dateDisplayed}
                onChange={(value: [number, string, string]) => setDate(value)}
                />
            }
        </DatePickerContainer>
    )
}

export default DatePicker;