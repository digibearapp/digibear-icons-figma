import * as React from 'react';
import styled from 'styled-components';
import {DbIcon, DbIconName, DbIconStyle} from '@digibearapp/digibear-icons-react';
import {useState, useEffect} from 'react';

const StyledDropdownWrapper = styled.div`
    position: relative;
    margin-right: 8px;
    user-select: none;
    width: 150px;
`;
const StyledDropdown = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    justify-content: start;
    border: ${({theme}) => `1px solid ${theme.colors.dividerColor.base}`};
    padding: 0px 6px;
    border-radius: 4px;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.1s;

    &:hover {
        background-color: ${({theme}) => theme.colors.background.dimmedBase};
    }
`;

const Spacer = styled.div`
    flex: 1;
`;
const StyledDropdownItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 0px 6px;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.1s;

    &:first-child {
        border-radius: 4px 4px 0px 0px;
    }
    &:last-child {
        border-radius: 0px 0px 4px 4px;
    }

    &:hover {
        background-color: ${({theme}) => theme.colors.background.dimmedBase};
    }
`;
const StyledDropdownItemsWrapper = styled.div`
    position: absolute;
    margin-top: 8px;
    left: 0;
    right: 0;
    border-radius: 4px;
    background-color: ${({theme}) => theme.colors.background.base};
    border: ${({theme}) => `1px solid ${theme.colors.dividerColor.base}`};
    z-index: 10;
`;
const StyledDropdownTitle = styled.p`
    margin-left: 8px;
    margin-right: 2px;
    font-size: 1rem;
    line-height: 14px;
    height: 14px;
`;

export interface DropdownItemProps<T> {
    iconName: DbIconName;
    iconStyle: DbIconStyle;
    title: string;
    value: T;
}

export interface DropdownProps<T> {
    selectedItem: T;
    items: DropdownItemProps<T>[];
    onSelectedItem: (selectedItem: T) => void;
}

const Dropdown = <T extends unknown>(props: DropdownProps<T>) => {
    const {items, selectedItem, onSelectedItem} = props;
    const [showItems, setShowItems] = useState(false);

    const toggleShowItems = () => {
        setShowItems(!showItems);
    };

    const setAndClose = (selectedItem: T) => {
        onSelectedItem(selectedItem);
        setShowItems(false);
    };

    const buildDropdownButton = () => {
        const selectedDropdownItem = items.find((item) => item.value === selectedItem);
        const chevronIconName: DbIconName = showItems ? 'chevronUp' : 'chevronDown';

        return (
            <StyledDropdown>
                <DbIcon iconName={selectedDropdownItem.iconName} iconStyle={selectedDropdownItem.iconStyle} />
                <StyledDropdownTitle>{selectedDropdownItem.title}</StyledDropdownTitle>
                <Spacer />
                <DbIcon iconName={chevronIconName} />
            </StyledDropdown>
        );
    };

    return (
        <StyledDropdownWrapper onClick={toggleShowItems}>
            {buildDropdownButton()}
            {showItems && (
                <StyledDropdownItemsWrapper>
                    {items.map((item) => (
                        <StyledDropdownItem key={item.title} onClick={() => setAndClose(item.value)}>
                            <DbIcon iconName={item.iconName} iconStyle={item.iconStyle} />
                            <StyledDropdownTitle>{item.title}</StyledDropdownTitle>
                        </StyledDropdownItem>
                    ))}
                </StyledDropdownItemsWrapper>
            )}
        </StyledDropdownWrapper>
    );
};

export default Dropdown;
