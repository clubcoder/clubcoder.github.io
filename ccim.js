
/* global Firebase */
var ref = new Firebase("https://clubcim.firebaseio.com/");
/*
if (ref.getAuth() === null) {
    window.location.href = "login.html";
}
*/
var fb = new Firebase("https://ccim.firebaseio.com/")
$(document).ready(setup);
function getTime() {
    var year = new Date();
    var month = new Date();
    var day = new Date();
    var hour = new Date();
    var minute = new Date();
    return month.getMonth() + 1 + "/" + day.getDate() + "/" + year.getFullYear() +
        "  " + hour.getHours() + ":" + minute.getMinutes() + " ";
}
function getName() {
    var name = fb.getAuth.password.email.toLowerCase(); // case insensitive
    switch (name) {
        case "jkmexpress@yahoo.com":
            return "Jeffrey";
        case "jeffmeng7@gmail.com":
            return "Jeffrey";
        case "iandeanc@gmail.com":
            return "Ian";
        case "lucaschen188@gmail.com":
            return "Lucas";
        case "chefdude14@gmail.com":
            return "Daniel";
        default:
            return null;
    }
}
function setup() {
    $(".name").val(getName());
    console.log(getName() );
    $("#submit").click(send);
    fb.on("value", received);
}

function received(message) {
    $("#chatwindow").append("<p>" + message.val() + "<\/p>");
    $('#messagewindow').scrollTop($('#messagewindow')[0].scrollHeight);
}

function send() {
    var id = getName() + ":"
    var message = $("#message").val();
    var topush = getTime() + id + message;
    fb.push(topush);
    $('#message').val('');
}