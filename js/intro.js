$(document).ready(()=> {
    $("#caption").removeClass("invisible");
    setTimeout(() => {
        $("#title").removeClass("invisible");
    }, 4000);
    setTimeout(() => {
        $("#caption").addClass("invisible");
        $("#title").addClass("invisible");
        $("#dialogue").removeClass("invisible");
        $("#dial-1").removeClass("invisible");
    }, 8000);
    setTimeout(() => {
        $("#dial-2").removeClass("invisible");
    }, 12000);
    setTimeout(() => {
        $("#start-button").removeClass("invisible");
    },16000)
});
