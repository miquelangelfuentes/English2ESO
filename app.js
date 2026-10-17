const questionSets = {
  contrast: {
    label: 'Present tenses',
    questions: [
      {
        q: 'My sister usually ___ to school, but today she ___ the bus.',
        options: ['walks / is taking', 'is walking / takes', 'walk / is taking'],
        answer: 0,
        hint: 'Usually indica una rutina. Today presenta una situació diferent i temporal.',
        explanation: 'Rutina → Present Simple: walks. Situació temporal d’avui → Present Continuous: is taking.'
      },
      {
        q: 'Look! The dog ___ with your shoe.',
        options: ['plays', 'is playing', 'play'],
        answer: 1,
        hint: 'Look! dirigeix l’atenció a una acció que passa ara mateix.',
        explanation: 'Per a una acció en curs ara fem servir am/is/are + verb-ing: is playing.'
      },
      {
        q: 'In this photo, our class ___ a science museum.',
        options: ['visits', 'is visiting', 'visit'],
        answer: 1,
        hint: 'Quan descrivim una fotografia, expliquem l’escena com si passés ara.',
        explanation: 'Per descriure què passa en una fotografia, fem servir Present Continuous: is visiting.'
      },
      {
        q: 'In the story, the hero ___ a secret map and ___ the island.',
        options: ['finds / reaches', 'is finding / is reaching', 'find / reach'],
        answer: 0,
        hint: 'La frase resumeix accions de la trama d’una història.',
        explanation: 'Per explicar la trama d’un llibre o una pel·lícula utilitzem Present Simple: finds / reaches.'
      },
      {
        q: 'This week I ___ at my aunt’s house.',
        options: ['stay', 'am staying', 'stays'],
        answer: 1,
        hint: 'This week indica una situació limitada en el temps.',
        explanation: 'Una situació temporal porta Present Continuous: am staying.'
      },
      {
        q: 'We ___ English on Tuesdays.',
        options: ['are having', 'has', 'have'],
        answer: 2,
        hint: 'On Tuesdays indica una rutina regular.',
        explanation: 'Per a una rutina utilitzem Present Simple. Amb we, la forma és have.'
      }
    ]
  },
  stative: {
    label: 'Stative verbs',
    questions: [
      {
        q: 'I ___ the answer to question 4.',
        options: ['am knowing', 'know', 'knowing'],
        answer: 1,
        hint: 'Know descriu un estat mental.',
        explanation: 'Know és un stative verb. En aquest significat, fem servir Present Simple: I know.'
      },
      {
        q: 'Nora ___ horror films.',
        options: ['loves', 'is loving', 'love'],
        answer: 0,
        hint: 'Love expressa un gust o sentiment.',
        explanation: 'Love normalment funciona com a stative verb: Nora loves horror films.'
      },
      {
        q: 'Which sentence gives an opinion?',
        options: ['I think this game is difficult.', 'I’m thinking about the problem.', 'I am think this game is difficult.'],
        answer: 0,
        hint: 'Think en Present Simple pot significar “opino”.',
        explanation: 'I think... expressa una opinió. I’m thinking about... descriu una activitat mental en curs.'
      },
      {
        q: 'I ___ about joining the basketball team.',
        options: ['think', 'am thinking', 'thinks'],
        answer: 1,
        hint: 'Aquí think significa “m’estic plantejant / hi estic pensant”.',
        explanation: 'Quan think descriu una activitat mental en curs, podem utilitzar Present Continuous: am thinking.'
      },
      {
        q: 'This notebook ___ to Eric.',
        options: ['is belonging', 'belongs', 'belong'],
        answer: 1,
        hint: 'Belong expressa possessió o pertinença.',
        explanation: 'Belong és un stative verb. Amb this notebook fem servir belongs.'
      },
      {
        q: 'Which sentence is correct?',
        options: ['I’m understanding you now.', 'I understand you now.', 'I am understand you now.'],
        answer: 1,
        hint: 'Understand descriu un estat de comprensió.',
        explanation: 'Understand normalment no s’utilitza en Continuous. La forma correcta és I understand you now.'
      }
    ]
  },
  tags: {
    label: 'Tag questions',
    questions: [
      {
        q: 'Emma is tired, ___?',
        options: ['is she', 'isn’t she', 'doesn’t she'],
        answer: 1,
        hint: 'La frase és afirmativa i l’auxiliar és is.',
        explanation: 'Frase afirmativa → tag negativa. Reutilitzem is i Emma es converteix en she: isn’t she?'
      },
      {
        q: 'They aren’t at home, ___?',
        options: ['aren’t they', 'are they', 'do they'],
        answer: 1,
        hint: 'La frase és negativa, així que la tag ha de ser afirmativa.',
        explanation: 'Conservem l’auxiliar are, canviem la polaritat i mantenim they: are they?'
      },
      {
        q: 'You have got a dog, ___?',
        options: ['don’t you', 'haven’t you', 'have you'],
        answer: 1,
        hint: 'La frase ja conté l’auxiliar have.',
        explanation: 'Amb have got reutilitzem have. Frase afirmativa → haven’t you?'
      },
      {
        q: 'Leo plays basketball, ___?',
        options: ['doesn’t he', 'isn’t he', 'does he'],
        answer: 0,
        hint: 'És Present Simple i no hi ha cap auxiliar escrit a la frase.',
        explanation: 'Amb Present Simple fem servir do/does. Leo = he i la frase és afirmativa: doesn’t he?'
      },
      {
        q: 'We won’t be late, ___?',
        options: ['won’t we', 'will we', 'are we'],
        answer: 1,
        hint: 'Won’t ja és negatiu.',
        explanation: 'Frase negativa → tag afirmativa. Reutilitzem will: will we?'
      },
      {
        q: 'Your parents are working, ___?',
        options: ['aren’t they', 'are they', 'don’t they'],
        answer: 0,
        hint: 'Busca l’auxiliar de la frase i canvia your parents per un pronom.',
        explanation: 'L’auxiliar és are. Your parents = they. Frase afirmativa → aren’t they?'
      }
    ]
  },
  mixed: {
    label: 'Mixed challenge',
    questions: [
      {
        q: 'Mia usually ___ jeans, but today she ___ a dress.',
        options: ['wears / is wearing', 'is wearing / wears', 'wear / wearing'],
        answer: 0,
        hint: 'Contrasta un hàbit amb una situació d’avui.',
        explanation: 'Usually → Present Simple: wears. Today → Present Continuous: is wearing.'
      },
      {
        q: 'Your brother likes this band, ___?',
        options: ['isn’t he', 'doesn’t he', 'does he'],
        answer: 1,
        hint: 'Likes és Present Simple i la frase és afirmativa.',
        explanation: 'Amb Present Simple i he fem servir does en negatiu: doesn’t he?'
      },
      {
        q: 'In the film, the main character ___ a message and ___ to London.',
        options: ['receives / travels', 'is receiving / is travelling', 'receive / travel'],
        answer: 0,
        hint: 'Estàs resumint la trama d’una pel·lícula.',
        explanation: 'La trama s’explica en Present Simple: receives / travels.'
      },
      {
        q: 'I ___ about buying a new backpack.',
        options: ['think', 'am thinking', 'thinks'],
        answer: 1,
        hint: 'Aquí think significa que estàs considerant una possibilitat.',
        explanation: 'Quan think és una activitat mental en curs, podem dir I’m thinking about...'
      },
      {
        q: 'They will come with us, ___?',
        options: ['will they', 'won’t they', 'don’t they'],
        answer: 1,
        hint: 'La frase és afirmativa i ja té l’auxiliar will.',
        explanation: 'Reutilitzem will en forma negativa i they es manté: won’t they?'
      },
      {
        q: 'My brother isn’t studying now, ___?',
        options: ['is he', 'isn’t he', 'does he'],
        answer: 0,
        hint: 'La frase és negativa i l’auxiliar és is.',
        explanation: 'Frase negativa → tag afirmativa. Reutilitzem is i brother = he: is he?'
      }
    ]
  }
};

let activeSet = 'contrast';
let questionIndex = 0;
let score = 0;
let answered = false;

const quiz = document.querySelector('#quiz');
const tabs = document.querySelectorAll('.practice-tab');

function storageKey(setName) {
  return `english2eso-unit2-best-${setName}`;
}

function updateBestScores() {
  Object.keys(questionSets).forEach((setName) => {
    const target = document.querySelector(`#best-${setName}`);
    if (!target) return;
    const total = questionSets[setName].questions.length;
    const best = Number(localStorage.getItem(storageKey(setName)) || 0);
    target.textContent = `${best}/${total}`;
  });
}

function renderQuiz() {
  if (!quiz) return;

  const set = questionSets[activeSet];
  const list = set.questions;

  if (questionIndex >= list.length) {
    const previousBest = Number(localStorage.getItem(storageKey(activeSet)) || 0);
    const best = Math.max(previousBest, score);
    localStorage.setItem(storageKey(activeSet), best);
    updateBestScores();

    let message = 'Repassa les explicacions marcades pels teus errors i torna-ho a provar.';
    if (score === list.length) message = 'Molt bona feina. Has resolt tot el bloc correctament.';
    else if (score >= 4) message = 'Bon resultat. Revisa els errors abans de passar al bloc següent.';

    quiz.innerHTML = `
      <div class="quiz-meta"><span>${set.label} completat</span><b>${score}/${list.length}</b></div>
      <div class="quiz-finish">
        <h3>${message}</h3>
        <p>La teva millor marca en aquest bloc és <strong>${best}/${list.length}</strong>.</p>
        <button class="next-btn" id="restart" type="button">Torna a començar aquest bloc</button>
      </div>`;

    document.querySelector('#restart').addEventListener('click', () => {
      questionIndex = 0;
      score = 0;
      renderQuiz();
    });
    return;
  }

  const item = list[questionIndex];
  answered = false;
  const progress = Math.round((questionIndex / list.length) * 100);

  quiz.innerHTML = `
    <div class="quiz-meta"><span>${set.label} - pregunta ${questionIndex + 1} de ${list.length}</span><b>${score} punts</b></div>
    <div class="quiz-progress" aria-hidden="true"><span style="width:${progress}%"></span></div>
    <h3 class="quiz-question">${item.q}</h3>
    <div class="quiz-options">
      ${item.options.map((option, index) => `<button class="quiz-option" type="button" data-option="${index}">${option}</button>`).join('')}
    </div>
    <div id="feedback" class="quiz-feedback-slot"></div>
    <div class="quiz-actions">
      <button class="hint-btn" id="hint" type="button">Mostra una pista</button>
    </div>`;

  document.querySelectorAll('.quiz-option').forEach((button) => {
    button.addEventListener('click', () => answerQuestion(Number(button.dataset.option)));
  });

  document.querySelector('#hint').addEventListener('click', (event) => {
    document.querySelector('#feedback').innerHTML = `<div class="quiz-feedback hint"><b>Pista</b><p>${item.hint}</p></div>`;
    event.currentTarget.disabled = true;
  });
}

function answerQuestion(choice) {
  if (answered) return;
  answered = true;

  const item = questionSets[activeSet].questions[questionIndex];
  const isCorrect = choice === item.answer;

  document.querySelectorAll('.quiz-option').forEach((button, index) => {
    button.disabled = true;
    if (index === item.answer) button.classList.add('correct');
    if (index === choice && index !== item.answer) button.classList.add('wrong');
  });

  if (isCorrect) score += 1;

  document.querySelector('#feedback').innerHTML = `
    <div class="quiz-feedback ${isCorrect ? 'success' : 'error'}">
      <b>${isCorrect ? 'Correcte ✓' : 'Revisa-ho'}</b>
      <p>${item.explanation}</p>
    </div>`;

  document.querySelector('.quiz-actions').innerHTML = '<button class="next-btn" id="next" type="button">Següent pregunta →</button>';
  document.querySelector('#next').addEventListener('click', () => {
    questionIndex += 1;
    renderQuiz();
  });
}

function selectSet(setName, selectedTab) {
  activeSet = setName;
  questionIndex = 0;
  score = 0;

  tabs.forEach((tab) => {
    const selected = tab === selectedTab;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
  });

  renderQuiz();
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => selectSet(tab.dataset.set, tab));
});

const printButton = document.querySelector('#print-page');
if (printButton) printButton.addEventListener('click', () => window.print());

updateBestScores();
renderQuiz();
