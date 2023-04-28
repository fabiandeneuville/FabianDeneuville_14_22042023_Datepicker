import styled from 'styled-components';
import { ChevronProps, DayCardProps } from './propTypes';

export const CalendarContainer = styled.div`
    position: relative;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 5px;
    @media (max-width: 380px) {
        font-size: 10px;
    }
    min-width: 280px;
`;

export const CalendarHeader = styled.div`
    border: 2px solid black;
    border-radius: 5px;
    position: relative;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 20px;
    background-color: white;
`;

export const CalendarHeaderArrow = styled.button<ChevronProps>`
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

export const CalendarHouseButton = styled.button`
    cursor: pointer;
    background: transparent;
    border: none;
    font-size: 20px;
`;

export const CalendarDays = styled.div`
    border: 2px solid black;
    border-radius: 5px;
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
`;

export const CalendarGrid = styled.div`
    display: grid;
    grid-template: repeat(6, auto) / repeat(7, 1fr);
    gap: 2px;
    border: 2px solid black;
    border-radius: 5px;
    padding: 10px;
    background-color: white;
    @media (max-width: 380px) {
        padding: 5px;
    }
`;

export const DayCard = styled.span<DayCardProps>`
    border: 1px solid lightgray;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    ${(props) => 
        props.isSameMonth &&
        `font-weight: bold;
        background-color: gray;
        color: white;
        `
    }
    ${(props) => 
        !props.isSameMonth &&
        `font-weight: bold;
        background-color: lightgray;
        color: #333;
        opacity: 0.8;
        `
    }
    ${(props) => 
        props.isActive && props.isSameMonth &&
        `background-color: black;
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
