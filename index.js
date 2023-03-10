function startTime() {
    let today = new Date();
    let h =today.getHours();
    let m =today.getMinutes();
    let s =today.getSeconds();
    let ampm = "";
    m = checkTime(m);

    if (h > 12) {
        h = h -12
        ampm = "PM"   
    } else if (h ==12){
       ampm = "AM";
    }else {
        ampm = "PM"
    };
    if (h==0) {
       h = 12; 
    }

    document.getElementById('display').innerHTML = h+"."+m+"."+s+ampm+""+"EAT";
    let t = setTimeout(function() 
    {startTime()}, 500);
}
function checkTime (i) {
    if (i<10) {i = "0" + i}; //add zero infront of numbers < 10
    return i;
}
function genQuote(){
    let randNum = math.floor(Math.random()*8) + 1;
    document.getElementById('quote').innerHTML = quotes[randNum].split('').join('%20');
    tweetQuote = tweetQuote.split('<br>').join('');
    tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
     $('.twitter-share-button').attr('href' ,tweetQuote);
}

//quote array
let quotes = ["Blank", "\"Dude, suckin' at something is the first step at being sorta good at something.\"<br>-  Jake <small><em>(Adventure Time)</em></small>",
            "\"Either I will find a way, or I will make one.\"<br> - Philip Sidney",
            "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- Thomas A. Edison",
            "\"You are never too old to set another goal or to dream a new dream.\"<br>- C.S Lewis",
            "\"If you can dream it, you can do it.\"<br>- Walt Disney",
            "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- Harriet Beecher Stowe",
            "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- Muhammad Ali",];

//date
function startDate() {
let d = new Date();
let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("date").innerHTML = days[d.getDay()]+"|"+[d.getMonth()+1]+"/"
+d.getDate()+"/"+d.getFullYear();
}