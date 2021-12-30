import * as React from 'react';
import {DbIconStyle} from '@digibearapp/digibear-common-types';
import {IconMetadataCollection} from '../../../icon-metadata/icon-metadata';
import IconGrid from '../../icon-grid/icon-grid';
import IconGridProvider from '../../icon-grid/providers/icon-grid-provider';
import {NB_ICONS_PER_ROW} from '../../../constants/constants';

export interface IconPageIconGridProps {
    iconStyle: DbIconStyle;
    padding: number;
    icons: IconMetadataCollection;
    backgroundColor?: string;
}

const IconPageIconGrid = (props: IconPageIconGridProps) => {
    const {padding, iconStyle, icons, backgroundColor} = props;

    return (
        <IconGridProvider icons={icons} nbIconsPerRow={NB_ICONS_PER_ROW} iconStyle={iconStyle}>
            <IconGrid padding={padding} backgroundColor={backgroundColor} />
        </IconGridProvider>
    );
};

export default IconPageIconGrid;
