function createBackgroundSVG () {
    var svgns = 'http://www.w3.org/2000/svg';
    var svgContainer = document.getElementById('background-svg');
    var background = createBackground(svgns);
    var sun = createSun(svgns);
    var firstSunLine = SunLine(790, 50, 850, 30, svgns);
    var secondSunLine = SunLine(750, 110, 850, 70, svgns);
    var thirdSunLine = SunLine(810, 140, 860, 110, svgns);
    var fourthSunLine = SunLine(800, 215, 880, 150, svgns);
    var fiftSunLIne = SunLine(880, 215, 910, 170, svgns);
    var sixthSunLIne = SunLine(910, 265, 950, 180, svgns);
    

    svgContainer.appendChild(background);
    svgContainer.appendChild(sun);
    svgContainer.appendChild(firstSunLine);
    svgContainer.appendChild(secondSunLine);
    svgContainer.appendChild(thirdSunLine);
    svgContainer.appendChild(fourthSunLine);
    svgContainer.appendChild(fiftSunLIne);
    svgContainer.appendChild(sixthSunLIne);
}

function createBackground (svgns){
    var background = document.createElementNS(svgns, 'rect');
    background.setAttribute('id', 'backround');
    background.setAttribute('width', '1024');
    background.setAttribute('height', '600');
    background.setAttribute('style', 'fill:#CCFFE5;');
    
    return background;
}

function createSun (svgns) {
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

function SunLine (x1, y1, x2, y2, svgns) {
   var sunLine = document.createElementNS(svgns, 'line');
    sunLine.setAttribute('class', 'sunLine');
    sunLine.setAttribute('x1', x1);
    sunLine.setAttribute('y1', y1);
    sunLine.setAttribute('x2', x2);
    sunLine.setAttribute('y2', y2);
    sunLine.setAttribute('style', 'stroke:yellow;stroke-width:3');

    return sunLine;
}
