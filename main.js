x=0;
y=0;
draw_circle="";
draw_rectangle="";
var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "system is listening please speak";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "speech has been recognised as : "+content;
    if(content=="circle")
    {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "started drawing circle";
        draw_circle = "set";
    }
    if(content=="rectangle")
    {
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML = "started drawing rectangle";
        draw_rectangle = "set";
    }
}

function setup()
{
canvas = createCanvas(900,600);
}

function draw()
{
    if(draw_circle=="set")
    {
        radius = Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "circle is drawn";
        draw_circle="";
    }
    if(draw_rectangle=="set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "rectangle is drawn";
        draw_rectangle="";
    }
}