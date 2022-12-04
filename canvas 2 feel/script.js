const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;  
});

const mouse = {
    x: undefined,
    y: undefined
}
const spots = [];
hue = 0;
canvas.addEventListener('click', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 2; i++) {
        spots.push(new Particle());
    }
});

class Particle{
    constructor(){ 
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 21 + 0.1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.color = `hsl(${hue},50%,70%)`;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.1) {
            this.size -= 0.03;
        } 
    }
    draw() {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.stroke();
    }
}

function particleHandle() {
    for (let i = 0; i < spots.length; i++){
        spots[i].update();
        spots[i].draw();
        console.log(spots.length);
        for (let j = i; j < spots.length; j++){
            // pitagorum theory apply here for recangle 
            console.log(spots[i].x);
            console.log(spots[i].y);

            const dx = spots[i].x - spots[j].x;
            const dy = spots[i].y - spots[j].y;
            const distance = Math.sqrt(dx*dx + dy*dy);
            console.log(distance);
            if (distance < 1000) {
                console.log(distance);
                ctx.beginPath();
                ctx.strokeStyle = spots[i].color;
                ctx.strokeWidth = spots[i].size/10;
                ctx.moveTo(spots[i].x, spots[i].y);
                ctx.lineTo(spots[j].x, spots[j].y);
                ctx.stroke();
            }

            if (spots[i].size <= 0.3) {
                spots.splice(i, 1);
                i--;
            }

        }
    }
}

// loop the animation 
function animation() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particleHandle();
    hue++;
    requestAnimationFrame(animation);

    window.addEventListener('mouseout', function () {
        mouse.x = undefined,
        mouse.y = undefined
    })
}
animation();





























