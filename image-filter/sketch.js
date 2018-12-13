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
  
  // apply filter based on choice
  switch(selected) {
    case '-1': break;
    case '0': clarendon();; break;
    case '1': gingham();  break;
    case '2': moon(); break;
    case '3': lark(); break;
    case '4': reyes(); break;
    case '5': juno(); break;
    case '6': slumber(); break;
    case '7': crema(); break;
    case '8': ludwig(); break;
    case '9': aden(); break;
    case '10': perpetua(); break;
    case '11': amaro(); break;
    case '12': mayfair(); break;
    case '13': rise(); break;
    case '14': hudson(); break;
    case '15': valencia(); break;
    case '16': xpro2(); break;
    case '17': sierra(); break;
    case '18': willow(); break;
    case '19': lofi(); break;
    case '20': inkwell(); break;
    case '21': hefe(); break;
    case '22': nashville(); break;
    case '23': stinson(); break;
    case '24': vesper(); break;
    case '25': earlybird(); break;
    case '26': brannan(); break;
    case '27': sturo(); break;
    case '28': toaster(); break;
    case '29': walden(); break;
    case '30': f1977(); break;
    case '31': kelvin(); break;
    case '32': maven(); break;
    case '33': ginza(); break;
    case '34': skyline(); break;
    case '35': dogpatch(); break;
    case '36': brooklyn(); break;
    case '37': helena(); break;
    case '38': ashby(); break;
    case '39': charmes(); break;
  }	
}