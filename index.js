$(document).ready(function(){
    var sideBarIcon= $(".side-bar-icon")
    sideBarIcon.click(function(){
       $(".side-bar-content").css("transform","translateX(0%)");
       
    })
    $("#close-icon").click(function(){
        $(".side-bar-content").css("transform","translateX(100%)");
    })
})