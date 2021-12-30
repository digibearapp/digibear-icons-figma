import * as React from 'react';
import {IconGridContext, IconItemProps} from '../types/types';
import {DbIcon} from '@digibearapp/digibear-icons-react';
import {useContext} from 'react';
import styled from 'styled-components';

import {useCallback, useRef, useEffect} from 'react';

const IconWrapper = styled.div`
    cursor: grab;
    padding: ${({padding}) => padding};
    width: ${({size}) => size};
    height: ${({size}) => size};
    border-radius: 4px;
    background-color: transparent;
    transition: background-color 0.2s;

    &:hover {
        background-color: ${({theme}) => theme.colors.background.dimmedBase};
    }
    &:active {
        background-color: transparent;
        cursor: grabbing;
    }
`;

interface Position {
    x: number;
    y: number;
}

const IconItem = (props: IconItemProps) => {
    const {iconName, size, padding} = props;
    const {iconStyle} = useContext(IconGridContext);
    const dragStartRef = useRef<Position>();

    useEffect(() => {
        window.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';
        });
    }, []);

    const handleDragStart = useCallback((e: React.DragEvent<HTMLSpanElement>) => {
        const {offsetX, offsetY} = e.nativeEvent;
        e.dataTransfer.effectAllowed = 'copyMove';
        e.dataTransfer.setData('text/plain', e.currentTarget.innerHTML);

        dragStartRef.current = {x: offsetX, y: offsetY};
    }, []);

    const handleDragEnd = useCallback((e: React.DragEvent<HTMLSpanElement>, iconName: string) => {
        const {clientX, clientY, view} = e.nativeEvent;
        if (view.length === 0) return;

        const payload = {
            iconName,
            svg: e.currentTarget.innerHTML,
            dropPosition: {clientX, clientY},
            windowSize: {
                width: window.outerWidth,
                height: window.outerHeight,
            },
            offset: dragStartRef.current,
        };

        parent.postMessage({pluginMessage: {type: 'drop', payload}}, '*');
    }, []);

    return (
        <IconWrapper
            size={size}
            padding={padding}
            onDragStart={handleDragStart}
            onDragEnd={(e) => handleDragEnd(e, iconName)}
            draggable
        >
            <DbIcon iconName={iconName} iconStyle={iconStyle} size={size} />
        </IconWrapper>
    );
};

export default IconItem;
