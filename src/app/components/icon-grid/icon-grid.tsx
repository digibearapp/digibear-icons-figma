import * as React from 'react';
import {DbIconName} from '@digibearapp/digibear-icons-react';
import {useContext} from 'react';
import {Virtuoso} from 'react-virtuoso';
import {IconGridContext, IconGridProps} from './types/types';
import IconItem from './icon-item/icon-item';
import styled from 'styled-components';
import {ICON_SIZE} from '../../constants/constants';

const IconGridWrapper = styled.div`
     {
        width: 100%;
        height: 100%;
        background-color: transparent;
        justify-content: center;
    }
`;
// background-color: ${({theme}) => theme.colors.background.base};

const IconRow = styled.div`
     {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-top: ${(props) => props.marginTop};
    }
`;

const IconGrid = (props: IconGridProps) => {
    const {padding, backgroundColor} = props;

    const {icons, nbIconsPerRow} = useContext(IconGridContext);

    const nbRows = Math.ceil(Object.keys(icons).length / nbIconsPerRow);

    const firstIconIndexForRow = (iRow: number): number => iRow * nbIconsPerRow;
    const lastIconIndexForRow = (iRow: number): number => firstIconIndexForRow(iRow) + nbIconsPerRow;

    const iconsForRow = (iRow: number): string[] => {
        const firstIconIndex = firstIconIndexForRow(iRow);
        const lastIconIndex = lastIconIndexForRow(iRow);
        return Object.keys(icons).slice(firstIconIndex, lastIconIndex);
    };

    const buildIconListForRow = (iRow: number) => {
        return iconsForRow(iRow).map((iconName, iIcon) => (
            <IconItem
                key={`icon-${iIcon}`}
                iconName={iconName as DbIconName}
                size={ICON_SIZE}
                marginRight={0}
                marginBottom={0}
                padding={`${padding}px`}
                onClick={() => {}}
            />
        ));
    };

    const renderRow = (iRow: number) => {
        const marginTop = iRow === 0 ? '10px' : '0px';
        return (
            <IconRow key={`row-${iRow}`} marginTop={marginTop}>
                {buildIconListForRow(iRow)}
            </IconRow>
        );
    };

    return (
        <IconGridWrapper id="icon-grid" backgroundColor={backgroundColor}>
            <Virtuoso totalCount={nbRows} itemContent={renderRow} increaseViewportBy={300} />
        </IconGridWrapper>
    );
};

export default IconGrid;
