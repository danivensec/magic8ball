function ask() {
     var magicImages = [{
        src: "magic/magic8ball_1.png",
        
    }, {
        src: "magic/magic8ball_2.png",
    }, {
        src: "magic/magic8ball_3.png",
    }, {
        src: "magic/magic8ball_4.png",
    }, {
        src: "magic/magic8ball_5.png",
    }, {
        src: "magic/magic8ball_6.png",
    }, {
        src: "magic/magic8ball_7.png",
    }, {
        src: "magic/magic8ball_8.png",
    }, {
        src: "magic/magic8ball_9.png",
    }, {
        src: "magic/magic8ball_10.png",
    }, {
        src: "magic/magic8ball_11.png",
    }, {
        src: "magic/magic8ball_12.png",
    }, {
        src: "magic/magic8ball_13.png",
    }, {
        src: "magic/magic8ball_14.png",
    }, {
        src: "magic/magic8ball_15.png",
    }, {
        src: "magic/magic8ball_16.png",
    }, {
        src: "magic/magic8ball_17.png",
    }, {
        src: "magic/magic8ball_18.png",
    }, {
        src: "magic/magic8ball_19.png",
    }, {
        src: "magic/magic8ball_20.png",
    }];
    
    var randomNumber = [];
    for (var i = 0, j = magicImages.length; i < j; i++) {
        randomNumber[i] = new Image();
        randomNumber[i].src = magicImages[i].src;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
        imn = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomNumber[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, randomNumber.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}


function refresh() {
    window.location.reload();
};
