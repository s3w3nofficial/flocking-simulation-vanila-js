//let v = Vector2.createVector()
let v = new Vector2(5, 12)
console.log(`x: ${v.x}, y: ${v.y}, mag: ${v.magnitude}`)

let v2 = new Vector2(12, 5)
console.log(`x: ${v2.x}, y: ${v2.y}, mag: ${v2.magnitude}`)

console.log(`dot product of v1 and v2: ${v.dot(v2)}`)
console.log(`distance between v1 and v2: ${v.dist(v2)}`)