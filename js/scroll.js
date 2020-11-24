const scroller = () => {
     //set up some basic variables for the size of the bg div and the background picture in it
     const bgWidth = $(window).width();
     const bgHeight = $(window).height() * .9;
     console.log(bgWidth);
     let picSizeX = 2500;
     let picSizeY = 2000;
     if (bgWidth <= 2000) {
         picSizeX = 2000;
         picSizeY = 1600;
     }

     //create about placer
     const aboutPlacer = () => {
        const currentP = $(".bg").css("background-position").split(" ");
        const currentXP = parseInt(currentP[0].replace("%", ""));
        const currentYP = parseInt(currentP[1].replace("%", ""));
        const xFrame = (bgWidth / picSizeX) * 100;
        const yFrame = (bgHeight / picSizeY) * 100;
        const inView = dots.filter(elem => {
            if (elem[0] - xFrame < currentXP < elem[0] + xFrame) {
                if (elem[1] - yFrame < currentYP < elem[1] + yFrame) {
                    return true
                }
            } else {
                return false;
            }
        });
        inView.forEach((elem) => {
            $(elem[2]).css("left", `${(currentXP * bgWidth / 100) - (currentXP * picSizeX / 100) + (elem[0] * picSizeX / 100)}px`).css("top", `${(currentYP * bgHeight / 100) - (currentYP * picSizeY / 100) + (elem[1] * picSizeY / 100)}px`).removeClass("hidden");
        });
     }

     //initialize any about buttons on screen
     aboutPlacer();
 
     
     $(".bg").mousedown((e)=>{
         console.log(e.target.className)
         if (e.target.className !== "bg") {
             return;
         }
         //set up variables involving current state at click
         const xOr = e.pageX;
         const yOr = e.pageY;
         const currentP = $(".bg").css("background-position").split(" ");
         const currentXP = parseInt(currentP[0].replace("%", ""));
         const currentYP = parseInt(currentP[1].replace("%", ""));
         const xModifier = picSizeX / bgWidth;
         const yModifier = picSizeY / bgHeight;
 
         //hide the about buttons while page is being moved
         $(".about-b").addClass("hidden");
 
         $(document).mousemove((e) => {
 
             //find new mouse location and if different update background position in order to create dragging effect
             const xNew = e.pageX;
             const yNew = e.pageY;
             if (xNew !== xOr || yNew !== yOr) {
                 const xDif = (xNew - xOr) / -1;
                 const yDif = (yNew - yOr) / -1;
                 const xPos = (xDif / picSizeX) * 100 * xModifier;
                 const yPos = (yDif / picSizeY) * 100 * yModifier;
                 let newXP = currentXP + xPos;
                 let newYP = currentYP + yPos;
                 if (newXP < 0) {
                     newXP = 0;
                 }
                 if (newYP < 0) {
                     newYP = 0;
                 }
                 if (newXP > 100) {
                     newXP = 100;
                 }
                 if (newYP > 100) {
                     newYP = 100;
                 }
                 $(".bg").css("background-position", `${newXP}% ${newYP}%`);
             }
         });
     });
 
     $(".bg").mouseup(() => {
 
         //stop the drag effect once the click ends
         $(document).off("mousemove");
 
         //determine if any about buttons are in current window and if there are, find their location relative to the background picture and show them
         aboutPlacer();
 
     });
 
     //stop the dragging effect if mouse leaves bg div before releasing click
     $(".bg").mouseleave(() => {
         $(document).off("mousemove");
         aboutPlacer();
     });
}

$(document).ready(() => {
    scroller();
    $(".exit-info").click(() => {
        scroller();
    });
});

$(window).resize(() => {
    scroller();
});
