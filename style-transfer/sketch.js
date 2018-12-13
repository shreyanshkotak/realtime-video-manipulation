// Reference code link: https://github.com/ml5js/ml5-examples/tree/master/p5js/StyleTransfer/StyleTransfer_Video/

var style;
var video;
var isTransferring = false;
var resultImg;

var selected = 0;

var la_muse, mathura, matildePerez, matta, rainPrincess, scream, udnie, wave, wreck; // variables for source images of styles

function preload() {
  // preload style images
  la_muse = loadImage("img/la_muse.jpg");
  mathura = loadImage("img/mathura.jpg");
  matildePerez = loadImage("img/matilde_perez.jpg");
  matta = loadImage("img/matta.jpg");
  rainPrincess = loadImage("img/rain_princess.jpg");
  scream = loadImage("img/scream.jpg");
  udnie = loadImage("img/udnie.jpg");
  wave = loadImage("img/wave.jpg");
  wreck = loadImage("img/wreck.jpg");
}

function setup() {
  createCanvas(800, 600);
  background(255);

  video = createCapture(VIDEO); // Capture on Video from Webcam
  video.hide(); // hide default HTML video

  // The results image from the style transfer
  resultImg = createImg(''); // create an empty image
  resultImg.hide(); // hide default HTML of the image 

  var sel = createSelect();
  sel.position(400, 320);
  // list of available styles
  var selectList = ['La Muse', 'Mathura', 'Matilde Perez', 'Matta', 'Rain Princess', 'Scream', 'Udnie', 'Wave', 'Wreck'];
  for (var i = 0; i < selectList.length; i++) {
    sel.option(selectList[i], i);
  }
  sel.changed(applyFilter);

  // start stop button
  var startstop = createButton('Start');
  startstop.id('startStop');
  startstop.position(325, 320);

  // Start and stop the transfer process
  select('#startStop').mousePressed(startStop);

  // Create a new Style Transfer method with a defined style.
  style = ml5.styleTransfer('models/la_muse', video, modelLoaded); // default style
  image(la_muse, 400, 0, 400, 300);
}

function applyFilter() {
  selected = this.selected();
  console.log(selected);
  switch(selected) {
    case '0': style = ml5.styleTransfer('models/la_muse', video, modelLoaded); image(la_muse, 400, 0, 400, 300); break;
    case '1': style = ml5.styleTransfer('models/mathura', video, modelLoaded); image(mathura, 400, 0, 400, 300); break;
    case '2': style = ml5.styleTransfer('models/matilde_perez', video, modelLoaded); image(matildePerez, 400, 0, 400, 300); break;
    case '3': style = ml5.styleTransfer('models/matta', video, modelLoaded); image(matta, 400, 0, 400, 300); break;
    case '4': style = ml5.styleTransfer('models/rain_princess', video, modelLoaded); image(rainPrincess, 400, 0, 400, 300); break;
    case '5': style = ml5.styleTransfer('models/scream', video, modelLoaded); image(scream, 400, 0, 400, 300); break;
    case '6': style = ml5.styleTransfer('models/udnie', video, modelLoaded); image(udnie, 400, 0, 400, 300); break;
    case '7': style = ml5.styleTransfer('models/wave', video, modelLoaded); image(wave, 400, 0, 400, 300); break;
    case '8': style = ml5.styleTransfer('models/wreck', video, modelLoaded); image(wreck, 400, 0, 400, 300); break;
  }
}

function draw(){
  // Switch between showing the raw camera or the style
  if (isTransferring) {
    image(resultImg, 0, 0, 400, 300);
  } else {
    image(video, 0, 0, 400, 300);
  }
}

// Callback when the model has been loaded.
function modelLoaded() {
  console.log("Model Loaded");
}

// Start and stop the transfer process
function startStop() {
  if (isTransferring) {
    select('#startStop').html('Start');
  } else {
    select('#startStop').html('Stop');
    // Make a transfer using the video
    style.transfer(gotResult); 
  }
  isTransferring = !isTransferring;
}

// When we get the results, update the result image src
function gotResult(err, img) {
  resultImg.attribute('src', img.src);
  if (isTransferring) {
    style.transfer(gotResult); 
  }
}