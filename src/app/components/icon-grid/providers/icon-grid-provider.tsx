import * as React from 'react';

import {IconMetadataCollection} from '../../../icon-metadata/icon-metadata';
import {DbIconStyle} from '@digibearapp/digibear-common-types';
import {IconGridContext, IconGridContextProps, defaultIconGridContext} from '../types/types';
import {ReactNode} from 'react';

export interface IconGridProviderProps {
    icons: IconMetadataCollection;
    iconStyle: DbIconStyle;
    nbIconsPerRow: number;
    children: ReactNode;
}

const IconGridProvider = (props: IconGridProviderProps) => {
    const {icons, iconStyle, nbIconsPerRow, children} = props;

    const iconGridContextProps: IconGridContextProps = {
        ...defaultIconGridContext,
        icons: icons,
        iconStyle: iconStyle,
        nbIconsPerRow: nbIconsPerRow,
    };

    return <IconGridContext.Provider value={iconGridContextProps}>{children}</IconGridContext.Provider>;
};

export default IconGridProvider;
