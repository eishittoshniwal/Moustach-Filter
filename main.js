function preload() {

}

function setup() {
   canvas=createCanvas(500,500)
   canvas.center() 
   video=createCapture(VIDEO)
   video.size(500,500)
   video.hide()
}

function draw() {
    image(video,0,0,500,500)
}

function snapshot() {
    save("haha.png")
}
