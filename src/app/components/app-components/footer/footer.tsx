import * as React from 'react';
import styled from 'styled-components';

const DigibearLink = styled.a`
    height: 14px;
    line-height: 14px;
    margin-right: 4px;
    color: ${({theme}) => theme.colors.secondary.base};
`;
const FooterWrapper = styled.div`
    border-top: ${({theme}) => `1px solid ${theme.colors.dividerColor.base}`};
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.background.base};
    padding: 8px;
    width: 100%;
`;
const Text = styled.p`
    height: 14px;
    line-height: 14px;
`;

const Footer = () => {
    return (
        <FooterWrapper>
            <Text>
                Advanced search and other products at{' '}
                <DigibearLink href="https://digibear.app/" target="_blank" rel="noopener">
                    Digibear.app
                </DigibearLink>
            </Text>

            <svg id="Logo-Snow" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
                <defs>
                    <linearGradient
                        id="linear-gradient"
                        x1="681.98"
                        y1="604.11"
                        x2="813.47"
                        y2="700.9"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#0078e2" />
                        <stop offset="0" stopColor="#0078e2" />
                        <stop offset="0.23" stopColor="#1491e1" />
                        <stop offset="0.46" stopColor="#22a3e0" />
                        <stop offset="0.71" stopColor="#2aaee0" />
                        <stop offset="1" stopColor="#2db1e0" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-2"
                        x1="657.18"
                        y1="754.86"
                        x2="789.27"
                        y2="517.76"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopOpacity="0.2" />
                        <stop offset="1" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-3"
                        x1="151.68"
                        y1="514.99"
                        x2="1022.73"
                        y2="514.99"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#39bde5" />
                        <stop offset="1" stopColor="#49c3f2" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-4"
                        x1="130.75"
                        y1="397.77"
                        x2="779.12"
                        y2="624.06"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#0190e0" />
                        <stop offset="1" stopColor="#0fabec" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-5"
                        x1="607.57"
                        y1="338.17"
                        x2="705.18"
                        y2="409.08"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopOpacity="0.3" />
                        <stop offset="1" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-6"
                        x1="188.17"
                        y1="667.19"
                        x2="505.25"
                        y2="914.16"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopColor="#0078d1" />
                        <stop offset="1" stopColor="#008ee5" />
                    </linearGradient>
                    <linearGradient
                        id="linear-gradient-7"
                        x1="200.58"
                        y1="676.86"
                        x2="508.92"
                        y2="917.02"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="0" stopOpacity="0.1" />
                        <stop offset="1" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
                <title>Logo-Snow</title>
                <g id="Arm_copy_4" data-name="Arm copy 4">
                    <path
                        id="Shape"
                        d="M814.43,524.19c-76.13,34.76-169.5,100.86-172.34,228a160,160,0,0,0,172.34-228Z"
                        fill="url(#linear-gradient)"
                    />
                    <path
                        id="ShadowDark"
                        d="M822.46,543.76C751.38,578.86,671,641.56,663.6,754.58a160.74,160.74,0,0,1-21.51-2.42c2.84-127.11,96.21-193.21,172.34-228A159.39,159.39,0,0,1,822.46,543.76Z"
                        fill="url(#linear-gradient-2)"
                    />
                </g>
                <g id="Bottom_copy_4" data-name="Bottom copy 4">
                    <path
                        id="Shape-2"
                        data-name="Shape"
                        d="M932.63,170.62c0,49.76-133.35,399.19-511.71,399.19-197.55,0-284.47,167-267.07,289.55a160,160,0,0,1,320,0H658.59C592.46,644.68,739.18,554,835.85,515,1101.66,407.64,1006,170.62,1006,170.62Z"
                        fill="url(#linear-gradient-3)"
                    />
                </g>
                <g id="Top_copy_3" data-name="Top copy 3">
                    <path
                        id="Shape-3"
                        data-name="Shape"
                        d="M836.71,246.85c-35.22,0-57.55,17.23-71.57,30.74-6.09,5.87-12.16,11.24-18.2,16.17a61.53,61.53,0,0,0-123.06.31c0,1,0,2,0,3l0,.9c0,.73.07,1.46.11,2.19l.06.91c.06.89.14,1.78.22,2.66l0,.3c.1,1,.22,2,.35,3,0,.25.07.49.1.74.1.76.22,1.51.34,2.26,0,.27.09.54.13.81.15.85.31,1.7.47,2.54,0,.12.05.24.07.35.2,1,.42,2,.64,2.94l.12.47c.19.82.4,1.63.62,2.43,0,.22.11.44.17.65.23.85.48,1.7.73,2.54l.09.28c.3,1,.62,2,.95,2.93l0,.09c.31.91.64,1.81,1,2.71l.16.43c.33.87.68,1.74,1,2.6a1,1,0,0,0,.07.15c.79,1.9,1.64,3.76,2.54,5.6l.09.19q.68,1.35,1.38,2.67h0c.49.92,1,1.83,1.52,2.73h0a98.42,98.42,0,0,0,85.38,49.39,73.37,73.37,0,0,1-16.12,1.73l-4.1-.12c-1.37-.07-2.73-.24-4.1-.35s-2.74-.33-4.1-.55-2.74-.44-4.09-.75c-2.74-.5-5.39-1.31-8.09-2.07s-5.29-1.81-7.87-2.91c-.65-.27-1.31-.53-2-.81l-1.91-.91c-1.26-.62-2.54-1.21-3.77-1.91s-2.49-1.33-3.7-2.06l-3.59-2.27a95.63,95.63,0,0,1-31.72-35.2c-41.06,4.32-78.48-1.81-109.78-1.81C238,342.52.61,567.66.61,859.36H153.85c-17.4-122.53,69.52-289.55,267.07-289.55,378.36,0,511.71-349.43,511.71-399.19C932.63,170.62,914.31,246.85,836.71,246.85Zm-10.13,35a53.94,53.94,0,0,0-13.84,5.79A59.34,59.34,0,0,0,801,296.9a68.47,68.47,0,0,0-10.45,14c-3-6.24-2.5-13.85.33-20.42a33.76,33.76,0,0,1,14.4-15.74,34.48,34.48,0,0,1,20.84-4.4c7.07.86,13.86,4.13,17.84,9.7A61.58,61.58,0,0,0,826.58,281.9Z"
                        fill="url(#linear-gradient-4)"
                    />
                    <path
                        id="ShadowDark-2"
                        data-name="ShadowDark"
                        d="M706.21,394.24l-4.1-.12c-1.37-.07-2.73-.24-4.1-.35s-2.74-.33-4.1-.55-2.74-.44-4.09-.75c-2.74-.5-5.39-1.31-8.09-2.07s-5.29-1.81-7.87-2.91c-.65-.27-1.31-.53-2-.81l-1.91-.91c-1.26-.62-2.54-1.21-3.77-1.91s-2.49-1.33-3.7-2.06l-3.59-2.27a95.76,95.76,0,0,1-31.72-35.19c-8.57.9-17,1.35-25.22,1.49a98.57,98.57,0,0,0,114.45,47.74A80.9,80.9,0,0,1,706.21,394.24Z"
                        fill="url(#linear-gradient-5)"
                    />
                </g>
                <g id="Legs_copy_4" data-name="Legs copy 4">
                    <path
                        id="Shape-4"
                        data-name="Shape"
                        d="M553.83,859.36h-80a160,160,0,0,0-320,0c-13.21-108.28,42.57-209.08,132.86-258.29,132.52-4.61,248.83,92.89,265.19,227A259.22,259.22,0,0,1,553.83,859.36Z"
                        fill="url(#linear-gradient-6)"
                    />
                    <path
                        id="ShadowDark-3"
                        data-name="ShadowDark"
                        d="M553.83,859.36H529.06q-.39-4.71-1-9.45C515.05,743.1,431.63,632.09,294,632.09,216,675.7,189.43,721.94,163.69,804a253.93,253.93,0,0,0-9.1,39.93q-.74,7.62-.74,15.42c-.2-1.68-.39-3.35-.56-5A258.73,258.73,0,0,1,286.71,601.07,258.66,258.66,0,0,1,553.83,859.36Z"
                        fill="url(#linear-gradient-7)"
                    />
                </g>
            </svg>
            {/* <img src={require('../../../assets/logo.svg')} alt="Digibear logo" width="1rem" height="1rem" /> */}
        </FooterWrapper>
    );
};

export default Footer;
