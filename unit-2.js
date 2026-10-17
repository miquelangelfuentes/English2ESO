const questions={
  1:[
    {q:"My brother ___ football every Saturday.",o:["plays","is playing","play"],a:0,h:"Every Saturday indica una rutina.",e:"Fem servir Present Simple per als hàbits. Amb he/she/it afegim -s: plays."},
    {q:"Look! The dog ___ in the garden.",o:["runs","is running","run"],a:1,h:"Look! ens diu que passa ara mateix.",e:"Una acció en progrés ara porta am/is/are + verb-ing: is running."},
    {q:"I ___ the answer.",o:["am knowing","know","knowing"],a:1,h:"Know descriu un estat mental.",e:"Know és un stative verb. Normalment fem servir Present Simple: I know."},
    {q:"Nora ___ horror films.",o:["loves","is loving","love"],a:0,h:"Love expressa un gust o sentiment.",e:"Love normalment és un stative verb. Amb Nora fem servir loves."},
    {q:"Laura is your teacher, ___?",o:["is she","isn't she","doesn't she"],a:1,h:"La frase és afirmativa i l'auxiliar és is.",e:"La tag ha de ser negativa. Laura es converteix en she: isn't she?"},
    {q:"You have got a car, ___?",o:["don't you","haven't you","have you"],a:1,h:"La frase ja conté l'auxiliar have.",e:"Amb have got reutilitzem have. Com que la frase és afirmativa, la tag és haven't you?"},
    {q:"My friends ___ for the test now.",o:["study","are studying","studies"],a:1,h:"Now indica una acció en curs.",e:"Amb un subjecte plural fem servir are + verb-ing: are studying."},
    {q:"We will be late, ___?",o:["will we","won't we","aren't we"],a:1,h:"La frase és afirmativa i l'auxiliar és will.",e:"Reutilitzem will en negatiu i mantenim we: won't we?"}
  ],
  2:[
    {q:"We usually ___ at home, but today we ___ out.",o:["eat / are eating","are eating / eat","eat / eat"],a:0,h:"Una part és rutina; l'altra és una situació temporal d'avui.",e:"Usually → Present Simple (eat). Today → Present Continuous (are eating)."},
    {q:"She doesn't understand the question, ___?",o:["doesn't she","is she","does she"],a:2,h:"La frase és negativa i l'auxiliar és does.",e:"La tag canvia a afirmativa i conserva l'auxiliar i el pronom: does she?"},
    {q:"Why ___ you ___ at me right now?",o:["do / look","are / looking","are / look"],a:1,h:"Right now demana Present Continuous.",e:"En una pregunta en Present Continuous fem servir are + subject + verb-ing."},
    {q:"In the story, the hero ___ a secret door and ___ a hidden room.",o:["finds / enters","is finding / is entering","find / enter"],a:0,h:"La frase resumeix accions de la trama.",e:"Per explicar què passa en una història utilitzem Present Simple: finds / enters."},
    {q:"In this photo, two students ___ basketball.",o:["play","are playing","plays"],a:1,h:"Descrius una fotografia com si l'escena passés ara.",e:"Per descriure una fotografia fem servir Present Continuous: are playing."},
    {q:"This week I ___ at my aunt's house, but I normally ___ at home.",o:["stay / am living","am staying / live","stay / live"],a:1,h:"This week és temporal; normally indica la situació habitual.",e:"Situació temporal: am staying. Situació habitual: live."},
    {q:"Marta likes this song, ___?",o:["does she","doesn't she","isn't she"],a:1,h:"Likes és Present Simple i la frase és afirmativa.",e:"Amb Present Simple i she fem servir does en negatiu: doesn't she?"},
    {q:"It isn't raining, ___?",o:["is it","isn't it","does it"],a:0,h:"La frase és negativa i l'auxiliar és is.",e:"La tag ha de ser afirmativa. Reutilitzem is i mantenim it: is it?"}
  ],
  3:[
    {q:"I ___ this soup to check if it needs salt.",o:["taste","am tasting","tastes"],a:1,h:"Aquí taste és una acció voluntària que passa ara.",e:"Alguns stative verbs poden canviar de significat. Am tasting significa que estic tastant la sopa ara."},
    {q:"Which sentence is correct?",o:["I am having a bike.","I have a bike.","I having a bike."],a:1,h:"Aquí have expressa possessió.",e:"Quan have significa possessió, normalment fem servir Present Simple: I have a bike."},
    {q:"Your parents have got the tickets, ___?",o:["don't they","haven't they","have they"],a:1,h:"Copia l'auxiliar de have got i canvia'n la polaritat.",e:"Frase afirmativa amb have got → tag negativa haven't; your parents → they."},
    {q:"The weather is nice, ___?",o:["is it","isn't it","doesn't it"],a:1,h:"The weather es converteix en it.",e:"La frase és afirmativa i l'auxiliar és is. Per tant: isn't it?"},
    {q:"In the film, the main character ___ a message and ___ to London.",o:["receives / travels","is receiving / is travelling","receive / travel"],a:0,h:"Estàs resumint la trama d'una pel·lícula.",e:"Les trames s'expliquen normalment en Present Simple: receives / travels."},
    {q:"Which pair shows the change of meaning correctly?",o:["I think it's difficult / I'm thinking about the problem","I am knowing the answer / I know now","I am belonging to this club / I belong this club"],a:0,h:"Think pot expressar una opinió o una activitat mental en curs.",e:"I think... expressa opinió. I'm thinking about... descriu una activitat mental que passa ara."},
    {q:"My brother isn't studying now, ___?",o:["is he","isn't he","does he"],a:0,h:"La frase és negativa i l'auxiliar és is.",e:"Frase negativa → tag afirmativa. Brother es converteix en he: is he?"},
    {q:"Anna and Joel usually ___ to school, but this week they ___ the bus.",o:["walk / are taking","are walking / take","walks / are taking"],a:0,h:"Usually indica rutina; this week presenta una situació temporal.",e:"Rutina amb subjecte plural: walk. Situació temporal: are taking."}
  ]
};

let level=1,index=0,score=0,answered=false;
const quiz=document.querySelector('#quiz');
const tabs=document.querySelectorAll('.tab');

function render(){
  if(!quiz)return;
  const list=questions[level];
  if(index>=list.length){
    const message=score===list.length?'Excel·lent! Ho domines. 🌟':score>=list.length/2?'Molt bé! Revisa les explicacions i prova el nivell següent.':'Bon intent! Torna a mirar les explicacions i repeteix el nivell quan vulguis.';
    const best=Math.max(score,Number(localStorage.getItem(`english2eso-best-${level}`)||0));
    localStorage.setItem(`english2eso-best-${level}`,best);updateScores();
    quiz.innerHTML=`<div class="quiz-top"><span>Nivell ${level} completat</span><span>${score}/${list.length}</span></div><h3 class="question">${message}</h3><p>Has encertat ${score} de ${list.length} preguntes. Millor marca: <b>${best}/${list.length}</b>.</p><div class="quiz-actions"><button class="next-btn" id="restart">Torna-ho a provar</button></div>`;
    document.querySelector('#restart').onclick=()=>{index=0;score=0;render()};return;
  }
  const item=list[index];answered=false;
  quiz.innerHTML=`<div class="quiz-top"><span>Pregunta ${index+1} de ${list.length}</span><span>Puntuació: ${score}</span></div><div class="progress"><i style="width:${index/list.length*100}%"></i></div><h3 class="question">${item.q}</h3><div class="options">${item.o.map((x,i)=>`<button class="option" data-i="${i}" type="button">${x}</button>`).join('')}</div><div id="message"></div><div class="quiz-actions"><button class="hint-btn" id="hint" type="button">Necessito una pista</button></div>`;
  document.querySelectorAll('.option').forEach(btn=>btn.onclick=()=>answer(Number(btn.dataset.i)));
  document.querySelector('#hint').onclick=()=>{document.querySelector('#message').innerHTML=`<div class="feedback"><b>Pista:</b> ${item.h}</div>`};
}

function answer(choice){
  if(answered)return;answered=true;const item=questions[level][index];
  document.querySelectorAll('.option').forEach((b,i)=>{b.disabled=true;if(i===item.a)b.classList.add('correct');if(i===choice&&i!==item.a)b.classList.add('wrong')});
  if(choice===item.a)score++;
  document.querySelector('#message').innerHTML=`<div class="feedback"><b>${choice===item.a?'Correcte! ✓':'Encara no.'}</b> ${item.e}</div>`;
  document.querySelector('.quiz-actions').innerHTML='<button class="next-btn" id="next" type="button">Següent pregunta →</button>';
  document.querySelector('#next').onclick=()=>{index++;render()};
}

tabs.forEach(tab=>tab.onclick=()=>{tabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');level=Number(tab.dataset.level);index=0;score=0;render()});

function updateScores(){
  [1,2,3].forEach(n=>{
    const target=document.querySelector(`#best-${n}`);
    if(target)target.textContent=`${localStorage.getItem(`english2eso-best-${n}`)||0}/${questions[n].length}`;
  });
}

updateScores();
render();
