$(function () {
  $(".drum-pad").click(function(){
    $(".sound").text(this.id)
  })
$(document).keypress(function(event){
  if (event.key === "q") {
        $(".sound").text("heater-1")
  } else if (event.key === "w") {
        $(".sound").text("heater-2")
  } else if (event.key === "e") {
        $(".sound").text("heater-3")
  } else if (event.key === "a") {
        $(".sound").text("heater-4")
  } else if (event.key === "s") {
        $(".sound").text("clap")
  } else if (event.key === "d") {
        $(".sound").text("open-HH")
  } else if (event.key === "z") {
        $(".sound").text("kick-n'-hat")
  } else if (event.key === "x") {
        $(".sound").text("kick")
  }  else if (event.key === "c") {
        $(".sound").text("closed-HH")
  }
})
$(".ON").click(function(){
  $(".sound").text("ON")
  $(".drum-pad").prop("disabled", false)
})
$(".OFF").click(function(){
  $(".sound").text("OFF")
  $(".drum-pad").prop("disabled", true)
})
$(".drum-pad").addClass("btn btn-primary")

})