import React from 'react';

import htmlIcon from 'assets/images/icons8-html-5-144.png';
import cssIcon from 'assets/images/icons8-css3-144.png';
import sassIcon from 'assets/images/icons8-sass-avatar-144.png';
import jsIcon from 'assets/images/icons8-javascript-144.png';
import reactIcon from 'assets/images/iconfinder_React.js_logo_1174949.png';
import jqueryIcon from 'assets/images/iconfinder_jquery_308442.png';
import bootstrapIcon from 'assets/images/icons8-bootstrap-144.png';
import scIcon from 'assets/images/styled-components.png';
import npmIcon from 'assets/images/icons8-npm-144.png';
import sbIcon from 'assets/images/storybook-icon.png';
import adIcon from 'assets/images/atomicdesign.png';
import githubIcon from 'assets/images/GitHub-Mark-Light-120px-plus.png';
import gitIcon from 'assets/images/Git-Logo-White.png';
import yarnIcon from 'assets/images/yarn-icon.png';
import vscodeIcon from 'assets/images/vscode-icon.png';
import xdIcon from 'assets/images/xd-icon.png';
import eslintIcon from 'assets/images/eslint-icon.png';
import { TabletMobileCombo } from '@styled-icons/entypo';
import { MobileFriendly } from '@styled-icons/material-outlined';
import { Search } from '@styled-icons/fa-solid';

export const mainTechnologies = [
    { id: 1, src: htmlIcon, alt: "htmlIcon", caption: "HTML5", },
    { id: 2, src: cssIcon, alt: "cssIcon", caption: "CSS3" },
    { id: 3, src: sassIcon, alt: "sassIcon", caption: "Sass/SCSS" },
    { id: 4, src: jsIcon, alt: "jsIcon", caption: "JavaScript" },
    { id: 5, src: reactIcon, alt: "reactIcon", caption: "ReactJS", },
];

export const secondaryTechnologies = [
    { id: 6, src: jqueryIcon, alt: "jqueryIcon", caption: "jQuery" },
    { id: 7, src: bootstrapIcon, alt: "bootstrapIcon", caption: "Bootstrap" },
    { id: 8, src: scIcon, alt: "styledComponentsIcon", caption: "Styled Components" },
    { id: 9, src: vscodeIcon, alt: "vscodeIcon", caption: "VSCode" },
    { id: 54, src: xdIcon, alt: "xdIcon", caption: "Adobe XD" },
    { id: 54, src: eslintIcon, alt: "eslintIcon", caption: "ESLint" },
    { id: 11, src: npmIcon, alt: "npmIcon", caption: "NPM" },
    { id: 12, src: yarnIcon, alt: "yarnIcon", caption: "YARN" },
    { id: 12, src: sbIcon, alt: "sbIcon", caption: "Storybook" },
    { id: 13, src: adIcon, alt: "adIcon", caption: "Atomic Design" },
    { id: 14, src: gitIcon, alt: "gitIcon", caption: "Git" },
    { id: 15, src: githubIcon, alt: "githubIcon", caption: "GitHub" },
];

export const tertiaryTechnologies = [
    
];

export const additionalTechnologies = [
    {
        id: 16,
        component: <TabletMobileCombo alt="rwdIcon" size="60" title="RWD" />,
        text: 'Responsive Web Design',
    },
    {
        id: 17,
        component: <MobileFriendly alt="mobileFirstIcon" size="60" title="Mobile First" />,
        text: 'Mobile First',
    },
    {
        id: 18,
        component: <Search alt="seoIcon" size="60" title="SEO" />,
        text: 'Search Engine Optimization',
    },
];