import styled from 'styled-components';

export const DatePickerContainer = styled.div`
    // position: relative;
`;

export const DatePickerFormGroup = styled.div`
    display: flex;
    flex-direction: column;
    
`;

export const DatePickerLabel = styled.label`
    padding: 3px;
    font-size: 16px;
    @media (max-width: 380px) {
        font-size: 10px;
    }
`;

export const DatePickerInput = styled.input`
    text-align: center;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    ::placeholder {
        opacity: 0.5;
        font-size: 16px;
        @media (max-width: 380px) {
            font-size: 10px;
        }
    }
`;
