

function ask() 
{
     var magicImages = [{
        src: "magic/magic8ball_1.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_2.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_3.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_4.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_5.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_6.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_7.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_8.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_9.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_10.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_11.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_12.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_13.png",
        width: "500",
        height: "500"
    }, {
        src: "magic/magic8ball_14.png",
        width: "300",
        height: "500"
    }, {
        src: "magic/magic8ball_15.png",
        width: "300",
        height: "500"
    }, {
        src: "magic/magic8ball_16.png",
        width: "300",
        height: "500"
    }, {
        src: "magic/magic8ball_17.png",
        width: "300",
        height: "500"
    }, {
        src: "magic/magic8ball_18.png",
        width: "300",
        height: "500"
    }, {
        src: "magic/magic8ball_19.png",
        width: "300",
        height: "500"
    }, {
        src: "magic/magic8ball_20.png",
        width: "300",
        height: "500"
    }];
    
    var randomNumber = [];
    for (var i = 0, j = magicImages.length; i < j; i++) {
        randomNumber[i] = new Image();
        randomNumber[i].src = magicImages[i].src;
        randomNumber[i].width = magicImages[i].width;
        randomNumber[i].height = magicImages[i].height;
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

/*

     magicImages = [
        'magic/magic8ball_1.png',
        'magic/magic8ball_2.png',
        'magic/magic8ball_3.png',
        'magic/magic8ball_4.png',
        'magic/magic8ball_5.png',
        'magic/magic8ball_6.png',
        'magic/magic8ball_7.png',
        'magic/magic8ball_8.png',
        'magic/magic8ball_9.png',
        'magic/magic8ball_10.png',
        'magic/magic8ball_11.png',
        'magic/magic8ball_12.png',
        'magic/magic8ball_13.png',
        'magic/magic8ball_14.png',
        'magic/magic8ball_15.png',
        'magic/magic8ball_16.png',
        'magic/magic8ball_17.png',
        'magic/magic8ball_18.png',
        'magic/magic8ball_19.png',
        'magic/magic8ball_20.png',
        ];
    

 function ask() 
{ 
    
        randomResponse = Math.floor(Math.random() * magicImages.length);
            
        
        selectedResponse = magicImages [randomResponse]
    
         document.getElementById ('answers').src = `./magic/${selectedResponse}`
     
}

*/

