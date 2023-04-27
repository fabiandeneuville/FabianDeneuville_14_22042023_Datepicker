import { DatePickerProps } from "./propTypes";
import Calendar from "../Calendar/Calendar";
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

function DatePicker(props: DatePickerProps){

    
    const todayDate = new Date()
    const todayString = (new Date()).toISOString().split('T')[0];
    const [displayCalendar, setDisplayCalendar] = useState<boolean>(false);
    const [datePicked, setDatePicked] = useState<string>(todayString);
    const [dateDisplayed, setDateDisplayed] = useState<Date>(todayDate);
    
    useEffect(() => {
        props.onChange(datePicked);
    }, [datePicked]);
    
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
                <DatePickerLabel>{props.label}</DatePickerLabel>
                <DatePickerInput 
                value={datePicked} 
                required={props.required} 
                onChange={handleOnChange} 
                onKeyUp={handleKeyUpAndFormat} 
                onClick={handleOnClick} 
                onKeyDown={handleKeyPress}/>
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