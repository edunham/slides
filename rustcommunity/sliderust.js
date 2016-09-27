window.addEventListener('load', function () {
    // Put each <h1> and subsequent content into its own <section>.
    function makeSections(node) {
        var sections = [];
        while (true) {
            sections.push(document.createElement('section'));
            var section = sections[sections.length - 1];
            var sib;
            while (true) {
                sib = node.nextSibling;
                if (sib === null) {
                    section.appendChild(node);
                    return sections;
                }
                if (sib.nodeName === 'H1') {
                    break;
                }
                section.appendChild(node);
                node = sib;
            }
            node = sib;
        }
    }

    var title = document.getElementsByClassName('title')[0];
    [].forEach.call(makeSections(title), function (x) {
        document.body.appendChild(x);
    });

    var sections = document.getElementsByTagName('section');
    var current = 0;
    function update() {
        [].forEach.call(sections, function (x, i) {
            x.className = (i === 0) ? 'title-slide' : '';
        });
        if (current < 0)
            current = 0;
        if (current >= sections.length)
            current = sections.length - 1;
        sections[current].className += ' current';
    }

    update();

    function recolor() {
        console.log(current)
        // 20 slides
        var c = (current +1) * 9 ;
        //color = `rgb(${255-c}, 255, ${255-c})`;
        //color = `3em solid rgb(${255-c}, ${255 - (c/2)}, ${255-c})`;
        color = `3em solid rgb(${60-(c/2)}, ${c}, ${30-(c/2)})`;
        console.log(color);
        //document.body.style.backgroundColor = color;
        document.body.style.border = color;
    }

    document.body.addEventListener('keydown', function (ev) {
        switch (ev.keyCode) {
            case 39: current++; break;
            case 37: current--; break;
        }
        recolor();
        update();
    });
});
