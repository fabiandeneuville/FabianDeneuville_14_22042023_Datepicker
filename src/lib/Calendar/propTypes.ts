export interface CalendarProps {
    date: Date,
    onChange: (value: [number, string, string]) => void,
}

export interface ChevronProps {
    position: string
}

export interface DayCardProps {
    isSameMonth: boolean,
    isActive: boolean
}