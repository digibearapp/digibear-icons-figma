import * as React from 'react';
import '../styles/ui.css';
import {
    DbIconContextProps,
    DbIconContext,
    DigibearIconsRegistryContext,
    DbIconStyle,
    DbIconStyleKeys,
} from '@digibearapp/digibear-icons-react';
import * as dbIcon from '@digibearapp/digibear-svg-icons';
import {DigibearIconsRegistry} from '@digibearapp/digibear-svg-core';
import IconPageIconGrid from './app-components/icon-grid/icon-grid';
import {iconMetadataCollection, IconCategory} from '../icon-metadata/digibear-icons-metadata';
import {ICON_PADDING, WINDOW_MARGIN} from '../constants/constants';
import {useState, useMemo, ChangeEvent, useCallback} from 'react';
import {IconMetadataCollection} from '../icon-metadata/icon-metadata';
import Fuse from 'fuse.js';
import FloatingSearchBar from './floating-search-bar/floating-search-bar';
import {useDebouncedCallback} from 'use-debounce';

import styled, {ThemeProvider} from 'styled-components';
import {snowTheme} from '../styles/themes/themes';
import Dropdown, {DropdownItemProps} from './dropdown/dropdown';
import {capitalizeFirstLetter} from '../utils/utils';
import Footer from './app-components/footer/footer';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
const Header = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    padding: ${WINDOW_MARGIN}px ${WINDOW_MARGIN}px 0px ${WINDOW_MARGIN}px;
    border-radius: 4px;
`;
const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0px ${WINDOW_MARGIN}px 0px ${WINDOW_MARGIN}px;
`;

const App = ({}) => {
    const [iconStyle, setIconStyle] = useState<DbIconStyle>('duotone');
    const [iconCategory] = useState<IconCategory>('All');
    const [searchQuery, setSearchQuery] = useState('');
    const categorizedIcons = useMemo(() => {
        return iconCategory === 'All'
            ? iconMetadataCollection
            : Object.fromEntries(
                  Object.entries(iconMetadataCollection).filter(([_, metadata]) => {
                      return metadata.categories.includes(iconCategory);
                  })
              );
    }, [iconCategory]);

    const fuse = new Fuse(Object.values(categorizedIcons), {
        keys: [
            {name: 'categories', weight: 0.2},
            {name: 'tags', weight: 0.3},
            {name: 'data.iconName', weight: 1.0},
        ],
        includeScore: true,
        threshold: 0.3,
    });

    const searchResults = fuse.search(searchQuery);
    const filteredIconsArray = searchResults.map((iconResult) => iconResult.item);
    let filteredIcons: IconMetadataCollection = searchQuery
        ? filteredIconsArray.reduce(
              (obj, item) => ({
                  ...obj,
                  [item.data.iconName]: item,
              }),
              {}
          )
        : categorizedIcons;

    const handleQueryChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
    }, []);
    const debouncedSearchQuery = useDebouncedCallback(handleQueryChange, 300);

    const buildAppContent = () => {
        const iconStyleDropdownItems: DropdownItemProps<DbIconStyle>[] = DbIconStyleKeys.map((iconStyle) => ({
            iconName: 'rocketTilt45',
            iconStyle: iconStyle,
            value: iconStyle,
            title: capitalizeFirstLetter(iconStyle),
        }));

        return (
            <Wrapper>
                <Header>
                    <Dropdown<DbIconStyle>
                        items={iconStyleDropdownItems}
                        selectedItem={iconStyle}
                        onSelectedItem={setIconStyle}
                        width="160px"
                    />
                    <FloatingSearchBar onChange={(e) => debouncedSearchQuery(e)} />
                </Header>
                <MainSection>
                    <IconPageIconGrid
                        iconStyle={iconStyle}
                        padding={ICON_PADDING}
                        icons={filteredIcons}
                        backgroundColor="transparent"
                    />
                </MainSection>
                <Footer />
            </Wrapper>
        );
    };

    // Create a Registry
    const registry = new DigibearIconsRegistry();

    // Register the imported icons
    registry.registerIcons(Object.values(dbIcon.allIconsMap));

    // Create an icon context
    const context: DbIconContextProps = {
        iconStyle: iconStyle,
        color: 'currentColor',
        secondaryColor: 'currentColor',
        size: '2em',
        opacity: 1.0,
        secondaryOpacity: 0.16,
        flippedH: false,
        flippedV: false,
    };

    return (
        <ThemeProvider theme={snowTheme}>
            <DbIconContext.Provider value={context}>
                <DigibearIconsRegistryContext.Provider value={registry}>
                    {buildAppContent()}
                </DigibearIconsRegistryContext.Provider>
            </DbIconContext.Provider>
        </ThemeProvider>
    );
};

export default App;
