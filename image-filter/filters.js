// Clarendon: adds light to lighter areas and dark to darker areas
function clarendon() {
	brighten(0.1);
	contrast(0.1);
	saturation(0.15);
}

// Gingham: Vintage-inspired, taking some color out
function gingham() {
	sepia(0.04);
	contrast(-0.15);
}

// Moon: B/W, increase brightness and decrease contrast
function moon() {
	grayscale(1);
	contrast(-0.04);
	brighten(0.1);
}

// Lark: Brightens and intensifies colours but not red hues
function lark() {
	brighten(0.08);
	RGBFilter([1, 1.03, 1.05]);
	saturation(0.12);
}

// Reyes: a new vintage filter, gives your photos a “dusty” look
function reyes() {
	sepia(0.4);
	brighten(0.13);
	contrast(-0.05);
}

// Juno: Brightens colors, and intensifies red and yellow hues
function juno() {
	RGBFilter([1.01, 1.04, 1]);
	saturation(0.3);
}

// Slumber: Desaturates the image as well as adds haze for a retro, dreamy look – with an emphasis on blacks and blues
function slumber() {
	brighten(0.1);
	saturation(-0.5);
}

// Crema: Adds a creamy look that both warms and cools the image
function crema() {
	RGBFilter([1.04, 1, 1.02]);
	saturation(-0.05);
}

// Ludwig: A slight hint of desaturation that also enhances light
function ludwig() {
	brighten(0.05);
	saturation(-0.03);
}

// Aden: This filter gives a blue/pink natural look
function aden() {
	colorFilter([228, 130, 225, 0.13]);
	saturation(-0.2);
}

// Perpetua: Adding a pastel look, this filter is ideal for portraits
function perpetua() {
	RGBFilter([1.05, 1.1, 1]);
}

// Amaro: Adds light to an image, with the focus on the centre
function amaro() {
	saturation(0.3);
	brighten(0.15);
}

// Mayfair: Applies a warm pink tone, subtle vignetting to brighten the photograph center and a thin black border
function mayfair() {
	colorFilter([230, 115, 108, 0.05]);
	saturation(0.15);
}

// Rise: Adds a "glow" to the image, with softer lighting of the subject
function rise() {
	colorFilter([255, 170, 0, 0.1]);
	brighten(0.09);
	saturation(0.1);
}

// Hudson: Creates an "icy" illusion with heightened shadows, cool tint and dodged center
function hudson() {
	RGBFilter([1, 1, 1.25]);
	contrast(0.1);
	brighten(0.15);
}

// Valencia: Fades the image by increasing exposure and warming the colors, to give it an antique feel
function valencia() {
	colorFilter([255, 225, 80, 0.08]);
	saturation(0.1);
	contrast(0.05);
}

// X-Pro II: Increases color vibrance with a golden tint, high contrast and slight vignette added to the edges
function xpro2() {
	colorFilter([255, 255, 0, 0.07]);
	saturation(0.2);
	contrast(0.15);
}

// Sierra: Gives a faded, softer look
function sierra() {
	contrast(-0.15);
	saturation(0.1);
}

// Willow: A monochromatic filter with subtle purple tones and a translucent white border
function willow() {
	grayscale(1);
	colorFilter([100, 28, 210, 0.03]);
	brighten(0.1);
}

// Lo-Fi: Enriches color and adds strong shadows through the use of saturation and "warming" the temperature
function lofi() {
	contrast(0.15);
	saturation(0.2);
}

// Inkwell: Direct shift to black and white
function inkwell() {
	grayscale(1);
}

// Hefe: Hight contrast and saturation, with a similar effect to Lo-Fi but not quite as dramatic
function hefe() {
	contrast(0.1);
	saturation(0.15);
}

// Nashville: Warms the temperature, lowers contrast and increases exposure to give a light "pink" tint – making it feel "nostalgic"
function nashville() {
	colorFilter([220, 115, 188, 0.12]);
	contrast(-0.05);
}

// Stinson: washing out the colors ever so slightly
function stinson() {
	brighten(0.1);
	sepia(0.3);
}

// Vesper: adds a yellow tint that
function vesper() {
	colorFilter([255, 225, 0, 0.05]);
	brighten(0.06);
	contrast(0.06);
}

// Earlybird: Gives an older look with a sepia tint and warm temperature
function earlybird() {
	colorFilter([255, 165, 40, 0.2]);
}

// Brannan: Increases contrast and exposure and adds a metallic tint
function brannan() {
	contrast(0.2);
	colorFilter([140, 10, 185, 0.1]);
}

// Sutro: Burns photo edges, increases highlights and shadows dramatically with a focus on purple and brown colors
function sturo() {
	brighten(-0.1);
	saturation(-0.1);
}

// Toaster: Ages the image by "burning" the centre and adds a dramatic vignette
function toaster() {
	sepia(0.1);
	colorFilter([255, 145, 0, 0.2]);
}

// Walden: Increases exposure and adds a yellow tint
function walden() {
	brighten(0.1);
	colorFilter([255, 255, 0, 0.2]);
}

// 1977: The increased exposure with a red tint gives the photograph a rosy, brighter, faded look
function f1977() {
	colorFilter([255, 25, 0, 0.15]);
	brighten(0.1);
}

// Kelvin: Increases saturation and temperature to give it a radiant "glow"
function kelvin() {
	colorFilter([255, 140, 0, 0.1]);
	RGBFilter([1.15, 1.05, 1]);
	saturation(0.35);
}

// Maven: darkens images, increases shadows, and adds a slightly yellow tint overal
function maven() {
	colorFilter([225, 240, 0, 0.1]);
	saturation(0.25);
	contrast(0.05);
}

// Ginza: brightens and adds a warm glow
function ginza() {
	sepia(0.06);
	brighten(0.1);
}

// Skyline: brightens to the image pop
function skyline() {
	saturation(0.35);
	brighten(0.1);
}

// Dogpatch: increases the contrast, while washing out the lighter colors
function dogpatch() {
	contrast(0.15);
	brighten(0.1);
}

// Brooklyn
function brooklyn() {
	colorFilter([25, 240, 252, 0.05]);
	sepia(0.3);
}

// Helena: adds an orange and teal vibe
function helena() {
	colorFilter([208, 208, 86, 0.2]);
	contrast(0.15);
}

// Ashby: gives images a great golden glow and a subtle vintage feel
function ashby() {
	colorFilter([255, 160, 25, 0.1]);
	brighten(0.1);
}

// Charmes: a high contrast filter, warming up colors in your image with a red tint
function charmes() {
	colorFilter([255, 50, 80, 0.12]);
	contrast(0.05);
}

// Details about instagram filters - http://lucillezimmerman.com/2017/01/07/instagramfilter/
// Reference https://github.com/girliemac/filterous-2/blob/master/lib/instaFilters.js