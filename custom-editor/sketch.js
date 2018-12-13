var vid; // Source Video

// Adjustment sliders
var sepiaSlider, brightenessSlider, saturationSlider, contrastSlider, redSlider, greenSlider, blueSlider; 

function setup() {
	createCanvas(800, windowHeight);
  
  vid = createCapture(VIDEO); // capture only video from webcam
	vid.size(800, 600);
	vid.hide(); // hide html video
  
  background(255);
  pixelDensity(1);	// Life Saver for high DPI screens
  
  textSize(16);

  loadSliders();
  fill(0);
  noStroke();
}

// setup all the adjustment sliders
function loadSliders() {
  
  // Adjust the sepia tone of image
  sepiaSlider = createSlider(0, 100, 0);
  sepiaSlider.position(350, 630);
  
  // Adjust the brightness of image
  brightenessSlider = createSlider(-100, 100, 0);
  brightenessSlider.position(350, 660);

  // Adjust the saturation of image 
  saturationSlider = createSlider(-100, 100, 0);
  saturationSlider.position(350, 690);

  // Adjust the contrast of the image
  contrastSlider = createSlider(-100, 100, 0);
  contrastSlider.position(350, 720);

  // Adjust the amount of reds in the image
  redSlider = createSlider(0, 100, 100);
  redSlider.position(350, 750);

  // Adjust the amount of greens in the image
  greenSlider = createSlider(0, 100, 100);
  greenSlider.position(350, 780);

  // Adjust the amount of blues in the image
  blueSlider = createSlider(0, 100, 100);
  blueSlider.position(350, 810);

}

function draw() {
  image(vid, 0, 0, 800, 600); // Render the video from the webcam
  
  // Apply filters on the video from the slider values
  RGBFilter([redSlider.value()/100.0, greenSlider.value()/100.0, blueSlider.value()/100.0]);
  sepiaAmt(sepiaSlider.value()/100.0);
  brighten(brightenessSlider.value()/100.0);  
  saturate(saturationSlider.value()/100.0);
  contrast(contrastSlider.value()/100.0);

  fill(255);
  noStroke();
  rect(0, 600, 800, height - 600); // Slider canvvas area

  // Filter labels
  fill(0);
  textAlign(RIGHT);
  text("SEPIA", 335, 655);
  text("BRIGHTNESS", 335, 685);
  text("SATURATION", 335, 715);
  text("CONTRAST", 335, 745);
  text("RED", 335, 775);
  text("GREEN", 335, 805);
  text("BLUE", 335, 835);

  // Filter values
  textAlign(LEFT);
  text(sepiaSlider.value(), 500, 655);
  text(brightenessSlider.value(), 500, 685);
  text(saturationSlider.value(), 500, 715);
  text(contrastSlider.value(), 500, 745);
  text(redSlider.value(), 500, 775);
  text(greenSlider.value(), 500, 805);
  text(blueSlider.value(), 500, 835);
}