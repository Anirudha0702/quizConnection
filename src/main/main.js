const cQuiz=document.querySelector(".c-container");
const allQuizBtn=document.querySelectorAll(".flex-item");
const qstnBlock=document.querySelector(".quiz-container");
const landingPage=document.querySelector(".landing-page-Container");
const displayTimer=document.querySelector(".timer");
const quizJava=document.querySelector(".java-container");
const quizSoloLev=document.querySelector(".solo-leveling-container")
const quizC=document.querySelector(".c-container");
const quizCSS=document.querySelector(".css-container");
const quizOP=document.querySelector(".op-container");
const qstn=document.querySelector(".qstn-block");
const option=document.querySelectorAll("input[type='button']");
const scoreBlock=document.querySelector(".score-container");
const scoreBoard=document.querySelector(".score");
const star=document.querySelectorAll(".star");
let second=0;
let minute=0;
let answerArray=[null,null,null,null,null];
let answerIndex=0;
let questionIndex=0;
let displayQuestion;
let score=0;
let selectedCatagory;
quizSet=[
    javaQA=[
        {"question":" What is an Interface?",
        "Option":["A collection of abstract methods.","an abstract class.","an concrete class."," None of the above."],
        "ans":"C"},
        {"question":"Method Overloading is an example of",
        "Option":["Static Binding."," Dynamic Binding.","Both of the above.","None above these"],
        "ans":"A"},
        {"question":"Which method must be implemented by all threads?",
        "Option":[" wait()","start()","stop()","run()"],
        "ans":"D"},
        {"question":"Can be constructor be made final?",
        "Option":["True","False","Except copy Constructor","None Of these"],
        "ans":"B"},
        {"question":"java.util.Collections is a:",
        "Option":["Class","Interface","Object","None Of these"],
        "ans":"A"}
    ],
    soloLevelingQA=[
        {"question":"what rank was sung jin woo when he started being a hunter?",
        "Option":["S","F","E","A"],
        "ans":"C"},
        {"question":"What was Sung Jin Woo nicknamed?",
        "Option":["World's weakest Hunter","Strongest Hunter","Strong","Weak"],
        "ans":"A"},
        {"question":"Which gate gave hunter sung his power?",
        "Option":["A rank Gate","C rank gate","B rank gate","Double dungeon"],
        "ans":"D"},
        {"question":"Girlfriend of Sung Jin Woo",
        "Option":["Sung Jinah.","Cha Hae-In","Ant Queen.","None Of these"],
        "ans":"B"},
        {"question":"What is the name of former Shadow Monarch?",
        "Option":["Ashborn","Jinah","Antares","Absolute being"],
        "ans":"A"}
    ],
    cssQA=[
        {"question":"Which of the following defines a measurement in inches?",
        "Option":["mm","pt","rem","in"],
        "ans":"D"},
        {"question":"Which of the following property is used to set the width of an image border?",
        "Option":["height","width","border","None Of these"],
        "ans":"C"},
        {"question":" Which of the following property changes the color of left border?",
        "Option":["none of these","border-Left-color","border-color-left","border-top-color"],
        "ans":"B"},
        {"question":"What is the correct CSS syntax for making all the span elements bold?",
        "Option":["span {text-size: bold}","<span style='font-size: bold'>","span {font-weight: bold}","None Of these"],
        "ans":"C"},
        {"question":"The # symbol specifies that the selector is?",
        "Option":["class","id","tag","universal Selector"],
        "ans":"B"}
    ],
    cQA=[
    {"question":`const int a = 5; \n
    a++;\n
    printf("%d", a); `,
    "Option":["5","6","Runtime Error","Comiletime Error"],
    "ans":"D"},
    {"question":"When a primitive variable is created in C, a memory address is assigned to the variable.",
    "Option":["True","false","Depends on coder","None above these"],
    "ans":"A"},
    {"question":"Can we return two values from a function in c?",
    "Option":["True","false","Except the builtin functions","None above these"],
    "ans":"B"},
    {"question":"Which of the following is not a type of a pointer",
    "Option":["Null pointer","Void pointer","Dangling Pointer","Sequence pointer"],
    "ans":"D"},
    {"question":"Can we use bitfields outside of structure?",
    "Option":["Yes","No","Depends on the platform","Only if it has aglobal scope"],
    "ans":"B"}
],

opQA=[
    {"question":"Who was the first woman to kiss Luffy?",
    "Option":["Hancock","Reiju","Robin","Zoro"],
    "ans":"B"},
    {"question":"Who was the first Admiral to be shown in the series?",
    "Option":["Akainu","Kizaru","Sengoku","None Of these"],
    "ans":"D"},
    {"question":"Who gave Shanks the scar on his eye?",
    "Option":["Blackbeard","Dragon","Akainu","Roger"],
    "ans":"A"},
    {"question":"How many crewmates did Luffy say he wanted at the beginning of the series?",
    "Option":["9","5","10","None Of these"],
    "ans":"C"},
    {"question":"Who said the Zoro should cut diamond next?",
    "Option":["Luffy","Kuina","Mihawk","Daz Bones"],
    "ans":"D"}
],
]
for(let i=0;i<allQuizBtn.length;++i)
{
    if(i!=0&&i<=5){
        allQuizBtn[i].addEventListener("click",()=>{
            landingPage.style.display="none";
            qstnBlock.style.display="flex";
            selectedCatagory=quizSet[i-1].sort(()=>Math.random()-0.5);
            setQuestion(selectedCatagory[questionIndex++]);
            setInterval(() => {
                timeGenerater();
            }, 1000);
        })
    }
    else{
        allQuizBtn[i].addEventListener("click",()=>{
            allQuizBtn[i].innerHTML="Play Quiz You Shit head";
        })
    }
}


timeGenerater=()=>{
    second++;
    if(second==60){
        second=0;
        minute++;
    }
    displayTimer.innerHTML=minute+":"+second;
}

setQuestion=(obj)=>{// change and set questions after a question is answered
    qstn.innerHTML=obj.question;
    for(let i=0;i<4;++i){
        option[i].value=obj.Option[i];
    }
}


answerSelected=(answer,optionNo)=>{
    answerArray[answerIndex++]=answer;
    option[optionNo].style.backgroundColor="yellow";
    option[optionNo].style.color="red";
    setTimeout(() => {
        option[optionNo].style.backgroundColor="#26128b";
        option[optionNo].style.color="#fff";
    }, 50);
    if(answerIndex===5){
        result();
        displayScore();
    }
    else{
        setQuestion(selectedCatagory[questionIndex++]);
    }
}

result=()=>{
    for(let i=0;i<answerArray.length;i++){
        if(selectedCatagory[i].ans===answerArray[i])
        {
            score+=2;
        }
    }
}

// ===============Score Section=====================
displayScore=()=>{
    qstnBlock.style.display="none";
    scoreBlock.style.display="block";
    scoreBoard.innerHTML=score+"/10";
    glowStar(score);
}
glowStar=(score)=>{
    if(score>=6)
    {
        for(let i=0;i<star.length-1;++i){
            star[i].classList.add("active");
            star[i].classList.remove("star");
        }
    }
    else if(score>=2 && score<=4){
        star[0].classList.add("active");
        star[0].classList.remove("star");
    }


    if(minute<1 && score>=8){
        star[2].classList.add("active");
        star[2].classList.remove("star");
    }
}
