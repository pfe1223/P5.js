var rg, button;

function setup() {
    noCanvas();
    rg = new RiGrammar();
    rg.addRule('<start>', 'The <N> <V>.');
    rg.addRule('<N>', 'cat | dog | butterfly');
    rg.addRule('<V>', '<present> | <past>');
    rg.addRule('<present>', 'meows | barks | flutters');
    rg.addRule('<past>', 'meowed | barked | fluttered');
    
    button = createButton('Generate');
    button.mouseClicked(makeSentence);
}

function makeSentence(){
    createP(rg.expand());
}