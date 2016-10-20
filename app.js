//Display current ay and time with the following format: Today is Sunday. The current time is 9 AM : 50 : 22
var today = new Date();
var day = today.getDay();
var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday", "Friday", "Saturday"];
//console.log("Today is : " + daylist[day] + ".");  
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12) ? " PM " : " AM ";
hour = (hour >= 12) ? hour - 12 : hour;
if (hour === 0 && prepand === ' PM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Noon';
    } else {
        hour = 12;
        prepand = ' PM';
    }
}
if (hour === 0 && prepand === ' AM ') {
    if (minute === 0 && second === 0) {
        hour = 12;
        prepand = ' Midnight';
    } else {
        hour = 12;
        prepand = ' AM';
    }
}
// This is the magic to get current date, time format!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
document.getElementById('date').innerHTML = ("Today is : " + daylist[day] + ".") + ("The Current Time : " + hour + prepand + " : " + minute + " : " + second);



//Scroll the string 'Origin Code Academy Rocks! ' from left to right
function animate_string(scroll) {
    var element = document.getElementById(scroll);
    var textNode = element.childNodes[0]; // assuming no other children
    var text = textNode.data;

    setInterval(function() {
        text = text[text.length - 1] + text.substring(0, text.length - 1);
        textNode.data = text;
    }, 100);
}


//Bubblebutt function=========================================
function bubbleSort(arr, order) {
    var resultArr = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (order === 1) { // descending order
                if (arr[i] > arr[j]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    console.log(arr);
                }
            } else { //ascending order
                if (arr[i] < arr[j]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }
    console.log(arr);
    return arr + "";
}
$(document).ready(function() {
    var arr = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
    $('#result').html(bubbleSort(arr, 1));
});


//Make the firstword of each element bold=======================
$('#bold h5').each(function() {
    var me = $(this);
    me.html(me.text().replace(/(^\w+)/, '<strong>$1</strong>'));
});


//Single & Double Click function for button=====================
$("p").bind("click", function(){
   $( "<p>This is a click Event</p>").appendTo( "body2" );
});

$("p").bind("dblclick", function(){
   $( "<p>This is a double-click Event</p>"  ).appendTo( "body2" );
});


//Change background color when button is clicked
$("#div1").on( "click", "button", function( event ) {  
  $(event.delegateTarget ).css("background-color", "green").toggleClass("back-red");  
}); 

/*$("div").on("click", function() {
    $(this).toggleClass('back-red');
});*/

