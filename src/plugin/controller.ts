import {ICON_PADDING, ICON_SIZE, NB_ICONS_PER_ROW, WINDOW_MARGIN} from '../app/constants/constants';
import {DbIconName} from '@digibearapp/digibear-icons-react';

const width = NB_ICONS_PER_ROW * (ICON_PADDING * 2 + ICON_SIZE) + WINDOW_MARGIN * 2;
figma.showUI(__html__, {width: width, height: 490});

interface DropPayload {
    iconName: DbIconName;
    svg: string;
    dropPosition: {clientX: number; clientY: number};
    offset: {x: number; y: number};
    windowSize: {width: number; height: number};
}

figma.ui.onmessage = ({type, payload}) => {
    switch (type) {
        case 'drop':
            dropIcon(payload);
            break;
    }
};

function dropIcon(payload: DropPayload) {
    const {iconName, svg, dropPosition, windowSize, offset} = payload;

    const {bounds, zoom} = figma.viewport;
    const hasUI = Math.round(bounds.width * zoom) !== windowSize.width;
    const leftPaneWidth = windowSize.width - bounds.width * zoom - 240;
    const xFromCanvas = hasUI ? dropPosition.clientX - leftPaneWidth : dropPosition.clientX;
    const yFromCanvas = hasUI ? dropPosition.clientY - 40 : dropPosition.clientY;

    const tempNode = figma.createNodeFromSvg(svg);
    const node = figma.group(tempNode.children, figma.currentPage);
    tempNode.remove();

    node.name = iconName;
    node.constrainProportions = true;
    node.x = bounds.x + xFromCanvas / zoom - offset.x;
    node.y = bounds.y + yFromCanvas / zoom - offset.y;

    figma.currentPage.selection = [node];
    figma.notify(`✔ Inserted ${iconName}`, {timeout: 2000});
}
