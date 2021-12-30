import * as React from 'react';
import styled from 'styled-components';

import {ChangeEvent} from 'react';

const StyledFloatingSearchBar = styled.input`
    border: ${({theme}) => `1px solid ${theme.colors.dividerColor.base}`};
    border-radius: 4px;
    height: 48px;
    flex: 1;
    padding: 8;
    background-color: ${({theme}) => theme.colors.background.base};
    color: ${({theme}) => theme.colors.onBackground.base};
    transition: border 0.2s;
    outline: none;
    ::placeholder {
        color: ${({theme}) => theme.colors.onBackground.base};
    }

    &:hover {
        border: ${({theme}) => `1px solid ${theme.colors.secondary.base}`};
    }
    &:focus {
        border: ${({theme}) => `2px solid ${theme.colors.secondary.base}`};
    }
    &:active {
        border: ${({theme}) => `2px solid ${theme.colors.secondary.base}`};
    }
`;

export interface FloatingSearchBarProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const FloatingSearchBar = (props: FloatingSearchBarProps) => {
    const {onChange} = props;

    return <StyledFloatingSearchBar placeholder="Search an icon..." onChange={onChange} />;
};

export default FloatingSearchBar;
