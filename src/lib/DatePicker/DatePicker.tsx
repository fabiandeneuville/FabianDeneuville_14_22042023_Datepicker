import { KeyboardEvent } from "react";
import { DatePickerProps } from "./propTypes";
import Calendar from "../Calendar/Calendar";
import { getDateISO } from "../utils";

import { 
    ChangeEvent, 
    useState, 
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
        if(e.code === "Enter"){
            setDisplayCalendar(true);
        }
    }

    const handleKeyUpAndFormat = (e: KeyboardEvent<HTMLInputElement>): void => {
        let value = e.currentTarget.value.replace(/\D/g, "");
        value = value.substring(0, 8);
        value = value.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")
        setDatePicked(value);
        setDisplayCalendar(false);
        onChange({
            target: {
                name,
                value: value
            }
        });
    };

    return (
        <DatePickerContainer>
            <DatePickerFormGroup>
                {props.label &&
                    <DatePickerLabel htmlFor={props.id ? props.id : "datepicker"}>{props.label}</DatePickerLabel>
                }
                <DatePickerInput 
                value={datePicked}
                required={props.required? props.required: false} 
                onChange={handleOnChange} 
                onClick={handleOnClick}
                onKeyUp={handleKeyUpAndFormat}
                onKeyPress={handleKeyPress}
                type={"text"}
                id={props.id ? props.id : "datepicker"}
                name={props.name ? props.name : "datepicker"}
                pattern="\d{4}-\d{2}-\d{2}"
                style={props.style}
                className={props.className}
                />
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