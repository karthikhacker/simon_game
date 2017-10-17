$(document).ready(function(){
  //variable declarations
  var random = [];
  var lightId = [];
  var clicked = [];
  var lite;
  var count = 1;
  var on;
  var off;
  var j = 0;
  var x;
  var strict;

  //change 1 function
  function change1(){
    //set interval
    if(count <= 10){
      off = 400;
      on = 800;
    }else{
      off = 250;
      on = 500;
    }

     x = setInterval(function(){
      if(random[j] == 1){
        lite = 'light1';
        $("#btn1").addClass(lite);
        $("#audio1")[0].play();
        lightId.push(1);
        setTimeout(function(){
         $("#btn1").removeClass(lite);
       },off);
     }else if(random[j] == 2){
        lite = 'light2';
        $("#btn2").addClass(lite);
        $("#audio2")[0].play();
        lightId.push(2);
        setTimeout(function(){
         $("#btn2").removeClass(lite);
        },off)
     }else if(random[j] == 3){
       lite = 'light3';
       $("#btn3").addClass(lite);
       $("#audio3")[0].play();
       lightId.push(3);
       setTimeout(function(){
        $("#btn3").removeClass(lite);
      },off);
    }else{
      lite = 'light4';
      $("#btn4").addClass(lite);
      $("#audio4")[0].play();
      lightId.push(4);
      setTimeout(function(){
       $("#btn4").removeClass(lite);
      },off);
    }
    j++;
    if(j >= count){
      clearInterval(x);
    }
    }, on);
  }

  //changing function
  function checking(){
    if(lightId.length == clicked.length){
      if(lightId.join() == clicked.join()){
        if(count == 20){
          setTimeout(function(){
            alert("you win !");
            location.reload();
          },1000);
        }else{
          setTimeout(function(){
           $("#count").text(count + 1);
           count++;
           lightId = [];
           clicked = [];
           j = 0;
           change1();
          },1000);
        }
      }else{
        if(strict == 1){
          location.reload();
        }else{
          setTimeout(function(){
            $("#count").text("!!");
            lightId = [];
            clicked = [];
            j = 0;
            change1();
          },1000);
        }
      }
    }
  }

  //switch on game
  $("#on").on("click",function(){
    $("#count").html("&#175; &#175;");
    for(var i = 0; i < 20; i++){
      random[i] = Math.ceil((Math.random() * 4));
      //console.log(random[i]);
    }

    //strict mode
    $("#strict").on("click",function(){
       strict = 1;

    });

    //start the game
    $("#start").on("click",function(){
      $("#count").text(count);
      change1();
    });

    //user play
    $("#btn1").on("click",function(){
      $("#btn1").addClass("light1");
      $("#audio1")[0].play();
      clicked.push(1);
      setTimeout(function(){
       $("#btn1").removeClass("light1");
     },250);
     checking();
    });

    $("#btn2").on("click",function(){
      $("#btn2").addClass("light2");
      $("#audio2")[0].play();
      clicked.push(2);
      setTimeout(function(){
       $("#btn2").removeClass("light2");
      },250);
      checking();
    });

    $("#btn3").on("click",function(){
     $("#btn3").addClass("light3");
     $("#audio3")[0].play();
     clicked.push(3);
     setTimeout(function(){
      $("#btn3").removeClass("light3");
     },250);
      checking();
    });

    $("#btn4").on("click",function(){
     $("#btn4").addClass("light4");
     $("#audio4")[0].play();
     clicked.push(4);
     setTimeout(function(){
      $("#btn4").removeClass("light4");
     },250);
      checking();
    });

  });

  //off
  $("#off").on("click",function(){
     location.reload();
  });

});
