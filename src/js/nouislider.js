var slider = document.getElementById('slider');

noUiSlider.create(slider, {
    start: [0, 900],
    connect: true,
    range: {
        'min': 0,
        'max': 1200
    }
});
