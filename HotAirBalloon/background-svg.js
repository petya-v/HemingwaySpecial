function createBackgroundSVG() {
    var svgns = 'http://www.w3.org/2000/svg',
        svgContainer = document.getElementById('background-svg'),
        background = createBackground(svgns),
        sun = createSun(svgns),
        firstSunLine = SunLine(850, 30, 790, 50, svgns),
        secondSunLine = SunLine(850, 70, 750, 110, svgns),
        thirdSunLine = SunLine(860, 110, 810, 140, svgns),
        fourthSunLine = SunLine(880, 150, 800, 215, svgns),
        fiftSunLIne = SunLine(910, 170, 880, 215, svgns),
        sixthSunLIne = SunLine(950, 180, 910, 265, svgns);


    svgContainer.appendChild(background);
    svgContainer.appendChild(sun);
    svgContainer.appendChild(firstSunLine);
    svgContainer.appendChild(secondSunLine);
    svgContainer.appendChild(thirdSunLine);
    svgContainer.appendChild(fourthSunLine);
    svgContainer.appendChild(fiftSunLIne);
    svgContainer.appendChild(sixthSunLIne);
}

function createBackground(svgns) {
    var background = document.createElementNS(svgns, 'rect');
    background.setAttribute('id', 'backround');
    background.setAttribute('width', '1024');
    background.setAttribute('height', '600');
    background.setAttribute('style', 'fill:#CCFFE5;');

    return background;
}

function createSun(svgns) {
    var sun = document.createElementNS(svgns, 'circle');
    sun.setAttribute('id', 'sun');
    sun.setAttribute('cx', '1018');
    sun.setAttribute('cy', '10');
    sun.setAttribute('r', '150');
    sun.setAttribute('stroke', '#F2D811');
    sun.setAttribute('stroke-width', '2');
    sun.setAttribute('fill', 'yellow');

    return sun;
}

function SunLine(x1, y1, x2, y2, svgns) {
    var sunLine = document.createElementNS(svgns, 'line');
    sunLine.setAttribute('class', 'sunLine');
    sunLine.setAttribute('x1', x1);
    sunLine.setAttribute('y1', y1);
    sunLine.setAttribute('x2', x2);
    sunLine.setAttribute('y2', y2);
    sunLine.setAttribute('style', 'stroke:yellow;stroke-width:3');

    return sunLine;
}
