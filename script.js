console.log("hello");

// fact generator



// script generator
$("#generate").click(function(){
  console.log("generate button works! 👍");
    let name = $(".inputName").val();
    let description = $(".inputDescription").val();
    
    $(".template").css("background-color", "red");
    
    $(".template").text(`Dear [Representative]. My name is ${name}. ${description} A leaked initial draft from the Supreme Court, threatens the constitutional rights of a woman to an abortion as established by the landmark decision in the case of Planned Parenthood v. Casey-- more notably known as Roe v. Wade. The United States Government does not have a place to restrict or ban safe medical procedures. The only people who have a right to decide what is best for a woman is the woman herself and her doctor. The decision to overturn this benchmark opinion sets dangerous precendent for the future of all women. By limiting a woman's right to choose, the U.S. Government undermines the freedom and values upon which this nation was founded.`);
  
});

// copy and paste 

function copyPasteTweet1() {
  let copyText = document.getElementById("copyTweet");
  
  copyText.select();

  navigator.clipboard.writeText(copyText.value);

  alert(`Copied the text: ${copyText.value}`);

}

function copyPasteTweet2() {
  let copyText = document.getElementById("copyTweet2");
  
  copyText.select();

  navigator.clipboard.writeText(copyText.value);

  alert(`Copied the text: ${copyText.value}`);

}

function copyPasteTweet3() {
  let copyText = document.getElementById("copyTweet3");
  
  copyText.select();

  navigator.clipboard.writeText(copyText.value);

  alert(`Copied the text: ${copyText.value}`);

}