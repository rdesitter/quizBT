// -------------------------- //
// Construction des questions //
// -------------------------- //

class Question {
    constructor(items,src,reponse){
        this.items = items;
        this.src = src;
        this.reponse = reponse;
        this.getAnswer = function(){
            for(let i=0; i<4; i++){
                //On vérifie quel item correspond à la bonne réponse
                if (this.items[i] == this.reponse) {
                    //let answerIs = 'item' + i;
                    //console.log('bonne réponse = ' + answerIs);
                    return this.items[i];
                }
            } 
        };
        this.constructRadios = function(){
            let numberOfQuestion = document.getElementById('questionNumber');
            numberOfQuestion.innerHTML = itemNumber + 1;
            let radiosGroup = document.getElementById('quiz__question__items');
            let inputs = '';
            for(let i=0; i<4; i++){
                inputs += '<input type="radio" name="item" value="'+items[i]+'" label="' + this.items[i] + '" >';
            }
            radiosGroup.innerHTML = inputs; 
        };
        this.displayAnswer = function(){
            if (document.querySelector('input[name="item"]')) {
                document.querySelectorAll('input[name="item"]').forEach((elem) => {
                    elem.addEventListener("change", function(event) {
                    //on récupère la valeur de la radio checkée
                    var item = event.target.value;
                    //si on choisi le bon bouton
                    if(item == reponse){
                        let answerImg = document.getElementById('img');
                        answerImg.setAttribute("src", src);
                        answerImg.addEventListener('load', (event) => {
                            document.getElementById('quiz__answer__title').innerHTML = 'Félicitations c\'était bien ' + item;
                            document.getElementById('quiz__answer__title').classList.remove('quiz__answer__title-error');
                            document.getElementById('answer').classList.replace('quiz__answer-close', 'quiz__answer-open');
                        });
                        score++;
                        //console.log('MAJ score = '+score);
                    } else {
                        let answerImg = document.getElementById('img');
                        answerImg.setAttribute("src", src);
                        answerImg.addEventListener('load', (event) => {
                            document.getElementById('quiz__answer__title').innerHTML = 'Désolé la bonne réponse était ' + reponse;
                            document.getElementById('quiz__answer__title').classList.add('quiz__answer__title-error');
                            document.getElementById('answer').classList.replace('quiz__answer-close', 'quiz__answer-open');  
                        });             
                        //console.log('score = '+score);
                    }
                    });
                });
            }
        };
    }
}

let questions = [
    // new Question(['', '', '',''], './img/quiz/006.jpg', '')
    new Question(['Laurent Voulzy', 'Manu Chao', 'James Blunt','Antoine'], './img/quiz/001.jpg', 'Laurent Voulzy'),
    new Question(['Arthur', 'Julien Absalon', 'Serge Lama','Mouloud Achour'], './img/quiz/002.jpg', 'Serge Lama'),
    new Question(['Les Nuls', 'Les Inconnus', 'Les Robins des Bois','Les Schtroumpfs'], './img/quiz/003.jpg', 'Les Inconnus'),
    new Question(['Roberto Alagna', 'Abd al Malik', 'Amir','Renaud'], './img/quiz/004.jpg', 'Renaud'),
    new Question(['Christine Ockrent', 'David Pujadas', 'Claire Chazal','Yves Mourousi'], './img/quiz/005.jpg', 'Christine Ockrent'),
    new Question(['Anne Roumanoff', 'Jean Benguigui', 'Alain Chabat','Max Boublil'], './img/quiz/006.jpg', 'Alain Chabat'),
    new Question(['Alain Souchon', 'Charles Aznavour', 'Claude François','Jacques Dutronc'], './img/quiz/007.jpg', 'Alain Souchon'),
    new Question(['Kad Merad', 'Richard Berry', 'Gérard Lanvin','Gérard Darmon'], './img/quiz/008.jpg', 'Gérard Darmon'),
    new Question(['Christian CLavier', 'Monica Bellucci', 'Omar Sy','Jamel Debbouze'], './img/quiz/009.jpg', 'Jamel Debbouze'),
    new Question(['Vincent Desagnat', 'Michaël Youn', 'Benjamin Morgaine','Magloire'], './img/quiz/010.jpg', 'Michaël Youn'),
    new Question(['Jean-Yves Lafesse', 'Laurent Baffie', 'Coluche','Pascal Selem'], './img/quiz/011.jpg', 'Jean-Yves Lafesse'),
    new Question(['Yolande Moreau', 'Philippe Duquesne', 'Bruno Lochet','François Morel'], './img/quiz/012.jpg', 'François Morel'),
    new Question(['Loana', 'Steevy Boulay', 'Caroline Diament','Laurent Ruquier'], './img/quiz/013.jpg', 'Steevy Boulay'),
    new Question(['Smaïn', 'Elie Kakou', 'Patrick Timsit','Roland Giraud'], './img/quiz/014.jpg', 'Smaïn'),
    new Question(['Marc Lavoine', 'Florent Pagny', 'Pascal Obispo','Calogero'], './img/quiz/015.jpg', 'Pascal Obispo'),
    new Question(['Michel Blanc', 'Marie-Anne Chazel', 'Thierry Lhermitte','Christian Clavier'], './img/quiz/016.jpg', 'Thierry Lhermitte'),
    new Question(['Benoît Poelvoorde', 'Clovis Cornillac', 'Benoît Delépine','Vincent Lindon'], './img/quiz/017.jpg', 'Benoît Poelvoorde'),
    new Question(['Omar et Fred', 'Les Frères Taloche', 'Shirley & Dino','Eric et Ramzy'], './img/quiz/018.jpg', 'Eric et Ramzy'),
    new Question(['Jean-Paul Rouve', 'Maurice Barthélemy', 'Marina Foïs','Pef'], './img/quiz/019.jpg', 'Jean-Paul Rouve'),
    new Question(['Michel Drucker', 'Patrick Sébastien', 'Philippe Bouvard','Jean-Pierre Foucault'], './img/quiz/020.jpg', 'Jean-Pierre Foucault'),
    new Question(['Philippe Gildas', 'Antoine de Caunes', 'Michel Denisot','Maïtena Biraben'], './img/quiz/021.jpg', 'Antoine de Caunes'),
    new Question(['Alain Delon', 'Mireille Darc', 'Catherine Deneuve','Jean-Paul Belmondo'], './img/quiz/022.jpg', 'Jean-Paul Belmondo'),
    new Question(['Kev Adams', 'Cyril Hanouna', 'Gad Elmaleh','Kad Merad'], './img/quiz/023.jpg', 'Gad Elmaleh'),
    new Question(['Eddy Mitchell', 'Jacques Dutronc', 'Michel Sardou','Dick Rivers'], './img/quiz/024.jpg', 'Eddy Mitchell'),
    new Question(['Patrick Fiori', 'Patrick Bruel', 'Marc Lavoine','Julien Clerc'], './img/quiz/025.jpg', 'Patrick Bruel'),
    new Question(['Pagny', 'Zazie', 'JJ Goldman','Bénabar'], './img/quiz/026.jpg', 'JJ Goldman'),
    new Question(['Serge Gainsbourg', 'Michel Sardou', 'Charles Aznavour','Johnny Hallyday'], './img/quiz/027.jpg', 'Johnny Hallyday'),
    new Question(['Josiane Balasko', 'Richard Berry', 'Dominique Lavanant','Victoria Abril'], './img/quiz/028.jpg', 'Josiane Balasko'),
    new Question(['Lindsay Lohan', 'Paris Hilton', 'Britney Spears','Pamela Anderson'], './img/quiz/029.jpg', 'Paris Hilton'),
    new Question(['Isabelle Nanty', 'Emma de Caunes', 'Noémie Lenoir','Laetitia Casta'], './img/quiz/030.jpg', 'Noémie Lenoir'),
    new Question(['Chantal Lauby', 'Inès Reg', 'Tarek Boudali','Ary Abittan'], './img/quiz/031.jpg', 'Ary Abittan'),
    new Question(['Philippe Katerine', 'Helena Noguerra', 'Arielle Dombasle','Vincent Delerm'], './img/quiz/032.jpg', 'Philippe Katerine'),
    new Question(['Le Palmashow', 'La Bande à Fifi', 'Golden Moustache','Studio Bagel'], './img/quiz/033.jpg', 'La Bande à Fifi'),
    new Question(['Kad Merad', 'Maurice Barthélemy', 'Dany Boon','Guy Lecluyse'], './img/quiz/034.jpg', 'Dany Boon'),
    new Question(['Samy Naceri', 'Nicolas Duvauchelle', 'Pascal Elbé','Roschdy Zem'], './img/quiz/035.jpg', 'Roschdy Zem'),
    new Question(['José Garcia', 'Richard Anconina', 'Bruno Solo','Gilbert Melki'], './img/quiz/036.jpg', 'José Garcia'),
    new Question(['Fanny Ardant', 'Patrick Chesnais', 'Sandrine Kiberlain','Laurent Lafitte'], './img/quiz/037.jpg', 'Patrick Chesnais'),
    new Question(['Camille Lellouche', 'Fauve Hautot', 'Rayane Bensetti','Keen\'V'], './img/quiz/038.jpg', 'Rayane Bensetti'),
    new Question(['Jonathan Cohen', 'Gilles Lellouche', 'Camille Combal','Manu Payet'], './img/quiz/039.jpg', 'Manu Payet'),
    new Question(['François Damiens', 'Audrey Tautou', 'Dominique Pinon','Mélanie Laurent'], './img/quiz/040.jpg', 'François Damiens'),
    new Question(['Éric Antoine', 'Arturo Brachetti', 'Patrick Sébastien','Jérémy Ferrari'], './img/quiz/041.jpg', 'Arturo Brachetti'),
    new Question(['Roland Magdane', 'Popeck', 'Michel Leeb','Fabrice Luchini'], './img/quiz/042.jpg', 'Michel Leeb'),
    new Question(['FX Demaison', 'Jérôme Commandeur', 'Franck Dubosc','Arnaud Ducret'], './img/quiz/043.jpg', 'Arnaud Ducret'),
    new Question(['Nawell Madani', 'Inès Reg', 'Blanche Gardin','Camille Lellouche'], './img/quiz/044.jpg', 'Nawell Madani'),
    new Question(['Kim Chapiron', 'Nicolas Duvauchelle', 'Ludivine Sagnier','Aure Atika'], './img/quiz/045.jpg', 'Nicolas Duvauchelle'),
    new Question(['Stéphane Bern', 'Julien Courbey', 'Lorànt Deutsch','Stomy Bugsy'], './img/quiz/046.jpg', 'Lorànt Deutsch'),
    new Question(['Lanvin & De Palma', 'Clavier & Reno', 'Palmade & Laroque','Le Bolloc\'h & Solo'], './img/quiz/047.jpg', 'Le Bolloc\'h & Solo'),
    new Question(['Alexandra Lamy', 'Audrey Lamy', 'Jean Dujardin','Thomas Dutronc'], './img/quiz/048.jpg', 'Alexandra Lamy'),
    new Question(['Emmanuel Petit', 'Youri Djorkaeff', 'Bixente Lizarazu','Lilian Thuram'], './img/quiz/049.jpg', 'Youri Djorkaeff'),
    new Question(['Fabien Galthié', 'Guy Novès', 'Daniel Herrero','Serge Blanco'], './img/quiz/050.jpg', 'Daniel Herrero')
];
// -------------------------- //
//Initialisation des variables//
// -------------------------- //
let usedNumbers = []; //On prépare le tableau pour les questions utilisées
let questionsNumber = questions.length;  //On récupère le nombre de questions disponibles
let itemNumber = 0;
let score = 0;
//console.log('score = '+score);

// -------------------------- //
//  Bouton question suivante  //
// -------------------------- //
const nextButton = document.getElementById('next');
nextButton.addEventListener('click', function(){
    if(itemNumber == 9){
        nextButton.innerText = 'Voir mon score';
    } else {
        nextButton.innerText = 'Question suivante'
    }
    document.getElementById('answer').classList.replace('quiz__answer-open', 'quiz__answer-close');
    getRandomQuestion(); //On appelle une question
});

// -------------------------- //
//     Appel d'une question   //
// -------------------------- //
// Question aléatoire && non déjà posée
function randomNumber(){
    return Math.floor((Math.random() * questionsNumber));
}

function getRandomQuestion(){
    //console.log(score);
    let randomNum = randomNumber(); //On prend un entier au hasard entre 0 et questionsNumber - 1
    let check = usedNumbers.includes(randomNum); //on vérifie si randomNUm est déjà utilisé
    //console.log(check);
    let usedLength = usedNumbers.length;
    if(usedLength < questionsNumber && check == false){
        usedNumbers.push(randomNum);
        questions[randomNum].getAnswer();
        questions[randomNum].constructRadios();
        questions[randomNum].displayAnswer(); 
        itemNumber++;
        //console.log(itemNumber)
    }else if(usedLength < questionsNumber && check == true){
        getRandomQuestion();
    } else if(usedLength = questionsNumber){
        finDuQuiz();
    }
    if(itemNumber == 11){
        finDuQuiz();
    }
}

// -------------------------- //
//  Affichage des résultats   //
// -------------------------- //
function finDuQuiz(){
    let msgFinal = "";
    let textFinal = "";
    if(score == 10) {
        msgFinal = "Félicitations";
        textFinal = "La Brasserie doit être votre seconde maison !"
    } else if(score < 10 && score > 6){
        msgFinal = "Bravo";
        textFinal = "Vous connaissez bien la Brasserie !"
    } else if(score == 5 || score == 6) {
        msgFinal = "Pas mal";
        textFinal = "Vous êtes sur la bonne voie !"
    } else {
        msgFinal = "Pas de chance";
        textFinal = "Vous ferez mieux la prochaine fois !"
    }


    let finDePartie = "<div class=\"score\"><h2 class=\"score__title\">"+msgFinal+"</h2><p>"+textFinal+"</p><div class=\"score__final\">Votre score : <span class=\"score__final-answer\">"+score+"</span></div></div><div class=\"score__rejouer\" id=\"rejouer\">Nouvelle partie</div>";
    let nouvellePartie = "<embed class=\"quiz__logo\" src=\"img/quiz2.svg\" alt=\"Quiz de la brasserie\"></embed><h2 class=\"quiz__question__title\">Question <span id=\"questionNumber\"></span>/10</h2><p class=\"quiz__question__text\">Qui a déjà mangé à la brasserie du theatre ?</p><div class=\"quiz__question__items\" id=\"quiz__question__items\"></div>";
    
    document.getElementById('question').innerHTML = finDePartie;
    document.getElementById('rejouer').addEventListener('click', function(){
        document.getElementById('question').innerHTML = nouvellePartie;
        itemNumber = 0;
        score = 0;
        usedNumbers = [];
        getRandomQuestion();
    });
};


// -------------------------- //
//  faux écran de chargement  //
// -------------------------- //
var bars = document.querySelectorAll('.loading__content__progress > span');

function hideLoader(){
    setInterval(function(){
        bars.forEach(function(bar){
          var getWidth = parseFloat(bar.dataset.progress);
          
          for(var i = 0; i <= getWidth; i++) {
            bar.style.width = i + '%';
          }

        });
    }, 100);

    setTimeout(function() {
        let loadHide = document.getElementById('loading');
        loadHide.setAttribute("style", "display:none !important");
      }, 2000); // for 3 seconds

}


// -------------------------- //
// bouton démarrer la partie  //
// -------------------------- //
let btnStart = document.getElementById('btnStart');
btnStart.addEventListener('click', function(){
    score = 0;
    document.getElementById('home').style.display = "none";
    document.getElementById('quiz').style.display = "block";
});

// -------------------------- //
//     On lance le script     //
// -------------------------- //
hideLoader(); //Affichage du faux loader

document.addEventListener("DOMContentLoaded", function(event) { 
    getRandomQuestion(); //Quand le doc est chargé on lance le quiz
});  