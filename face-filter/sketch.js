// Refrence code link: https://github.com/auduno/clmtrackr

var faceTracker; // face tracking
var videoInput;

var imgDogNose, imgDogEarRight, imgDogEarLeft; // dog face
var ghostFace; // ghost face mask
var imgDevilHornRight, imgDevilHornLeft; // devil horns
var imgHalo; // halo

var selected = -1;

function preload() {
  // Dog face filter assets
  imgDogNose = loadImage("assets/dog-nose.png");
  imgDogEarRight = loadImage("assets/dog-ear-right.png");
  imgDogEarLeft = loadImage("assets/dog-ear-left.png");
  
  // Face Mask asset 
  ghostFace = loadImage("assets/face-mask.png");
  
  // Devil horn assets
  imgDevilHornRight = loadImage("assets/devil-horn-right.png");
  imgDevilHornLeft = loadImage("assets/devil-horn-left.png");

  // Halo asset
  imgHalo = loadImage("assets/halo.png");
}

function setup() {
  createCanvas(800, 600);

  // webcam capture
  videoInput = createCapture(VIDEO);
  videoInput.size(800, 600);
  videoInput.hide();

  // select filter
  var sel = createSelect();
  sel.position(325, 650);
  var selectList = ['Dog Filter', 'Ghost Face', 'Devil Horns', 'Halo']; // list of filters
  sel.option('Normal', -1); // Default no filter
  for (var i = 0; i < selectList.length; i++) {
    sel.option(selectList[i], i);
  }
  sel.changed(applyFilter);

  // tracker
  faceTracker = new clm.tracker();
  faceTracker.init(pModel);
  faceTracker.start(videoInput.elt);
}

// callback function
function applyFilter() {
  selected = this.selected(); // change filter type
}

function draw() {
  image(videoInput, 0, 0, 800, 600); // render video from webcam
  
  // apply filter based on choice
  switch(selected) {
    case '-1': break;
    case '0': drawDogFace(); break;
    case '1': drawMask(); break;
    case '2': devilHorn(); break;
    case '3': drawHalo(); break;
  }
}