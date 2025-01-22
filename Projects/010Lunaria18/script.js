let canvas = document.getElementById("canvas")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext('2d')
let starcount = 2500

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
    location.reload()
})

white = `#ffffff` + Math.floor((Math.random() * (100-60) + 60))

console. log(white);

function Circle(x, y, dx, dy, r) {

    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.r = r

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        c.strokeStyle = white
        c.stroke();
    }

    this.update = function() {
        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.r >innerHeight || this.y - this.r < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx
        this.y += this.dy

        this.draw()
}

}

let circlearr = []

for (let i = 0; i < starcount; i++) {
    let r = 0.3
    let x = Math.random() * window.innerWidth
    let y = Math.random() * window.innerHeight
    let dx = ((Math.random() - 0.5) * 0.05)
    let dy = ((Math.random() - 0.5) * 0.05)
    circlearr.push(new Circle(x, y, dx, dy, r))
}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    console.log(circlearr)

    for (let i = 0; i < circlearr.length; i++) {
        circlearr[i].update()
    }

}

animate()