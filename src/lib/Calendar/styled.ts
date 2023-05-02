import styled from 'styled-components';
import { ChevronProps, DayCardProps } from './propTypes';

export const CalendarContainer = styled.div`
    position: absolute;
    border: 1px solid black;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap:1px;
    margin-top: 5px;
    @media (max-width: 380px) {
        font-size: 10px;
    }
    min-width: 280px;
`;

export const CalendarHeader = styled.div`
    position: relative;
    border-bottom: 1px solid black;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    background-color: white;
`;

export const CalendarHeaderArrow = styled.div<ChevronProps>`
    position: absolute;
    cursor: pointer;
    background: transparent;
    border: none;
    font-size: 20px;
    opacity: 0.5;
    &:hover {
        opacity: 1;
    }
    ${(props) => 
        props.position === "left" &&
        `left: 10px;`
    }
    ${(props) => 
        props.position === "right" &&
        `right: 10px;`
    }
`;

export const CalendarHouseButton = styled.div`
    cursor: pointer;
    background: transparent;
    border: none;
    font-size: 20px;
`;

export const CalendarDays = styled.div`
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: white;
    @media (max-width: 380px) {
        padding: 5px;
    }
`;

export const CalendarDaysName = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-bottom: 1px solid black;
`;

export const CalendarGrid = styled.div`
    display: grid;
    grid-template: repeat(6, auto) / repeat(7, 1fr);
    gap: 2px;
    padding: 10px;
    background-color: white;
    @media (max-width: 380px) {
        padding: 5px;
    }
`;

export const DayCard = styled.button<DayCardProps>`
    border: 1px solid lightgray;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 16px;
    ${(props) => 
        props.isSameMonth &&
        `font-weight: bold;
        background-color: #333;
        border: 2px solid #333;
        color: white;
        `
    }
    ${(props) => 
        !props.isSameMonth &&
        `font-weight: bold;
        background-color: lightgray;
        color: black;
        opacity: 0.8;
        border: 2px solid lightgray;
        `
    }
    ${(props) => 
        props.isActive && props.isSameMonth &&
        `background-color: white;
        color: black;
        border: 2px solid #333;
        `
    }
`;

export const CalendarSelect = styled.select`
    border: none;
    font-size: 16px;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
`;
