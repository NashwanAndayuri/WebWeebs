
var resultOneTitle = 'MobileApp and IPC';
var resultOneDesc = 'You may join Himakom (IPC) and OmahTi (MaP) based on these recommendation';

var resultTwoTitle = 'Front-End and Back-End';
var resultTwoDesc = 'It is recommended for you to join OmahTi';

var resultThreeTitle = 'DataScience & Artificial Intelligence and Cybersecurity:';
var resultThreeDesc = 'It is recommended for you to join OmahTi';

var resultFourTitle = 'UI/UX and Media';
var resultFourDesc = "You may join Himakom (IPC) and OmahTi (MaP) based on these recommendation"

var resultFiveTitle = 'GM and SNF';
var resultFiveDesc = 'You are recommended to join Himakom';

var resultSixTitle = 'GameDev and SkillDev';
var resultSixDesc = 'You may join Himakom (IPC) and OmahTi (MaP) based on these recommendation';

var resultSevenTitle = 'PR and HR';
var resultSevenDesc = "You are recommended to join Himakom";

var resultEightTitle = 'CP and SekBend';
var resultEightDesc = "You may join Himakom (IPC) and OmahTi (MaP) based on these recommendation";

// set up event listener
var submit = document.getElementById('submit');
var answers = document.getElementsByTagName('input');
submit.addEventListener('click', function(){
  console.log('clicked!');
});


// pull values and get the sum for personality type
$("form").on("submit", function(event){
  event.preventDefault();
  var formValues = $(this).serializeArray();
  var sum = 0;
  for(var i=0; i < formValues.length; i++){
    sum = sum + Number(formValues[i].value);
  }
  console.log(sum);
  // use if/else if loop to use sum and designate results.
  if(sum <= 10){
    $('#results h1').append('Your recommended org and division is') + $('#results h2').append(resultOneTitle + " ") + $('#results p').append(resultOneDesc);
  } else if (sum >= 11 && sum <= 14) {
    $('#results h1').append('Your recommended org and division is') + $('#results h2').append(resultTwoTitle + " ") + $('#results p').append(resultTwoDesc);
  } else if (sum >= 15 && sum <= 18) {
    $('#results h1').append('Your recommended org and division is') +  $('#results h2').append(resultThreeTitle + " ") + $('#results p').append(resultThreeDesc);
  } else if (sum >= 19 && sum <= 22){
    $('#results h1').append('Your recommended org and division is') +  $('#results h2').append(resultFourTitle + " ") + $('#results p').append(resultFourDesc);
  } else if(sum >= 23 && sum <= 26){
    $('#results h1').append('Your recommended org and division is') +  $('#results h2').append(resultFiveTitle + " ") + $('#results p').append(resultFiveDesc);
  } else if (sum >= 27 && sum <= 30){
    $('#results h1').append('Your recommended org and division is') +  $('#results h2').append(resultSixTitle + " ") + $('#results p').append(resultSixDesc);
  } else if (sum >= 31 && sum <= 34){
    $('#results h1').append('Your recommended org and division is') +  $('#results h2').append(resultSevenTitle + " ") + $('#results p').append(resultSevenDesc);
  } else
    $('#results h1').append('Your recommended org and division is') +  $('#results h2').append(resultEightTitle + " ") + $('#results p').append(resultEightDesc);
})



// Score Table:
// Qual:
// 7-10: Context Interviews
// 11-14: Field Research
// 15-18: RITE Usability testing
// Expert:
// 19-22 User Exp Reviews
// Quant:
// 23-26: Surveys
// 27-30: Eye tracking
// Remote:
// 31-34 Remote
// 35-38: Diary
