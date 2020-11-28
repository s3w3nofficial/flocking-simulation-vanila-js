class Vector2 {
    x = 0
    y = 0

    constructor(x, y) {
        this.x = x
        this.y = y
    }

    static createVector() {
        let x = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1) / 1000
        let y = Math.ceil(Math.random() * 99) * (Math.round(Math.random()) ? 1 : -1) / 1000
        return new Vector2(x, y)
    }

    get magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }

    dot(vec) {
        return this.x * vec.x + this.y * vec.y
    }

    // https://en.wikipedia.org/wiki/Euclidean_distance
    dist(vec) {
        return Math.sqrt(Math.pow(this.x - vec.x, 2) + Math.pow(this.y - vec.y, 2))
    }

    static normalize(vec) {
        return new Vector2(vec.x / vec.magnitude, vec.y / vec.magnitude)
    }

    setMagnitude(scalar) {
        let vec = Vector2.normalize(this)
        this.x = vec.x
        this.y = vec.y
        this.mult(scalar)
    }

    limit(scalar) {
        let mSq = this.x * this.x + this.y * this.y
        if (mSq > scalar * scalar) {
            this.div(Math.sqrt(mSq))
            this.mult(scalar)
        }
    }

    set(x, y) {
        this.x = x
        this.y = y
    }

    add(val) {
        if (val instanceof Vector2) {
            this.x += val.x
            this.y += val.y
        } else {
            this.x += val
            this.y += val
        }
    }

    sub(val) {
        if (val instanceof Vector2) {
            this.x -= val.x
            this.y -= val.y
        } else {
            this.x -= val
            this.y -= val
        }
    }

    mult(val) {
        if (val instanceof Vector2) {
            this.x *= val.x
            this.y *= val.y
        } else {
            this.x *= val
            this.y *= val
        }
    }

    div(val) {
        if (val instanceof Vector2) {
            this.x /= val.x
            this.y /= val.y
        } else {
            this.x /= val
            this.y /= val
        }
    }
}