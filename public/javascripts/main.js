/**
 * Created by master2202 on 6.6.2017..
 */

equalheight = function(container){

  var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
  $(container).each(function() {

    $el = $(this);
    $($el).height('auto')
    topPostion = $el.position().top;

    if (currentRowStart != topPostion) {
      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
        rowDivs[currentDiv].height(currentTallest);
      }
      rowDivs.length = 0; // empty the array
      currentRowStart = topPostion;
      currentTallest = $el.height();
      rowDivs.push($el);
    } else {
      rowDivs.push($el);
      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
    }
    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
      rowDivs[currentDiv].height(currentTallest);
    }
  });
}

$(window).load(function() {
  equalheight('.row .col-sm-4');
});


$(window).resize(function(){
  equalheight('.row .col-sm-4');
});

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$(window).scroll(function() {
  if ($(".nav").offset().top > 5) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
    $(".navbar-brand").removeClass("background1");
    $(".linkEffect").removeClass("background1");
    $(".drop").addClass("background2");


  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
    $(".navbar-brand").addClass("background1");
    $(".linkEffect").addClass("background1");
    $(".drop").removeClass("background2");
  }
  /*$(".slideanim").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
    if (pos < winTop + 1000) {
      $(this).addClass("slider");
    }
  });*/
});

function musicPlayer () {

  var play = ('M 21.8447447247091 50.86460808520984 L 21.795335619773663 35.12322363038908 L 21.996650617077215 16.63021757136406 L 35.637977872331895 24.457879367939466 L 51.53446678231999 33.878830090026206 L 37.94270351947703 41.79255274827156 L 21.844860890316312 50.86460808520984 L 21.8447447247091 50.86460808520984 Z')
  var stop = ('M 22.574234359543937 18.46858203351644 L 42.62051915584314 18.46858203351644 C 44.90541614881208 18.46858203351644 46.74477991236975 20.31017217403878 46.74477991236975 22.59757405260989 L 46.74477991236975 45.04710253122237 C 46.74477991236975 47.33462070850776 44.90529998336031 49.17609455031582 42.62051915584314 49.17609455031582 L 22.574234359543937 49.17609455031582 C 20.289337366574983 49.17609455031582 18.449973603017312 47.33450440979348 18.449973603017312 45.04710253122237 L 18.449973603017312 22.59757405260989 C 18.449973603017312 20.310055875324505 20.289453532026755 18.468582033516444 22.574234359543937 18.46858203351644 Z')
  var pause = ('M 26.905439440967065 19.899260715764115 C 28.819791624832902 19.899260715764115 30.360878881934127 21.01402392310699 30.360878881934127 22.39870840163016 L 30.360878881934127 45.01283042970675 C 30.360878881934127 46.3975524651064 28.819791624832902 47.51227811557281 26.905439440967065 47.51227811557281 C 24.99108725710122 47.51227811557281 23.45 46.39751490822992 23.45 45.01283042970675 L 23.45 22.398708401630174 C 23.45 21.014023923107004 24.99108725710122 19.89926071576413 26.905439440967065 19.89926071576413 L 26.905439440967065 19.899260715764115 Z  M 38.094560559032935 19.899260715764115 C 40.00891274289878 19.899260715764115 41.550000000000004 21.01402392310699 41.550000000000004 22.39870840163016 L 41.550000000000004 45.01283042970675 C 41.550000000000004 46.3975524651064 40.00891274289878 47.51227811557281 38.094560559032935 47.51227811557281 C 36.1802083751671 47.51227811557281 34.63912111806587 46.39751490822992 34.63912111806587 45.01283042970675 L 34.63912111806587 22.398708401630174 C 34.63912111806587 21.014023923107004 36.1802083751671 19.89926071576413 38.094560559032935 19.89926071576413 L 38.094560559032935 19.899260715764115 Z')

  var a1t = 'Timewave - Underdreaming (You are my Salvation Remix)';
  var a1 = new Audio("https://dl.dropboxusercontent.com/s/c6lvto66sbydawp/Domased%20Electronica%20-%20Mermaid%20%28Fretwell%20remix%29.mp3?dl=0");
  var a2t = 'London Grammar - Hey Now [Arty remix]';
  var a2 = new Audio("https://dl.dropboxusercontent.com/s/fps0o4qplgaipmq/London%20Grammar%20-%20Hey%20Now%20%28Arty%20Remix%29.mp3?dl=0");
  var a3t = 'Domased Electronica - Mermaid (Fretwell Remix)';
  var a3 = new Audio("https://dl.dropboxusercontent.com/s/c6lvto66sbydawp/Domased%20Electronica%20-%20Mermaid%20%28Fretwell%20remix%29.mp3?dl=0");
  var a4t = 'M.I.K.E. Push - Nova Artes';
  var a4 = new Audio("https://dl.dropboxusercontent.com/s/r5pc260ng9ung5k/M.I.K.E.%20Push%20-%20Nova%20Artes%20%28Extended%20Mix%29.mp3?dl=0");
  var a5t = 'Riparian Zone - Spinnet, Mmorty';
  var a5 = new Audio("https://dl.dropboxusercontent.com/s/wleinu8mja15uww/Spinnet%20-%20Riparian%20Zone%20%28feat.%20mmorty%29.mp3?dl=0");
  var a6t = 'O.B.I. - Holy Smoke';
  var a6 = new Audio("https://dl.dropboxusercontent.com/s/1gf2jfd78uqljhf/O.B.I.%20%20-%20Holy%20Smoke.mp3?dl=0");
  var audio = [a1, a2, a3, a4, a5, a6];
  var audioName = [a1t, a2t, a3t, a4t, a5t, a6t];
  var s;
  var fireButton = document.querySelectorAll(".mplay");
  var playFill = document.querySelectorAll(".playFill")
  var k;

  var $tTime = $('#trackTime');
  var $tName = $('#trackName');

  var $backward = $('#backward')
  var $play = $('#play')
  var $pause = $('#pause')
  var $stop = $('#stop')
  var $forward = $('#forward')


    $play.click(function(){
      if(k === undefined){
        k = 0
        sbs();
        playUpdate()
        console.log('playFirstSong')

      } else if (audio[k].duration > 0 && !audio[k].paused){
          console.log('allredyPlay!!!')
      } else {
        sbs();
        playUpdate()
        console.log('continuePlay')
      }
    })

    $pause.click(function(){
      if (audio[k].duration > 0 && !audio[k].paused){
        audio[k].pause();
        playFill[k].setAttribute('d', play)
      }else{
        console.log('allredyPaused!!!')
      }
    })

    $stop.click(function(){
      if (k === undefined){
        console.log('allredyStoped')
      } else if (audio[k].duration > 0 && !audio[k].paused){
        audio[k].pause();
        audio[k].currentTime = 0;
        playFill[k].setAttribute('d', play)

        for(i= 0; i < audio.length; i++){
            console.log(audio[i].currentTime = 0)
          }
          k = 0;

          audio[k].currentTime = 0;
          console.log(audio[k])
          console.log(audio[k].currentTime)
        console.log('stop')
      } else{
        audio[k].pause();
        audio[k].currentTime = 0;

        playFill[k].setAttribute('d', play)
        for(i= 0; i < audio.length; i++){
          console.log(audio[i].currentTime = 0)
        }

        k = 0;
        audio[k].currentTime = 0;
        console.log('stopAfterPause')
      }
    })

  $backward.click(function(){
    if(k === undefined){
      console.log('k = undefined')
    } else if (k === 0){
      audio[k].currentTime = 0;
      //audio[k].play()
      //sbs();
      playUpdate()
      console.log('k = 0')
    } else {
      k-=1
      audio[k].currentTime = 0;
      sbs();
      playUpdate()
    }
  })

  $forward.click(function(){
    if(k === undefined){
      k = 0;
      audio[k].currentTime = 0;
      audio[k].play()
      //sbs();
      //playUpdate()
      console.log(k)
    } else if(k === 0 || k <= audio.length - 2) {
      k+=1
      audio[k].currentTime = 0;
      sbs();
      playUpdate()
      console.log(k)
    } else if (k === audio.length - 1){
      //k = audio.length - 1;
      audio[k].currentTime = 0;
      //sbs();
      playUpdate()
      console.log('last k')
    }
  })


  function Playing(song, svgButton){
    if($(svgButton).attr('d') === pause){
      song.pause();
      svgButton.setAttribute('d', play)
    }
    else{
      for (var i=0; i<audio.length; i++){
        audio[i].pause();
      }
      var pf = document.querySelectorAll('.playFill');
      for (var j=0; j < pf.length; j++) {
        pf[j].setAttribute('d', play)
      }
      svgButton.setAttribute('d', pause)
      song.play();
    }
  }

  function sbs () {
    s = new Playing(audio[k], playFill[k]);
  }

  $(fireButton).click(function(){
    k = $(fireButton).index(this);
    sbs();
    playUpdate();
  });
}
musicPlayer ();

/*  function playUpdate() {
/*
    var $max = Math.round(audio[k].duration)
    var attributes = {
      //min: $min[0].value,
      max : $max
      //step: $step[0].value
    };
    $rangeslider.attr(attributes);
    $rangeslider.rangeslider('update', true);

    $('input[type="range"]').on('input', function(e) {
      var $handle = $('.rangeslider__handle', e.target.nextSibling);
      updateHandle($handle[0], this.value);

    });

    function updateHandle(el, val) {
      if ($('#js-rangeslider-0').hasClass('rangeslider--active') === true){
        audio[k].currentTime = val;
      }
    }

    function secondsToHms(d) {
      d = Number(d);

      var h = Math.floor(d / 3600);
      var m = Math.floor(d % 3600 / 60);
      var s = Math.floor(d % 3600 % 60);

      //return ('0' + h).slice(-2) + ":" + ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);

      return ('0' + m).slice(-2) + ":" + ('0' + s).slice(-2);

    }

    audio[k].ontimeupdate = function() {

      if(audio[k].currentTime === audio[k].duration){
        audio[k].currentTime = 0;
        audio[k].pause();
        playFill[k].setAttribute('d', play)
      }
      timelinePosition = Math.round(audio[k].currentTime)
      updateTimeline(timelinePosition);
      return audio[k].ontimeupdate;

    }



    // Update the timeline (time elapsed etc.)
    var updateTimeline = function(value) {
      $rangeslider.val(value).change();
      $tTime.text(secondsToHms(Math.round(audio[k].currentTime)))
      $tName.text(audioName[k])

    };
  }

}

/*musicPlayer();

var $document = $(document);
var $rangeslider = $('input[type=range]');
var $output = $('output');
var timelinePosition = 0;
var mediaPlayerState;
var $rangesld = $('.rangeslider__handle');

// Initialize rangeslider.js
$rangeslider.rangeslider({
  polyfill: false
})

$('#play').click(function(){
  $(this).addClass('fa-click');
  $('#pause').removeClass('fa-click');
  $('#stop').removeClass('fa-click');
});

$('#pause').click(function(){
  $(this).addClass('fa-click');
  $('#play').removeClass('fa-click');
  $('#stop').removeClass('fa-click');
});

$('#stop').click(function(){
  $(this).addClass('fa-click');
  $('#pause').removeClass('fa-click');
  $('#play').removeClass('fa-click');
});

$('#backward').click(function(){
  $('#pause').removeClass('fa-click');
  $('#stop').removeClass('fa-click');
  $('#play').addClass('fa-click');
});

$('#forward').click(function(){
  $('#pause').removeClass('fa-click');
  $('#stop').removeClass('fa-click');
  $('#play').addClass('fa-click');
});


*/


