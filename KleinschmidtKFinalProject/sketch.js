let whiteKeys = [0,1,2,3,4,5,6];
let blackKeys = [0,1,2,3,4];
let whiteKeyNotes = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
let blackKeyNotes = ['C#', 'D#', 'F#', 'G#', 'A#'];
//let keys;
let x1 = 80;
let y1 = 100;
let x2 = 105;
let y2 = 100;
//let polySynth;


function setup() {
   createCanvas(500, 500);
   //userStartAudio();
   //polySynth = new p5.PolySynth();
   

for(let i = 0; i < whiteKeys.length;i++)
 {
    
    whiteKeys[i] = new Button("BOX",x1,y1);
    whiteKeys[i].width = 20;
    whiteKeys[i].height = 300;
    whiteKeys[i].fill = 255;
    x1 += 50;
 }

for(let j = 0; j < blackKeys.length;j++){
     if(j == 2)
      { 
         x2 += 50;
      }
    blackKeys[j] = new Button("BOX",x2,y2);
    blackKeys[j].width = 20;
    blackKeys[j].height = 185;
    blackKeys[j].fill = 0;
    x2 += 50;
 }

}
function draw() {
   background(115);
   text('Note:',200,450);
for(let i = 0; i < whiteKeys.length;i++){
    if(whiteKeys[i].pressed == true){
       text(whiteKeyNotes[i],250,450);
  }

 }

for(let i = 0; i < blackKeys.length;i++){
    if(blackKeys[i].pressed == true){
       text(blackKeyNotes[i],250,450);
  }

 }

}
