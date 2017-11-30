var video;

function setup() {
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.id('p5video');

    canvas = createCanvas(640, 480, WEBGL);
    canvas.id('p5canvas');

    var seriously = new Seriously();

    var src = seriously.source('#p5video');
    var target = seriously.target('#p5canvas');

    var e1 = seriously.effect('tvglitch');
    e1.source = src;

    var e2 = seriously.effect('sepia');
    e2.source = e1
    target.source = e2;

    seriously.go();
}