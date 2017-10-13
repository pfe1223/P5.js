var video;

function setup() {
  createElement('h1', "Using the Webcam");

  createP("Students will be tasked with creating a project that pulls in video from their computer's webcam. Then then have to modify and write this video to the screen. The students then have to do a writeup on how their code relates to the ideas of l'écriture de soi or le regard de l'autre.");

  createP("The video stream below is the 'pristine' version, free from any distortion. One could say that this video reflects some objective truth about oneself or the other. This is who we (or they) really are.")

  video = createCapture(VIDEO);
  video.size(640, 480);
  video.id('p5video');

  createP("This version, however, is distorted. This distortion represents the ways in which we think of ourselves (or the other). Our point of view differs from the objective truth. Perhaps we embellish or ignore certain aspects.")

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
