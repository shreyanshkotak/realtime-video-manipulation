var vid;
var selected = -1;

function setup() {
	createCanvas(800, 600);
  
  vid = createCapture(VIDEO); // capture only video from webcam
	vid.size(800, 600);
  vid.hide(); // hide HTML video 
  
	background(255);
  pixelDensity(1);	// Life Saver for high DPI screens
  
  var sel = createSelect();
  sel.position(350, 625);
  // filter options list
  var selectList = ['Clarendon', 'Gingham', 'Moon', 'Lark', 'Reyes', 'Juno', 'Slumber', 'Crema', 'Ludwig', 'Aden', 'Perpetua', 'Amaro', 'Mayfair', 'Rise', 'Hudson', 'Valencia', 'Xpro 2', 'Sierra', 'Willow', 'Lo-Fi', 'Inkwell', 'Hefe', 'Nashville', 'Stinson', 'Vesper', 'Earlybird', 'Brannan', 'Sturo', 'Toaster', 'Walden', '1977', 'Kelvin', 'Maven', 'Ginza', 'Skyline', 'Dogpatch', 'Brooklyn', 'Helena', 'Ashby', 'Charmes'];
  sel.option('Normal', -1); // Set default as no filter
  for (var i = 0; i < selectList.length; i++) {
    sel.option(selectList[i], i);
  }
  sel.changed(applyFilter);
}

// callback function
function applyFilter() {
  selected = this.selected();
}

function draw() {
  image(vid, 0, 0, 800, 600); // render video 

  // new instance of a filter 
  var filter = new ImageFilter(); 
  filter.addFilter(selected);
  
}	