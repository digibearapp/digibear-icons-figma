import {DbIconName, DbIconStyle} from '@digibearapp/digibear-icons-react';
import {createContext} from 'react';
import {iconMetadataCollection} from '../../../icon-metadata/digibear-icons-metadata';
import {IconMetadataCollection} from '../../../icon-metadata/icon-metadata';

export interface IconGridProps {
    padding: number;
    backgroundColor?: string;
}

export interface IconItemProps {
    iconName: DbIconName;
    size: number | string;
    marginRight: number | string;
    marginBottom: number | string;
    padding: number | string;
    onClick: (iIcon: number, iRow: number) => void;
}

export interface IconGridContextProps {
    icons: IconMetadataCollection;
    iconStyle: DbIconStyle;
    nbIconsPerRow: number;
}
export const defaultIconGridContext: IconGridContextProps = {
    icons: iconMetadataCollection,
    iconStyle: 'line',
    nbIconsPerRow: 5,
};
export const IconGridContext = createContext<IconGridContextProps>(defaultIconGridContext);
