//data
let generics = [
    "Levothyroxine",
    "Hydrocodone/APAP",
    "Amoxicillin",
    "Lisinopril",
    "Esomeprazole",
    "Atorvastatin",
    "Simvastatin",
    "Clopidogrel",
    "Montelukast",
    "Rosuvastatin",
    "Metoprolol",
    "Escitalopram",
    "Azithromycin",
    "Albuterol",
    "Hydrochlorothiazide",
    "Metformin",
    "Sertraline",
    "Ibuprofen",
    "Zolpidem",
    "Furosemide",
    "Omeprazole",
    "Trazodone",
    "Valsartan",
    "Tramadol",
    "Duloxetine",
    "Warfarin",
    "Amlodipine",
    "Oxycodone/APAP",
    "Quetiapine",
    "Promethazine",
    "Fluticasone",
    "Alprazolam",
    "Clonazepam",
    "Benazepril",
    "Meloxicam",
    "Citalopram",
    "Cephalexin",
    "Tiotropium",
    "Gabapentin",
    "Aripiprazole",
    "Potassium",
    "Cyclobenzaprine",
    "Methylprednisolone",
    "Methylphenidate",
    "Loratadine",
    "Carvedilol",
    "Carisoprodol",
    "Digoxin",
    "Memantine",
    "Atenolol",
    "Diazepam",

];

let brands = [
    "Synthroid®",
    "Vicodin®",
    "Amoxil®",
    "Prinivil®",
    "Nexium®",
    "Lipitor®",
    "Zocor®",
    "Plavix®",
    "Singulair®",
    "Crestor®",
    "Lopressor®",
    "Lexapro®",
    "Zithromax®",
    "ProAir®",
    "Microzide®",
    "Glucophage®",
    "Zoloft®",
    "Advil®",
    "Ambien®",
    "Lasix®",
    "Prilosec®",
    "Desyrel®",
    "Diovan®",
    "Ultram®",
    "Cymbalta®",
    "Coumadin®",
    "Norvasc®",
    "Percocet®",
    "Seroquel®",
    "Phenergan®",
    "Flonase®",
    "Xanax®",
    "Klonopin®",
    "Lotensin®",
    "Mobic®",
    "Celexa®",
    "Keflex®",
    "Spiriva®",
    "Neurontin®",
    "Abilify®",
    "K-Tab®",
    "Flexeril®",
    "Medrol®",
    "Concerta®",
    "Claritin®",
    "Coreg®",
    "Soma®",
    "Lanoxin®",
    "Namenda®",
    "Tenormin®",
    "Valium®"
];

function reset() {
    generics = [
      "Levothyroxine",
      "Hydrocodone/APAP",
      "Amoxicillin",
      "Lisinopril",
      "Esomeprazole",
      "Atorvastatin",
      "Simvastatin",
      "Clopidogrel",
      "Montelukast",
      "Rosuvastatin",
      "Metoprolol",
      "Escitalopram",
      "Azithromycin",
      "Albuterol",
      "Hydrochlorothiazide",
      "Metformin",
      "Sertraline",
      "Ibuprofen",
      "Zolpidem",
      "Furosemide",
      "Omeprazole",
      "Trazodone",
      "Valsartan",
      "Tramadol",
      "Duloxetine",
      "Warfarin",
      "Amlodipine",
      "Oxycodone/APAP",
      "Quetiapine",
      "Promethazine",
      "Fluticasone",
      "Alprazolam",
      "Clonazepam",
      "Benazepril",
      "Meloxicam",
      "Citalopram",
      "Cephalexin",
      "Tiotropium",
      "Gabapentin",
      "Aripiprazole",
      "Potassium",
      "Cyclobenzaprine",
      "Methylprednisolone",
      "Methylphenidate",
      "Loratadine",
      "Carvedilol",
      "Carisoprodol",
      "Digoxin",
      "Memantine",
      "Atenolol",
      "Diazepam"
    ];

    brands = [
      "Synthroid®",
      "Vicodin®",
      "Amoxil®",
      "Prinivil®",
      "Nexium®",
      "Lipitor®",
      "Zocor®",
      "Plavix®",
      "Singulair®",
      "Crestor®",
      "Lopressor®",
      "Lexapro®",
      "Zithromax®",
      "ProAir®",
      "Microzide®",
      "Glucophage®",
      "Zoloft®",
      "Advil®",
      "Ambien®",
      "Lasix®",
      "Prilosec®",
      "Desyrel®",
      "Diovan®",
      "Ultram®",
      "Cymbalta®",
      "Coumadin®",
      "Norvasc®",
      "Percocet®",
      "Seroquel®",
      "Phenergan®",
      "Flonase®",
      "Xanax®",
      "Klonopin®",
      "Lotensin®",
      "Mobic®",
      "Celexa®",
      "Keflex®",
      "Spiriva®",
      "Neurontin®",
      "Abilify®",
      "K-Tab®",
      "Flexeril®",
      "Medrol®",
      "Concerta®",
      "Claritin®",
      "Coreg®",
      "Soma®",
      "Lanoxin®",
      "Namenda®",
      "Tenormin®",
      "Valium®"
    ];
};




//called functions for running
const imageArray = [
    "url('bimgs/aerial.jpg')",
    "url('bimgs/amazing.jpg')",
    "url('bimgs/arch.jpg')",
    "url('bimgs/birds.jpeg')",
    "url('bimgs/butterfly.jpeg')",
    "url('bimgs/dock.jpeg')",
    "url('bimgs/forest.jpeg')",
    "url('bimgs/phu.jpg')",
    "url('bimgs/poppy.jpg')",
    "url('bimgs/sky1.png')",
    "url('bimgs/sky2.jpeg')",
    "url('bimgs/sunset.jpeg')",
    "url('bimgs/tree.jpg')"
];
shuffle(imageArray);
setBackground();
create();

const moveCounter = document.getElementById('questionCounter');
const one = "1 of 5";
const two = "2 of 5";
const three = "3 of 5";
const four = "4 of 5";
const five = "5 of 5";

//moveCounter.innerHTML = one




//functions cabinet

const linksButton = document.getElementById('linksLogo');
const resourcesBox = document.getElementById('resourcesBox');
const resourcesTextBox = document.getElementById('resourcesTextBox');

linksButton.addEventListener('mouseover', function () {
  resourcesBox.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
  resourcesBox.style.width = "340px";
  resourcesTextBox.style.display = "block";
  linksButton.style.opacity = "1";
});

linksButton.addEventListener('mouseout', function () {
  resourcesBox.style.backgroundColor = "";
});

resourcesBox.addEventListener('mouseover', function () {
  resourcesBox.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
  //"rgba(186, 186, 186, 0.5)"
  resourcesBox.style.width = "300px";
  resourcesTextBox.style.display = "block";
});

resourcesBox.addEventListener('mouseout', function () {
  resourcesBox.style.backgroundColor = "";
  resourcesBox.style.width = "40px";
  resourcesTextBox.style.display = "none";
  linksButton.style.opacity = "0.7";
});


const searchBox1 = document.getElementById('searchBox');
const searchBox2 = document.getElementById('searchBoxx');
const searchBox3 = document.getElementById('searchBoxxx');
const searchBar1 = document.getElementById('searchBar');
const searchBar2 = document.getElementById('searchBar2');
const searchBar3 = document.getElementById('searchBar3');
const searchBtn1 = document.getElementById('searchBtn');
const searchBtn2 = document.getElementById('searchBtn2');
const searchBtn3 = document.getElementById('searchBtn3');

searchBox1.addEventListener('mouseover', function () {
  searchBar1.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
  searchBtn1.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
});

searchBox1.addEventListener('mouseout', function () {
  searchBar1.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
  searchBtn1.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
});

searchBox2.addEventListener('mouseover', function () {
  searchBar2.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
  searchBtn2.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
});

searchBox2.addEventListener('mouseout', function () {
  searchBar2.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
  searchBtn2.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
});

searchBox3.addEventListener('mouseover', function () {
  searchBar3.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
  searchBtn3.style.backgroundColor = "rgba(186, 186, 186, 0.7)";
});

searchBox3.addEventListener('mouseout', function () {
  searchBar3.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
  searchBtn3.style.backgroundColor = "rgba(186, 186, 186, 0.5)";
});



function setBackground() {
  document.body.style.backgroundImage = imageArray[0];
};

function nextQuestionCorrect() {
  //moveCounterUp();
  setTimeout(function () {
    answerOptions.innerHTML = "";
    create();
  }, 200);
}

function nextQuestionWrong() {
  //moveCounterUp();
  setTimeout(function () {
    answerOptions.innerHTML = "";
    create();
  }, 1500);
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function create() {
    let num = randomInt(0, (generics.length - 1));
    const question = document.createElement('h4');
    const correctAnswer = document.createElement('button');
    const wrongOption1 = document.createElement('button');
    const wrongOption2 = document.createElement('button');
    const wrongOption3 = document.createElement('button');
    question.innerText = generics[num];
    correctAnswer.innerText = brands[num];
    generics.splice(num, 1);
    brands.splice(num, 1);
    shuffle(generics);
    shuffle(brands);
    wrongOption1.innerText = brands[1];
    wrongOption2.innerText = brands[2];
    wrongOption3.innerText = brands[3];

    correctAnswer.addEventListener('click', function () {
      correctAnswer.classList.add("green");

      nextQuestionCorrect();
    });

    wrongOption1.addEventListener('click', function () {
        wrongOption1.classList.add("red");
        wrongOption2.classList.add("red");
        wrongOption3.classList.add("red");
        correctAnswer.classList.add("green");

        nextQuestionWrong();
    });

    wrongOption2.addEventListener('click', function () {
        wrongOption1.classList.add("red");
        wrongOption2.classList.add("red");
        wrongOption3.classList.add("red");
        correctAnswer.classList.add("green");

        nextQuestionWrong();
    });

    wrongOption3.addEventListener('click', function () {
        wrongOption1.classList.add("red");
        wrongOption2.classList.add("red");
        wrongOption3.classList.add("red");
        correctAnswer.classList.add("green");

        nextQuestionWrong();
    });


    const display = [correctAnswer, wrongOption1, wrongOption2, wrongOption3];
    shuffle(display);

    answerOptions.appendChild(question);
    answerOptions.appendChild(display[0]);
    answerOptions.appendChild(display[1]);
    answerOptions.appendChild(display[2]);
    answerOptions.appendChild(display[3]);

    reset();
};






// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}



//Todo list stuff
