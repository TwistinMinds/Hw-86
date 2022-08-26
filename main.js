var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
    fabric.image.fromURL('BirthdayImage.jpg', function (Img) {
        block_Image_object = Img;

        block_Image_object.ScaleToWidth(700);
        block_Image_object.ScaleToHeight(510);
        block_Image_object.set({
            top: 0;
            left: 0;
        });
        canvas.add(block_Image_object);
    });

    function playSound() {
        x.play();
    }
