// Ghost mask filter
function drawMask() {
    var positions = faceTracker.getCurrentPosition();
    if (positions != false) {
      push();
      translate(-94, -160); // offset adjustment
      image(ghostFace, positions[62][0], positions[62][1]);
      pop();
    }
  }
  
  // Dog Face filter
  function drawDogFace() {
    var positions = faceTracker.getCurrentPosition();
    if (positions != false) {
      for (var i = 0; i < positions.length; i++) {
        // Track nose point
        if (i == 62) {
          push();
          translate(-57, -20); // offset adjustment
          image(imgDogNose, positions[i][0], positions[i][1]);
          pop();
        }
        // Track right eye to locate right ear
        if (i == 20) {
          push();
          translate(-100, -150); // offset adjustment
          image(imgDogEarRight, positions[i][0], positions[i][1]);
          pop();
        }
        // Track left eye to locate left ear
        if (i == 16) {
            push();
            translate(-20, -150); // offset adjustment
            image(imgDogEarLeft, positions[i][0], positions[i][1]);
            pop();
        }
      }
    }
  }

  // Devil horns filter
  function devilHorn() {
    var positions = faceTracker.getCurrentPosition();
    if (positions != false) {
      for (var i = 0; i < positions.length; i++) {
        // Track right eye to locate right horn
        if (i == 20) {
          push();
          translate(-100, -150); // offset adjustment
          image(imgDevilHornRight, positions[i][0], positions[i][1]);
          pop();
        }
        // Track left eye to locate left horn
        if (i == 16) {
            push();
            translate(-20, -150); // offset adjustment
            image(imgDevilHornLeft, positions[i][0], positions[i][1]);
            pop();
        }
      }
    }
  }

  // Halo filter
  function drawHalo() {
    var positions = faceTracker.getCurrentPosition();
    if (positions != false) {
      for (var i = 0; i < positions.length; i++) {
        // Track the center of eyes to locate the halo
        if (i == 33) {
          push();
          translate(-100, -250); // offset adjustment
          image(imgHalo, positions[i][0], positions[i][1]);
          pop();
        }
      }
    }
  }