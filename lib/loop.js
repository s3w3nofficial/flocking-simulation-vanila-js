const fps = 60
let then = Date.now()
let firstRun = false
let canvas
let context
let width
let height

function createCanvas(w, h) {
    document.getElementsByTagName('body')[0].appendChild(document.createElement('canvas'))
    canvas = document.getElementsByTagName('canvas')[0]
    width = w
    height = h
    canvas.width = width
    canvas.height = height
    context = canvas.getContext('2d')
}

function background(color) {
    context.fillStyle = color;
    context.fillRect(0, 0, width, height);
}

function drawRect(w, h, x, y, color) {
    context.fillStyle = color;
    context.fillRect(x, y, w, h);
}

function loop() {
    if (!firstRun) {
        setup()
        firstRun = true
    }

    requestAnimationFrame( loop )

    let now = Date.now()
    elapsed = now - then;

    if (elapsed > fps / 1000) {
        then = now - (elapsed % fps / 1000)

        draw()
    }
}

requestAnimationFrame( loop )