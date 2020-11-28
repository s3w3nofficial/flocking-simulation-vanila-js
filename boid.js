class Boid {
    constructor() {
        this.position = new Vector2(random(0, WIDTH), random(0, HEIGHT))
        this.velocity = Vector2.createVector()
        this.velocity.setMagnitude(random(2, 4))
        this.acceleration = new Vector2(0, 0)
        this.maxForce = 0.2
        this.maxSpeed = 5
    }

    edges() {
        if (this.position.x > WIDTH) {
            this.position.x = 0
        } else if (this.position.x < 0) {
            this.position.x = WIDTH
        }

        if (this.position.y > HEIGHT) {
            this.position.y = 0
        } else if (this.position.y < 0) {
            this.position.y = HEIGHT
        }
    }

    align(boids) {
        let perceptionRadius = 25
        let steering = new Vector2(0, 0)
        let total = 0
        for (let other of boids) {
            if (other != this && this.position.dist(other.position) < perceptionRadius) {
                steering.add(other.velocity)
                total++
            }
        }
        if (total > 0) {
            steering.div(total)
            steering.setMagnitude(this.maxSpeed)
            steering.sub(this.velocity)
            steering.limit(this.maxForce)
        }
        return steering
    }

    cohesion(boids) {
        let perceptionRadius = 50
        let steering = new Vector2(0, 0)
        let total = 0
        for (let other of boids) {
            if (other != this && this.position.dist(other.position) < perceptionRadius) {
                steering.add(other.position)
                total++
            }
        }
        if (total > 0) {
            steering.div(total)
            steering.sub(this.position)
            steering.setMagnitude(this.maxSpeed)
            steering.sub(this.velocity)
            steering.limit(this.maxForce)
        }
        return steering
    }

    separation(boids) {
        let perceptionRadius = 24
        let steering = new Vector2(0, 0)
        let total = 0
        for (let other of boids) {
            const distance = this.position.dist(other.position)
            if (other != this && distance < perceptionRadius) {
                let diff = new Vector2(this.position.x - other.position.x, this.position.y - other.position.y)
                diff.div(distance)
                steering.add(diff)
                total++
            }
        }
        if (total > 0) {
            steering.div(total)
            steering.setMagnitude(this.maxSpeed)
            steering.sub(this.velocity)
            steering.limit(this.maxForce)
        }
        return steering
    }

    flock(boids) {
        let aligment = this.align(boids)
        let cohesion = this.cohesion(boids)
        let separation = this.separation(boids)

        aligment.mult(ALIGMENT)
        cohesion.mult(COHESION)
        separation.mult(SEPARATION)

        this.acceleration.add(aligment)
        this.acceleration.add(cohesion)
        this.acceleration.add(separation)
    }

    update() {
        this.position.add(this.velocity)
        this.velocity.add(this.acceleration)
        this.velocity.limit(this.maxSpeed)
        this.acceleration.mult(0)
    }

    show() {
        drawRect(10, 10, this.position.x, this.position.y, 'white')
    }
}

function random(min, max) {
    return Math.random() * (max - min + 1) + min
}