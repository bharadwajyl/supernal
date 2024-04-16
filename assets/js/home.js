document.addEventListener("DOMContentLoaded", function(event) { 

    //GSAP HORIZONTAL SCROLLER
    let scroll_tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.division_1',
            start: "top center",
            scrub: true,
            end: "+=300",
        }
    }),
    facts = [...document.querySelectorAll('.card')]
    scroll_tl.to('.division_1 .big', {
        scale: 1.5,
        duration: 1,
        ease: "slow"
    })
    scroll_tl.to(facts, {
        xPercent: -85 * (facts.length - 1),
        scrollTrigger: {
            trigger: ".cards",
            start: "center center",
            pin: true,
            scrub: 1,
            snap: 0 / (facts.length - 1),
            end: () => `+=4320`
        }
    });
    
    //INTERNET SPEED DETECT
    var imageAddr = "assets/images/tester.jpg"; 
    var downloadSize = 289059;
    function ShowProgressMessage(msg) {
        if (console) {
            if (typeof msg == "string") { roller(msg); }
            else {
                for (var i = 0; i < msg.length; i++) { roller(msg[i]); }
            }
        }
    }
    function InitiateSpeedDetection() {
        ShowProgressMessage("VideoBG Loading");
        window.setTimeout(MeasureConnectionSpeed, 1);
    };    
    if (window.addEventListener) {
        window.addEventListener('load', InitiateSpeedDetection, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', InitiateSpeedDetection);
    }
    function MeasureConnectionSpeed() {
        var startTime, endTime;
        var download = new Image();
        download.onload = function () {
            endTime = (new Date()).getTime();
            showResults();
        }
        download.onerror = function (err, msg) {
            ShowProgressMessage("VideoBG Failed");
        }
        startTime = (new Date()).getTime();
        var cacheBuster = "?nnn=" + startTime;
        download.src = imageAddr + cacheBuster;
        function showResults() {
            var duration = (endTime - startTime) / 1000;
            var bitsLoaded = downloadSize * 8;
            var speedBps = (bitsLoaded / duration).toFixed(2);
            var speedKbps = (speedBps / 1024).toFixed(2);
            var speedMbps = (speedKbps / 1024).toFixed(0);
            speedMbps>="1" ?
                $("header video").attr("src", "https://www.supernal.aero/media/original_videos/Supernal_Hero_Loop_-_S-A2.mp4")
            :
                roller("VideoBG Failed due to slow Internet");
        }
    }

    //APPEND REMAINING VIDEOBG 
    $(".division_2 video").attr("src", "assets/images/division_2.mp4");
    
});
