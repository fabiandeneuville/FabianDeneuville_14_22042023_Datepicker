import { useState, useEffect } from 'react';
import { CalendarProps } from './propTypes';
import { 
    CalendarContainer, 
    CalendarHeader, 
    CalendarHeaderArrow, 
    CalendarDays, 
    CalendarDaysName,
    CalendarGrid,
    DayCard,
    CalendarHouseButton
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';

import {
    WEEK_DAYS,
    CALENDAR_MONTHS,
    isDate,
    isValidDate,
    getPreviousMonth,
    getNextMonth,
    calendarBuilder,
    addZero
} from '../../utils';

function Calendar(props: CalendarProps){

    interface DateStateType {
        day: number,
        month: number,
        year: number
    }

    const [dateState, setDateState] = useState<DateStateType>({day: 0, month: 0, year: 0});
    const [today, setToday] = useState<DateStateType>({day: 0, month: 0, year: 0});
    const [isDaySelected, setIsDaySelected] = useState<boolean>(true);

    useEffect(() => {
        initDate(props.date);
        getTodayDate();
    }, [props.date]);
    
    /**
     * Function to init current date on calendar render
     * @param {Date} date - date object
     */
    const initDate = (date: Date): void => {
        const isDateObject = isDate(date) && isValidDate(date);
        const currentDate: Date = isDateObject ? date : (new Date);
        setDateState({
            day: currentDate.getDate(),
            month: currentDate.getMonth() + 1,
            year: currentDate.getFullYear()
        });
    };

    /**
     * Function de get today date
     */
    const getTodayDate = (): void => {
        const todayDate = new Date;
        setToday({
            day: todayDate.getDate(),
            month: todayDate.getMonth() + 1,
            year: todayDate.getFullYear()
        });
    };

    const setTodayDate = (): void => {
        setDateState(today);
        setIsDaySelected(true);
    };
    
    const showPreviousMonth = () => {
        const {month, year} = getPreviousMonth(dateState.month, dateState.year);
        setDateState({...dateState, month, year});
        setIsDaySelected(false);
    };

    const showNextMonth = () => {
        const {month, year} = getNextMonth(dateState.month, dateState.year);
        setDateState({...dateState, month, year});
        setIsDaySelected(false);
    };

    const selectDate = (value : [number, string, string]) => {
        props.onChange(value);
        setDateState({
            day: Number(value[2]),
            month: Number(value[1]),
            year: value[0]
        });
        setIsDaySelected(true);
    };


    return (
        <CalendarContainer>
            <CalendarHeader>
                <CalendarHeaderArrow position="left" onClick={() => showPreviousMonth()}><FontAwesomeIcon icon={faChevronLeft}/></CalendarHeaderArrow>
                <CalendarHouseButton onClick={() => setTodayDate()}><FontAwesomeIcon icon={faHouse}/></CalendarHouseButton>
                {`${Object.keys(CALENDAR_MONTHS)[dateState.month - 1]} - ${dateState.year}`}
                <CalendarHeaderArrow position="right" onClick={() => showNextMonth()}><FontAwesomeIcon icon={faChevronRight}/></CalendarHeaderArrow>
            </CalendarHeader>
            <CalendarDays>
                {Object.values(WEEK_DAYS).map((value, index) => {
                    return (
                        <CalendarDaysName key={index}>{value}</CalendarDaysName>
                    )
                })}
            </CalendarDays>
            <CalendarGrid>
                {dateState.month && dateState.year &&
                    calendarBuilder(dateState.month, dateState.year).map((date, index) => {
                        return (
                            <DayCard
                            isActive={date[2] === addZero(dateState.day, 2) && isDaySelected}
                            isSameMonth={date[1] === addZero(dateState.month, 2)} 
                            key={index}
                            onClick={() => selectDate(date)}
                            > 
                                {date[2]} 
                            </DayCard>
                        );
                    })
                }
            </CalendarGrid>
        </CalendarContainer>
    )
}

export default Calendar;