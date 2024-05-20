let backButton = document.getElementById("back")
let nextButton = document.getElementById("next")
let screenOne = document.getElementById("screen")
let images = document.getElementById("imagecontainer")
let startLabel = document.getElementById("start-label")
let endLabel = document.getElementById("end-label")
let episodeLabel = document.getElementById("episodes-label")
let releaseLabel = document.getElementById("release-date-label")
let genreLabel = document.getElementById("genre-label")
let starterText = document.getElementById("homme-container")
let upperRow = document.getElementById("upper-cont")
let lowerRow = document.getElementById("lower-cont")
let leftIcon = document.getElementById("plusses")
let sliderValue = 5.5
let animeNumber = -1
let animePage = 0
let rotation = 360
let rotationback = -360

starterText.onclick = function() {
  setTimeout(() => {
    startLabel.classList.remove("opacity-off")
    endLabel.classList.remove("opacity-off")
    episodeLabel.classList.remove("opacity-off")
    releaseLabel.classList.remove("opacity-off")
    genreLabel.classList.remove("opacity-off")
    upperRow.classList.remove("upper-toggle")
    lowerRow.classList.remove("lower-toggle")
    symbolAni.classList.remove("opacity-off")
    leftIcon.classList.remove("opacity-off")
  }, 100);
  setTimeout(() => {
    starterText.style.display = "none"
    starterText.style.opacity = "0%"
    starterText.style.zIndex = '-1'
  }, 200);



  if (sliderValue > -38.5) {
      sliderValue -= 11;
  images.style.transform = `translateX(${sliderValue}em)`;
  if (animePage < 4) {
    animePage++
    if (animePage === 1) {
      setTimeout(() => {
        animeOne()
    }, 250);
    }
    if (animePage === 2) {
      setTimeout(() => {
        animeTwo()
    }, 250);
    }
    if (animePage === 3) {
      setTimeout(() => {
        animeThree()
    }, 250);
    }
    if (animePage === 4) {
      setTimeout(() => {
        animeFour()
    }, 250);  } } }

const subImages = images.querySelectorAll('.image-selector');
if (animeNumber >= 0) {
subImages[animeNumber].classList.remove('selected-image');
}
if (animeNumber < subImages.length - 1) {
  animeNumber++;
  screenOne.classList.toggle("changed")
  setTimeout(() => {
      screenOne.classList.remove("changed");
    }, 500)
}
subImages[animeNumber].classList.add('selected-image');
nextButton.classList.add("event-less")
setTimeout(() => {
  nextButton.classList.remove("event-less")
}, 500);

}

nextButton.addEventListener('click', () => {
  if (sliderValue > -38.5) {
        sliderValue -= 11;
    images.style.transform = `translateX(${sliderValue}em)`;

      nextButton.style.transform = `rotate(${rotation}deg)`
      rotation = rotation+360
    }
    if (animePage < 4) {
      animePage++
      if (animePage === 1) {
        setTimeout(() => {
          animeOne()
      }, 250);
      }
      if (animePage === 2) {
        setTimeout(() => {
          animeTwo()
      }, 250);
      }
      if (animePage === 3) {
        setTimeout(() => {
          animeThree()
      }, 250);
      }
      if (animePage === 4) {
        setTimeout(() => {
          animeFour()
      }, 250);
      } 
    } 

const subImages = images.querySelectorAll('.image-selector');
if (animeNumber >= 0) {
  subImages[animeNumber].classList.remove('selected-image');
}
if (animeNumber < subImages.length - 1) {
  animeNumber++;
  screenOne.classList.toggle("changed")
  setTimeout(() => {
      screenOne.classList.remove("changed");
    }, 500)
}
subImages[animeNumber].classList.add('selected-image');
nextButton.classList.add("event-less")
setTimeout(() => {
    nextButton.classList.remove("event-less")
}, 500)


  }
);

backButton.addEventListener('click', () => {
  if (sliderValue < -5.5) {
      sliderValue += 11;
  images.style.transform = `translateX(${sliderValue}em)`;
  backButton.style.transform = `rotate(${rotationback}deg)`
  rotationback = rotationback-360
  }  
  if (animePage > 0) {
    animePage--
    if (animePage === 1) {
      setTimeout(() => {
        animeOne()
    }, 250);
    }
    if (animePage === 2) {
      setTimeout(() => {
        animeTwo()
    }, 250);
    }
    if (animePage === 3) {
      setTimeout(() => {
        animeThree()
    }, 250);
    }
    if (animePage === 4) {
      setTimeout(() => {
        animeFour()
    }, 250);
    }
  }

  const subImages = images.querySelectorAll('.image-selector');
  if (animeNumber >= 0) {
    subImages[animeNumber].classList.remove('selected-image');
  }
  if (animeNumber > 0) {
    animeNumber--;
    screenOne.classList.toggle("changedOne")
    setTimeout(() => {
        screenOne.classList.remove("changedOne");
      }, 500)
  }
  subImages[animeNumber].classList.add('selected-image');
  backButton.classList.add("event-less")
  setTimeout(() => {
      backButton.classList.remove("event-less")
  }, 500);
  }
);
