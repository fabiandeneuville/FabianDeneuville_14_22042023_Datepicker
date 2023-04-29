import { DatePickerProps } from "./propTypes";
import Calendar from "../Calendar/Calendar";
import BasicInput from "./BasicInput";
import { useEffect } from "react";
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

import {
    getDateISOFromDate,
    getDateArrayFromString
} from "../utils";

function DatePicker(props: DatePickerProps){

    const todayDate = new Date()
    const todayString = (new Date()).toISOString().split('T')[0];
    const [displayCalendar, setDisplayCalendar] = useState<boolean>(false);
    const [datePicked, setDatePicked] = useState<string>(todayString);
    const [dateDisplayed, setDateDisplayed] = useState<Date>(todayDate);
    
    const { onChange } = props;

    useEffect(() => {
        const initDate = () => {
            const today = getDateISOFromDate(new Date())
            const dateString = props.value ? props.value : today
            const dateArray = getDateArrayFromString(dateString)
            const dateObject = new Date(Number(dateArray[0]), Number(dateArray[1]) - 1, Number(dateArray[2]));
            setDatePicked(dateString);
            setDateDisplayed(dateObject);
        }
        initDate()
    }, [props.value])

    useEffect(() => {
        onChange(datePicked);
    }, [datePicked, onChange]);
    
    const setDate = (date: [number, string, string]): void => {
        const dateString = getDateISO(date);
        const dateObject = new Date(date[0], Number(date[1]) - 1, Number(date[2]));
        setDatePicked(dateString);
        setDateDisplayed(dateObject);
        setDisplayCalendar(false);
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement> ): void => {
        setDatePicked(e.target.value);
    };

    const handleKeyUpAndFormat = (e: KeyboardEvent<HTMLInputElement>): void => {
        let value = e.currentTarget.value.replace(/\D/g, "");
        value = value.substring(0, 8);
        value = value.replace(/^(\d{4})(\d{2})(\d{2})$/, "$1-$2-$3")
        setDatePicked(value);
        setDisplayCalendar(false);
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
                    required={props.required} 
                    onChange={handleOnChange} 
                    onKeyUp={handleKeyUpAndFormat} 
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
                    required={props.required} 
                    onChange={handleOnChange} 
                    onKeyUp={handleKeyUpAndFormat} 
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