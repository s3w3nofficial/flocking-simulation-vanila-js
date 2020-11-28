let flock = []
const WIDTH = 640
const HEIGHT = 360
const BOID_SIZE = 5
let ALIGMENT = 4
let COHESION = 1
let SEPARATION = 2

function setup() {
    createCanvas(600, 400)
    background('black')

    for (let i = 0; i < 100; i++) {
        let boid = new Boid()
        flock.push(boid)
    }
}

function draw() {
    background('black')

    for (let boid of flock) {
        boid.edges()
        boid.flock(flock)
        boid.update()
        boid.show()
    }
}