
const mailCard = document.querySelector(".whole-mail-card");
const mailFlap = document.querySelector(".mail-flap");
const mailFlap2 = document.querySelector(".mail-flap-2");
const mailFlapOpen = document.querySelector(".mail-flap-open");

const clickMeText = document.querySelector(".label-text");
const flapText = document.querySelector(".flap-text");

const letterClickableArea = document.querySelector(".clickable-area");
const paperLetter = document.querySelector(".letter");
var isOpened = false;

function openEnvelope(){
    mailFlapOpen.style.setProperty("display", "block");
    mailFlap.style.setProperty("visibility", "hidden");
    mailFlap2.style.setProperty("visibility", "visible");
    mailCard.style.setProperty("animation", "none");
    clickMeText.style.setProperty("visibility", "hidden");
    flapText.style.setProperty("display", "flex");
    paperLetter.style.setProperty("top", "40px");
}
function returnToDefault(){
    mailFlapOpen.style.setProperty("display", "none");
    mailCard.style.setProperty("animation", "idleAnimation 5s ease-in-out infinite");
    mailFlap.style.setProperty("visibility", "visible");
    mailFlap2.style.setProperty("visibility", "hidden");
    clickMeText.style.setProperty("visibility", "visible");
    flapText.style.setProperty("display", "none");
    paperLetter.style.setProperty("top", "36px");

}

clickMeText.addEventListener("click", () => {
    console.log("click")
    if(!isOpened){
        console.log("open envelope");
        isOpened = true;
        openEnvelope();
    }
})
flapText.addEventListener("click", () => {
    console.log("click")
    if(isOpened){
        console.log("open envelope");
        isOpened = false;
        returnToDefault();
    }
})
// clickMeText.addEventListener("mouseenter",() => {
//     console.log("chuj");
//     // highlight the mouseenter target 
//     if(!isOpened){
//         mailFlap2.style.setProperty("visibility", "visible");
//     }
//     },false,
// );
//pierdole to kurwa
const actualGiftCard = document.querySelector(".actual-gift");
const giftCardXMark = document.querySelector(".close");

letterClickableArea.addEventListener("click", () => {
    console.log("click")
    console.log(actualGiftCard);
    actualGiftCard.style.setProperty("display", "block")
})
giftCardXMark.addEventListener("click", () => {
    actualGiftCard.style.setProperty("display", "none")

})
const letters = document.querySelectorAll("#post")

const letter1 = document.querySelector("#ltr1")
const letter2 = document.querySelector("#ltr2")
const xMarkButton1 = document.querySelector("#close1")
const xMarkButton2 = document.querySelector("#close2")

letters[0].addEventListener("click", () => {
    console.log("pst1");
    letter1.style.setProperty("display", "block")
    actualGiftCard.style.setProperty("filter", "blur(20px)")
})

letters[1].addEventListener("click", () => {
    console.log("pst2");
    letter2.style.setProperty("display", "block")
    actualGiftCard.style.setProperty("filter", "blur(20px)")
})

xMarkButton1.addEventListener("click", () => {
    console.log("close1");
    letter1.style.setProperty("display", "none")
    actualGiftCard.style.setProperty("filter", "none")

})
xMarkButton2.addEventListener("click", () => {
    console.log("close2");
    letter2.style.setProperty("display", "none")
    actualGiftCard.style.setProperty("filter", "none")

})

const valentineLetter = document.querySelector("#valentine");
const valentinePopup = document.querySelector(".valentine-popup");
const valentineClose = document.querySelector("#val-close");
valentineLetter.addEventListener("click", () => {
    console.log("<3");
    valentinePopup.style.setProperty("display", "block")
    actualGiftCard.style.setProperty("filter", "blur(20px)")

})
valentineClose.addEventListener("click", ()=> {
    valentinePopup.style.setProperty("display", "none")
    actualGiftCard.style.setProperty("filter", "none")

})

const photoView = document.querySelector(".photo-view");
const xMarkButton3 = document.querySelector("#ph-close");
const pics = document.querySelectorAll(".pic");
const picSpace = document.querySelector("#pic-space");

xMarkButton3.addEventListener("click", ()=> {
    photoView.style.setProperty("display", "none");
    while(picSpace.firstChild){
        picSpace.removeChild(picSpace.firstChild);
    }
})

for (let i = 0; i < pics.length; i++) {
    pics[i].addEventListener("click", () => {
        let j = i + 1;
        let picLink = `css/res/ph${j}.jpg`; // Adjust the path according to your image names and location
        
        // Create a new img element
        let newImg = document.createElement('img');
        
        // Set the src attribute of the new img element
        newImg.src = picLink;
        
        // Add the new img element to the picSpace container
        picSpace.appendChild(newImg);
        photoView.style.setProperty("display", "block");
    });
}