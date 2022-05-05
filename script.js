const box1 = document.querySelector("[data-box1]");
const box2 = document.querySelector("[data-box2]");
const restartButton = document.querySelector("[data-restart]");
const startButton = document.querySelector("[data-start]");

const allBox = [box1,box2];

const text = document.querySelector("[data-text-warna]");

const benar = document.querySelector("[data-benar]");
const salah = document.querySelector("[data-salah]");
const score = document.querySelector("[data-hasil]");

let totalBenar = 0;
let totalSalah = 0;

const color = [
    ["black","rgb(0, 0, 0)"],
    ["red","rgb(255, 0, 0)"],
    ["purple","rgb(128, 0, 128)"],
    ["green","rgb(0, 128, 0)"],
    ["yellow","rgb(255, 255, 0)"],
    ["blue","rgb(0, 0, 255)"],
    ["gray","rgb(128, 128, 128)"],
    ["brown","rgb(165, 42, 42)"],
    ["orange","rgb(255, 165, 0)"],
    ["pink","rgb(255, 192, 203)"]
]

    startButton.addEventListener("click", function(){
        startButton.style.display = "none";
        box1.style.display = "block";
        box2.style.display = "block";
        benar.parentElement.style.display = "flex";
        text.style.display = "block";
    })

    box1.style.backgroundColor = color[Math.floor(Math.random() * 10)][0];
    box2.style.backgroundColor = color[Math.floor(Math.random() * 10)][0];

    var qColor = window.getComputedStyle(allBox[Math.floor(Math.random()*2)]).getPropertyValue('background-color');        

    text.innerHTML = "Yang manakah warna " + checkColorRGB(color, qColor) + "?";
    
    compareColor();

    allBox.forEach(box =>{
            box.addEventListener('click',()=>{
                var bgColor = window.getComputedStyle(box).getPropertyValue('background-color');
    
                if(bgColor == qColor){
                    totalBenar += 1;
                    benar.innerHTML = "Benar : " + totalBenar;
                    console.log('benar' + ' '+ bgColor + ' ' + qColor );
                }else{
                    totalSalah += 1;
                    salah.innerHTML = "Salah : " + totalSalah;
                    console.log('salah' + ' '+ bgColor + ' ' + qColor );
                }
    
                box1.style.backgroundColor = color[Math.floor(Math.random() * 10)][0];
                box2.style.backgroundColor = color[Math.floor(Math.random() * 10)][0];
        
                qColor = window.getComputedStyle(allBox[Math.floor(Math.random()*2)]).getPropertyValue('background-color');        
                
                text.innerHTML = "Yang manakah warna " + checkColorRGB(color, qColor) + "?";
                
                compareColor();

                if (totalBenar+totalSalah == 10) {
                    
                    score.style.display = "flex";
                    score.innerHTML = " Score : " + (totalBenar*100)/10;
                    score.parentElement.style.marginTop = "50px"; 


                    benar.style.display = "none";
                    salah.style.display = "none";
                    text.style.display = "none";
                    box1.style.display = "none";
                    box2.style.display = "none";
                    restartButton.style.display = "inline";
                    restartButton.parentElement.style.height = "20vh";
                }

            },false);
    });

    restartButton.addEventListener("click",function(){
        window.location.reload();
    })
    
    function compareColor(){
        while(allBox[0].style.backgroundColor == allBox[1].style.backgroundColor){
            allBox[0].style.backgroundColor = color[Math.floor(Math.random() * 10)][0];
            console.log("whileGantiWarnaBox1");
        }
        while(allBox[1].style.backgroundColor == allBox[0].style.backgroundColor){
            allBox[1].style.backgroundColor = color[Math.floor(Math.random() * 10)][0];
            console.log("whileGantiWarnaBox2");
        }
    }

    function checkColorRGB(color, bgColor){
        for(let i = 0; i < color.length; i++) {
            if (color[i][1] == bgColor) {
                return bgColor = color[i][0];
            }
        }
    }
    
    function correctAnswer(qColor){
        box1.style.backgroundColor = color[Math.floor(Math.random() * 10)][0];
        box2.style.backgroundColor = color[Math.floor(Math.random() * 10)][0];

        qColor = window.getComputedStyle(allBox[Math.floor(Math.random()*2)]).getPropertyValue('background-color');        
        
        text.innerHTML = "Yang manakah warna " + checkColorRGB(color, qColor) + "?";
         
        compareColor();

        return qColor;
    };