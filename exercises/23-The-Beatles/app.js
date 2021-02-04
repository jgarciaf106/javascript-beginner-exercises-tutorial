function sing(){
    var words = "let it be";
    let chorus = "";
    let lyricOne = "";
    let lyricTwo = "";

    for(let i = 1; i < 5; i++){        

        lyricOne = words + ", " + lyricOne;       
    }
    for(let i = 1; i < 6; i++){        

        lyricTwo = words + ", " + lyricTwo;       
    }
    chorus = lyricOne + "words of wisdom, " + lyricTwo + "there will be an answer, " + words;
    return chorus;
}

//Your code above ^^^

console.log(sing());