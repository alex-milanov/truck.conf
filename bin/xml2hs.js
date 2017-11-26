'use strict';

const xml2json = require('xml2json');

const input = `<svg>
    <g id="front">
        <polygon points="0,64.1 0,78.6 5.8,84.4 5.8,61.1 2.9,61.1 " id="polygon7"></polygon>
        <path d="m 42.2,67 c -8.8,0 -16,7.2 -16,16 0,8.8 7.2,16 16,16 8.8,0 16,-7.2 16,-16 0,-8.8 -7.1,-16 -16,-16 z m 0,23.3 c -4,0 -7.3,-3.3 -7.3,-7.3 0,-4 3.3,-7.3 7.3,-7.3 4,0 7.3,3.3 7.3,7.3 0,4 -3.2,7.3 -7.3,7.3 z" id="path9"></path>
        <rect x="78.599998" y="72.800003" width="43.700001" height="13.6" id="rect11"></rect>
        <rect x="37.900002" y="20.4" width="5.8000002" height="14.6" id="rect13"></rect>
        <path d="M 61.1,11.6 61.1,0 C 61.1,0 21,1.3 13,2.3 9.3,2.8 5.7,8.1 5.7,11.7 l 55.4,0 z" id="path15"></path>
        <rect y="49.5" width="5.8000002" height="8.6999998" id="rect17" x="0"></rect>
        <path d="m 126.9,64.1 -1.9,0 -71.9,0 c 6.6,3.8 11,10.8 11,18.9 0,0.5 0,1 -0.1,1.4 l 3,0 0,-5.8 8.7,0 0,-8.7 49.5,0 0,8.7 1.7,0 0,-14.5 z" id="path19"></path>
        <path d="m 34.9,62.4 0,-4.2 -1.2,0 c -9,0 -16.2,7.3 -16.2,16.2 l 0,10 2.8,0 c 0,-0.4 0,-1 0,-1.4 0.1,-9.5 6.2,-17.5 14.6,-20.6 z" id="path21"></path>
        <path d="m 20,61.1 -11.3,0 0,23.3 5.8,0 0,-11.6 c 0,-0.1 0.1,-0.4 0.2,-0.6 0.6,-4.3 2.5,-8.1 5.3,-11.1 z" id="path23"></path>
        <path d="m 23.7,58.2 c 2.4,-1.5 5.2,-2.5 8.2,-2.8 l 0.2,-0.1 1.7,0 1.2,0 0,-17.4 -11.7,0 c -0.2,0 -0.4,0.1 -0.6,0.2 l -4.6,5.4 c -0.2,0.1 -0.4,0.2 -0.6,0.2 l -8.8,0 c -0.6,0 -1,-0.5 -1,-1.1 l 3.9,-24.3 c 0,-0.5 0.5,-0.9 1,-0.9 l 33.1,0 c 0.5,0 1,0.4 1,1 l 0,18.4 c 0,0.5 -0.4,1 -1,1 l -7.8,0 0,17.5 12.9,0 10.4,0 0,-40.7 -55.4,0 -4.1,27 -1.7,1 0,3.9 8.7,0 0,11.6 15,0 z" id="path25"></path>
        <g id="g27">
          <rect x="37.900002" y="58.200001" width="23.299999" height="2.9000001" id="rect29"></rect>
        </g>
        <line class="st0" x1="42.200001" y1="83" x2="126.9" y2="83" id="line31" style="fill:none;stroke:#bec7d0;stroke-miterlimit:10"></line>
        <line class="st0" x1="42.200001" y1="79.199997" x2="42.200001" y2="86.699997" id="line33" style="fill:none;stroke:#bec7d0;stroke-miterlimit:10"></line>
        <path d="M 126.9,83" id="path35"></path>
    </g>
    <g id="wheelbase">
        <rect id="wheelbase_black" x="126.75" y="64.099998" height="14.5" ng-attr-width="{{tsCtrl.getSVGWheelbase()}}" width="26.729999999999997"></rect>
        <rect id="wheelbase_grey" class="grey" x="126.75" y="82.5" height="1" ng-attr-width="{{tsCtrl.getSVGWheelbase()}}" width="26.729999999999997"></rect>
    </g>
    <g id="axle" ng-attr-transform="{{tsCtrl.getSVGWheelbaseShift()}}" transform="translate(21.229999999999997,0)">
        <path d="m 161.7,67 c -8.8,0 -16,7.2 -16,16 0,8.8 7.2,16 16,16 8.8,0 16,-7.2 16,-16 0,-8.8 -7.2,-16 -16,-16 z m 0,23.3 c -4,0 -7.3,-3.3 -7.3,-7.3 0,-4 3.3,-7.3 7.3,-7.3 4,0 7.3,3.3 7.3,7.3 -0.1,4 -3.3,7.3 -7.3,7.3 z" id="path43"></path>
        <path d="m 163.1,61.2 c 10.9,0 19.8,9.4 19.8,20.3 0,1.1 0.2,1.9 0,3 l 3.4,0 0,-17.5 -8.7,-8.7 -32,0 -8.7,8.7 0,17.5 3.5,0 c -0.2,-1.1 0,-1.8 0,-3 0,-10.9 8.9,-20.3 19.8,-20.3 l 2.9,0 z" id="path45"></path>
        <polygon points="186.4,64.1 189.3,67 189.3,78.6 195.1,78.6 195.1,64.1 " id="polygon47"></polygon>
        <line class="st0" x1="132" y1="83" x2="195.10001" y2="83" id="line49" style="fill:none;stroke:#bec7d0;stroke-miterlimit:10"></line>
        <line class="st0" x1="161.7" y1="79.199997" x2="161.7" y2="86.699997" id="line51" style="fill:none;stroke:#bec7d0;stroke-miterlimit:10"></line>
        <polygon points="133.9,78.6 133.9,67 136.9,64.1 132,64.1 132,78.6 " id="polygon53"></polygon>
    </g>
    <g id="overhang" ng-attr-transform="{{tsCtrl.getSVGWheelbaseShift()}}" transform="translate(21.229999999999997,0)">
        <rect id="overhang_black" x="195" y="64.099998" height="8.6999998" ng-attr-width="{{tsCtrl.getSVGOverhang()}}" width="11.784"></rect>
        <rect id="overhang_greynew" class="grey" x="195" y="82.5" height="1" ng-attr-width="{{tsCtrl.getSVGOverhang()}}" width="11.784"></rect>
    </g>
    <g id="tail" ng-attr-transform="{{tsCtrl.getSVGTailShift()}}" transform="translate(28.613999999999997,0)">
        <polygon points="199.3,64.1 199.3,72.8 205,72.8 208,69.9 208,67 205,64.1 " id="polygon61"></polygon>
        <line class="st0" x1="199.3" y1="83" x2="207.5" y2="83" id="line63" style="fill:none;stroke:#bec7d0;stroke-miterlimit:10"></line>
        <line class="st0" x1="207.5" y1="79.199997" x2="207.5" y2="86.699997" id="line65" style="fill:none;stroke:#bec7d0;stroke-miterlimit:10"></line>
    </g>
    <g class="txt">
        <!----><text x="87" y="97" class="txt" ng-if="tsCtrl.wheelbase" ng-bind="tsCtrl.wheelbase + ' mm'">3875 mm</text><!---->
        <!----><text x="180" y="97" ng-attr-transform="{{tsCtrl.getSVGWheelbaseShift()}}" ng-if="tsCtrl.overhang" ng-bind="tsCtrl.overhang + ' mm'" transform="translate(21.229999999999997,0)">1125 mm</text><!---->
    </g>
</svg>
`;

const getAttrs = o => Object.keys(o).filter(attr => !(o[attr] instanceof Array))
	.reduce((o2, attr) => Object.assign({}, o2, {
		[attr]: o[attr]
	}), {});

const getNodes = (o, lvl = 0) => Object.keys(o).filter(key => o[key] instanceof Array)
	.reduce((nodes, name) => [].concat(nodes, o[name].map(content => ({
		name,
		content,
		lvl
	}))), []);

const _p = n => '\t' + (n > 0 ? _p(n - 1) : '');

const prepJson = (inp, lvl = 0) => JSON.stringify(inp, null, '\t')
	.replace(/"/ig, `'`)
	.split('\n')
	.map((row, i) => i === 0 ? row : `${_p(lvl + 2)}${row}`)
	.join('\n')
;

const parseNode = (({name, content, lvl = 0}) =>
	`\n${_p(lvl)}	h('${name}', {
	${_p(lvl)}	attrs: ${prepJson(getAttrs(content), lvl)}
	${_p(lvl)}}, [${getNodes(content, lvl + 1).map(parseNode).join(',\n')}
	${_p(lvl)}])`
);

const step2 = JSON.parse(xml2json.toJson(input, {
	coerce: true,
	arrayNotation: true
}));
console.log(JSON.stringify(step2, null, 2));
console.log(parseNode({name: 'svg', content: step2.svg[0]}));
