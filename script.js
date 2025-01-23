document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('toggle');
    const image1 = 'istockphoto-635717386-612x612.jpg';
    const image2 = 'otot2ts.jpg';

    image.addEventListener('click', function() {
        if (image.src.includes(image1)) {
            image.src = image2;
        } else {
            image.src = image1;
        }
    });
});