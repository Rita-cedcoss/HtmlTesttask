let word="TALENT";
let len=parseInt(word.length);
function guessword(){
console.log(len);
len--;
      guessLetter=document.getElementById("inputGuess").value.toUpperCase();
      document.getElementById("guessRemainingWord").innerHTML="You have "+len+" guesses remaining.";
      document.getElementById("guessAttemptsWord").innerHTML+="    "+guessLetter+"    ";
    if(len>=0){
        let flag=0;
        let char=''; 
    for(i=0;i<word.length;i++){
        console.log(word.charAt(i));
        if(guessLetter==word.charAt(i)){
            document.getElementById(i).innerHTML=word.charAt(i);
            flag=1;
        }
    }
    if(flag==1){
        document.getElementById("guessResult").innerHTML="Good guess! The word has letter "+guessLetter;   
    }
    else{
        document.getElementById("guessResult").innerHTML="Wrong guess! The word does not has letter "+guessLetter;
    }
    winner();
}
else{
    document.getElementById("guessExceed").innerHTML="GAME OVER!! You have exceeded the guess limit";
    document.getElementById("guessRemainingWord").innerHTML="You have 0 guesses remaining.";
}
}
function winner(){
    let count=0;
    for(i=0;i<word.length;i++){
        ch=document.getElementById(i).innerHTML;
        if(ch==word.charAt(i)){
            count++;
        }
    }
    if(count==6)
    document.getElementById("guessExceed").innerHTML="CONGRATULATIONS! You have won the game.";
}