var submitbtn = document.getElementById('Submit_Answer');
var x = document.getElementsByClassName('options');
var count_ed = 0;
var count_ec1 = 0;
var count_ec2 = 0;
var count_ec3 = 0;
var count_ec4 = 0;



//REPS FOR EXERCISES
var seconds = 0;
var el = document.getElementById('counter');
// var ispaused = false;

function incrementSeconds() {
  seconds += 1;
  el.innerText = "Reps: " + seconds + " /10";
  // console.log(seconds);
  if (seconds >10){
    window.location.href = 'Completion_Ex_Page.html';
  }
}
var timer = setInterval(incrementSeconds, 2500);

// if (ispaused==false){
//     setInterval(incrementSeconds, 2500);
// }
//MODAL HIDE SHOW
var pfe_video = document.getElementById('PF_Ex');


var modal = document.getElementById("myModal");
console.log(modal);
// Get the button that opens the modal
var PB = document.getElementById("Pause_Button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function ContinueExercise(event){
    console.log(event.target);
    modal.style.display="none";
    pfe_video.load();
  timer = setInterval(incrementSeconds, 2500);
  console.log(event);

}
// When the user clicks the button, open the modal 
PB.onclick = function(){
  modal.style.display = "block";
  pfe_video.pause();

  // ispaused=true;
  clearInterval(timer);
  console.log(seconds);
  console.log(event);
}

// When the user clicks on <span> (x), close the modal
span.onclick = ContinueExercise;
window.onclick = ContinueExercise;

// function(event) {
//   modal.style.display = "none";
//   pfe_video.load();
//   timer = setInterval(incrementSeconds, 2500);
//   console.log(event);

//   // ispaused=false;
//   console.log(seconds);
// }

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//     pfe_video.play();
//     // ispaused=false;
//     console.log(seconds);
//   }
// }




//SELECTING OPTIONS
for (var i = 0; i < x.length; i++) {

    x[i].addEventListener("click", function(){

    (($(this).find('div')[2]).click());
    submitbtn.style.backgroundColor = '#007DAC';
    var selectedEl = document.querySelector(".selected");
    // console.log(selectedEl.find[3])


    if(selectedEl){
        selectedEl.classList.remove("selected");
    }
    
    this.classList.add("selected");
     
    });
}

document.getElementById('Submit_Answer').addEventListener('click',function(){
    
    var selectedEl = document.querySelector(".selected");
    if(selectedEl){
        alert(selectedEl.innerText); 
        // document.body.style.backgroundColor = 'blue';
    }
    else{
        alert('please choose an option')
    }
});



function exercisedifficult(id){
    count_ed = count_ed+1
    var div_select = document.getElementById(id);
    if (count_ed%2!=0){
        div_select.classList.add("difficult");
        // var checkbox = (div_select.childNodes[5]);
        // (checkbox.remove());
        ($('#'+id).find('i').removeClass());
        ($('#'+id).find('i').addClass('fa-regular fa-circle-check'));
        // console.log($('#'+id).find('i').addClass('fa-regular fa-circle-check'));

        
    }
    else if (count_ed%2==0) {
        div_select.classList.remove("difficult");
        // console.log($('#'+id).find('i').removeClass();
        ($('#'+id).find('i').addClass('fa-regular fa-circle'));


    }





};

function exerciseselectioncomplete1(id){
    count_ec1 = count_ec1+1
    var div_select = document.getElementById(id);
    if (count_ec1%2!=0){
        console.log(document.getElementById(id).style.backgroundColor ='#002664');
        console.log(document.getElementById(id).style.color ='#FCD901');

        // div_select.classList.add("complete");
        // var checkbox = (div_select.childNodes[5]);
        // (checkbox.remove());
        ($('#'+id).find('i').removeClass());
        ($('#'+id).find('i').addClass('fa-regular fa-circle-check'));
        // console.log($('#'+id).find('i').addClass('fa-regular fa-circle-check'));

        
    }
    else if (count_ec1%2==0) {
        console.log(document.getElementById(id).style.backgroundColor ='#FCD901');
        console.log(document.getElementById(id).style.color ='#002664');
        // console.log($('#'+id).find('i').removeClass();
        ($('#'+id).find('i').addClass('fa-regular fa-circle'));


    }

};

function exerciseselectioncomplete2(id){
    count_ec2 = count_ec2+1
    var div_select = document.getElementById(id);
    if (count_ec2%2!=0){
        console.log(document.getElementById(id).style.backgroundColor ='#002664');
        console.log(document.getElementById(id).style.color ='#FCD901');

        // div_select.classList.add("complete");
        // var checkbox = (div_select.childNodes[5]);
        // (checkbox.remove());
        ($('#'+id).find('i').removeClass());
        ($('#'+id).find('i').addClass('fa-regular fa-circle-check'));
        // console.log($('#'+id).find('i').addClass('fa-regular fa-circle-check'));

        
    }
    else if (count_ec2%2==0) {
        console.log(document.getElementById(id).style.backgroundColor ='#FCD901');
        console.log(document.getElementById(id).style.color ='#002664');
        // console.log($('#'+id).find('i').removeClass();
        ($('#'+id).find('i').addClass('fa-regular fa-circle'));


    }





};

function exerciseselectioncomplete3(id){
    count_ec3 = count_ec3+1
    var div_select = document.getElementById(id);
    if (count_ec3%2!=0){
        console.log(document.getElementById(id).style.backgroundColor ='#002664');
        console.log(document.getElementById(id).style.color ='#FCD901');

        // div_select.classList.add("complete");
        // var checkbox = (div_select.childNodes[5]);
        // (checkbox.remove());
        ($('#'+id).find('i').removeClass());
        ($('#'+id).find('i').addClass('fa-regular fa-circle-check'));
        // console.log($('#'+id).find('i').addClass('fa-regular fa-circle-check'));

        
    }
    else if (count_ec3%2==0) {
        console.log(document.getElementById(id).style.backgroundColor ='#FCD901');
        console.log(document.getElementById(id).style.color ='#002664');
        // console.log($('#'+id).find('i').removeClass();
        ($('#'+id).find('i').addClass('fa-regular fa-circle'));


    }

};

function exerciseselectioncomplete4(id){
    count_ec4 = count_ec4+1
    var div_select = document.getElementById(id);
    if (count_ec4%2!=0){
        console.log(document.getElementById(id).style.backgroundColor ='#002664');
        console.log(document.getElementById(id).style.color ='#FCD901');

        // div_select.classList.add("complete");
        // var checkbox = (div_select.childNodes[5]);
        // (checkbox.remove());
        ($('#'+id).find('i').removeClass());
        ($('#'+id).find('i').addClass('fa-regular fa-circle-check'));
        // console.log($('#'+id).find('i').addClass('fa-regular fa-circle-check'));

        
    }
    else if (count_ec4%2==0) {
        console.log(document.getElementById(id).style.backgroundColor ='#FCD901');
        console.log(document.getElementById(id).style.color ='#002664');
        // console.log($('#'+id).find('i').removeClass();
        ($('#'+id).find('i').addClass('fa-regular fa-circle'));


    }



};






$('#checkbox_right').click(function() {
  $('#checkbox_right').find('i').removeClass()
  $(this).find('i').addClass('fa-regular fa-circle-check')
  $('#checkbox_left').find('i').removeClass()
  $('#checkbox_both').find('i').removeClass()
  $('#checkbox_both').find('i').addClass('fa-regular fa-circle')
  $('#checkbox_left').find('i').addClass('fa-regular fa-circle')


});

$('#checkbox_left').click(function() {
  $('#checkbox_left').find('i').removeClass()
  $(this).find('i').addClass('fa-regular fa-circle-check')
  $('#checkbox_right').find('i').removeClass()
  $('#checkbox_both').find('i').removeClass()
  $('#checkbox_both').find('i').addClass('fa-regular fa-circle')
  $('#checkbox_right').find('i').addClass('fa-regular fa-circle')


});

$('#checkbox_both').click(function() {
  $('#checkbox_both').find('i').removeClass()
  $(this).find('i').addClass('fa-regular fa-circle-check')
  $("#checkbox_right").find('i').removeClass();
  $("#checkbox_left").find('i').removeClass();


  // $('#checkbox_right').find('i').removeClass('fa-regular fa-circle')
  $('#checkbox_right').find('i').addClass('fa-regular fa-circle')
  // $('#checkbox_left').find('i').removeClass('fa-regular fa-circle')
  $('#checkbox_left').find('i').addClass('fa-regular fa-circle')


});







