const ol = document.querySelector('ol')

const first = ol.children[0];
const second = ol.children[1];
const third = ol.children[2];
const four = ol.children[3];
const last = ol.children[4];

last.appendChild(four);
last.appendChild(third);
last.appendChild(second);
last.appendChild(first);


const section = document.querySelectorAll('section');

section[1].appendChild(section[2].children[0]);
section[2].appendChild(section[1].children[0]);

section[2].remove();
