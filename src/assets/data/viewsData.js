import React from 'react';

import htmlIcon from 'assets/images/htmlIcon.png';
import cssIcon from 'assets/images/cssIcon.png';
import sassIcon from 'assets/images/icons8-sass-avatar-144.png';
import jsIcon from 'assets/images/jsIcon.png';
import reactIcon from 'assets/images/reactIcon.png';
import jqueryIcon from 'assets/images/jqueryIcon.png';
import bootstrapIcon from 'assets/images/bootstrapIcon.png';
import scIcon from 'assets/images/scIcon.png';
import npmIcon from 'assets/images/npmIcon.png';
import sbIcon from 'assets/images/storybookIcon.png';
import adIcon from 'assets/images/atomicDesignIcon.png';
import githubIcon from 'assets/images/githubIcon.png';
import gitIcon from 'assets/images/gitIcon.png';
import yarnIcon from 'assets/images/yarnIcon.png';
import vscodeIcon from 'assets/images/vsCodeIcon.png';
import xdIcon from 'assets/images/xdIcon.png';
import eslintIcon from 'assets/images/esLintIcon.png';
import { TabletMobileCombo } from '@styled-icons/entypo';
import { MobileFriendly } from '@styled-icons/material-outlined';
import { Search } from '@styled-icons/fa-solid';

export const mainTechnologies = [
    { src: htmlIcon, alt: "htmlIcon", caption: "HTML5", },
    { src: cssIcon, alt: "cssIcon", caption: "CSS3" },
    { src: sassIcon, alt: "sassIcon", caption: "Sass/SCSS" },
    { src: jsIcon, alt: "jsIcon", caption: "JavaScript" },
    { src: reactIcon, alt: "reactIcon", caption: "ReactJS", },
];

export const secondaryTechnologies = [
    { src: jqueryIcon, alt: "jqueryIcon", caption: "jQuery" },
    { src: bootstrapIcon, alt: "bootstrapIcon", caption: "Bootstrap" },
    { src: scIcon, alt: "styledComponentsIcon", caption: "Styled Components" },
    { src: vscodeIcon, alt: "vscodeIcon", caption: "VSCode" },
    { src: xdIcon, alt: "xdIcon", caption: "Adobe XD" },
    { src: eslintIcon, alt: "eslintIcon", caption: "ESLint" },
    { src: npmIcon, alt: "npmIcon", caption: "NPM" },
    { src: yarnIcon, alt: "yarnIcon", caption: "YARN" },
    { src: sbIcon, alt: "sbIcon", caption: "Storybook" },
    { src: adIcon, alt: "adIcon", caption: "Atomic Design" },
    { src: gitIcon, alt: "gitIcon", caption: "Git" },
    { src: githubIcon, alt: "githubIcon", caption: "GitHub" },
];

export const additionalTechnologies = [
    {
        
        component: <TabletMobileCombo alt="rwdIcon" size="60" title="RWD" />,
        text: 'Responsive Web Design',
    },
    {
        
        component: <MobileFriendly alt="mobileFirstIcon" size="60" title="Mobile First" />,
        text: 'Mobile First',
    },
    {
        
        component: <Search alt="seoIcon" size="60" title="SEO" />,
        text: 'Search Engine Optimization',
    },
];