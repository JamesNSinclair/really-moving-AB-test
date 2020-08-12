/*========================================
  USE THIS FUNCTION TO CALL THE TEST
  [SEE IMAGES FOR EXAMPLES]
========================================== */

createTest()

/*========================================
  CURRENT IMG REPLACED WITH IDENTICAL
  VERSION WITHIN DIV TO MAKE APPENDS POSSIBLE
========================================== */

function createImage(){
const mainImage = document.querySelector(".main-article-image");
let imageNew = document.createElement("div");
imageNew.id = 'newImage'
imageNew.className = 'main-test-image'
imageNew.style = "align-self: center;" +
    "width: fit-content;" +
    "position: relative;"
mainImage.replaceWith(imageNew);
imageNew.appendChild(mainImage);

}

/*========================================
BANNEER IS CREATED, STYLED & APPENDED
========================================== */

function createBanner(){
 let banner = document.createElement("div");
 banner.className = "banner"
 banner.style = "display: flex;" +
    "align-items: center;" +
    "justify-content: flex-end;" +
    "text-align: right;" +
    "background-color: #452765;" +
    "color: white;" +
    "position: absolute;" +
    "top: 0.5rem;" +
    "left: 0;" +
    "right: 0;"+
    "font-size: 12px;" +
    "padding-right: 5px;"

  const imageBase = document.querySelector("#newImage");

  banner.innerHTML =
  "<span style='margin-right: 15px;'><h2 style='margin:5px; color: white;'><strong>Most Helpful</strong></h2> <p style='margin:5px; margin-left: 11.5rem;'>Our Readers Voted This Article Their Favourite</p></span>" +
   "<i class='rm-icon-font rm-icon-font--suggestions' style='font-size: 35px;'></i>"
  imageBase.appendChild(banner)
}

/*========================================
BADGE IS CREATED, STYLED & APPENDED
========================================== */

 function createBadge(){
     const bannerBase = document.querySelector(".banner");
 let badge = document.createElement("div");
 badge.className = "badge"
 badge.style = "position: absolute;" +
  "box-sizing: content-box;" +
   "display: flex;" +
   "flex-direction: column;" +
  "justify-content: center;" +
  "font-weight: 600;" +
   "width: 9rem;" +
   "height: 9rem;" +
   "background-color: white;" +
   "color: #452765;" +
  "text-align: center;" +
   "border-radius: 50%;" +
   "left: 0;" +
   "border: 0.9rem #452765 solid;" +
   "font-size: 12px;"

 badge.innerHTML =
  "<p style='margin: 1px;'>Voted</p>" +
   "<p style='color: #D12281; margin:1px;'>Really Helpful</p>" +
   "<p style='margin: 1px;'>By Our</p>" +
   "<p style='margin: 1px;'>Readers</p>"
  bannerBase.appendChild(badge)
}

/*========================================
  FUNCTION FOR END
========================================== */

function createTest() {
createImage()
createBanner()
createBadge()
}
