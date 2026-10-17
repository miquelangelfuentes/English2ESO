const questions={
  1:[
    {q:"My brother ___ football every Saturday.",o:["plays","is playing","play"],a:0,h:"Every Saturday indica una rutina.",e:"Fem servir Present Simple per als hàbits. Amb he/she/it afegim -s: plays."},
    {q:"Look! The dog ___ in the garden.",o:["runs","is running","run"],a:1,h:"Look! ens diu que passa ara mateix.",e:"Una acció en progrés ara porta am/is/are + verb-ing: is running."},
    {q:"Laura is your teacher, ___?",o:["is she","isn't she","doesn't she"],a:1,h:"La frase és afirmativa; la tag ha de ser negativa.",e:"Repetim l'auxiliar is en negatiu i Laura es converteix en she: isn't she?"},
    {q:"I ___ chocolate. (general preference)",o:["am loving","love","loving"],a:1,h:"Love expressa un gust, no una acció.",e:"Love és un stative verb i normalment no s'utilitza en Continuous."}
  ],
  2:[
    {q:"We usually ___ at home, but today we ___ out.",o:["eat / are eating","are eating / eat","eat / eat"],a:0,h:"Una part és rutina; l'altra és una situació temporal d'avui.",e:"Usually → Present Simple (eat). Today, en aquest contrast → Present Continuous (are eating)."},
    {q:"She doesn't understand the question, ___?",o:["doesn't she","is she","does she"],a:2,h:"La frase és negativa i l'auxiliar és does.",e:"La tag canvia a afirmativa i conserva l'auxiliar i el pronom: does she?"},
    {q:"Why ___ you ___ at me right now?",o:["do / look","are / looking","are / look"],a:1,h:"Right now demana Continuous.",e:"Present Continuous interrogatiu: are + subject + verb-ing."},
    {q:"Which sentence is correct?",o:["I'm knowing her name.","I know her name.","I am know her name."],a:1,h:"Know és un verb de la ment.",e:"Know és stative: fem servir Present Simple, I know."}
  ],
  3:[
    {q:"Choose the best option: I ___ this soup to check if it needs salt.",o:["taste","am tasting","tastes"],a:1,h:"Aquí taste és una acció voluntària que passa ara.",e:"Alguns stative verbs canvien de significat. Am tasting = estic tastant; tastes = té gust."},
    {q:"Nobody called while I was out, ___?",o:["did they","didn't they","was I"],a:0,h:"Nobody té sentit negatiu. El pronom habitual és they.",e:"Com que nobody ja és negatiu, la tag és afirmativa: did they?"},
    {q:"Your parents have got the tickets, ___?",o:["don't they","haven't they","have they"],a:1,h:"Copia l'auxiliar de have got i canvia'n el signe.",e:"Frase afirmativa amb have got → tag negativa haven't; your parents → they."},
    {q:"Which pair shows a change of meaning correctly?",o:["I think it's good / I'm thinking about it","I am having a car / I have lunch now","I see your point / I am seeing the mountain"],a:0,h:"Think pot significar opinió o procés mental.",e:"I think = és la meva opinió. I'm thinking = hi estic reflexionant ara."}
  ]
};

let level=1,index=0,score=0,answered=false;
const quiz=document.querySelector('#quiz');
const tabs=document.querySelectorAll('.tab');

function render(){
  const list=questions[level];
  if(index>=list.length){
    const message=score===list.length?'Excel·lent! Ho domines. 🌟':score>=list.length/2?'Molt bé! Revisa les explicacions i prova el nivell següent.':'Bon intent! Torna a mirar les targetes i repeteix sense pressa.';
    quiz.innerHTML=`<div class="quiz-top"><span>Nivell ${level} completat</span><span>${score}/${list.length}</span></div><h3 class="question">${message}</h3><p>Has encertat ${score} de ${list.length} preguntes.</p><div class="quiz-actions"><button class="next-btn" id="restart">Torna-ho a provar</button></div>`;
    document.querySelector('#restart').onclick=()=>{index=0;score=0;render()};return;
  }
  const item=list[index];answered=false;
  quiz.innerHTML=`<div class="quiz-top"><span>Pregunta ${index+1} de ${list.length}</span><span>Puntuació: ${score}</span></div><div class="progress"><i style="width:${index/list.length*100}%"></i></div><h3 class="question">${item.q}</h3><div class="options">${item.o.map((x,i)=>`<button class="option" data-i="${i}">${x}</button>`).join('')}</div><div id="message"></div><div class="quiz-actions"><button class="hint-btn" id="hint">Necessito una pista</button></div>`;
  document.querySelectorAll('.option').forEach(btn=>btn.onclick=()=>answer(Number(btn.dataset.i)));
  document.querySelector('#hint').onclick=()=>{document.querySelector('#message').innerHTML=`<div class="feedback"><b>Pista:</b> ${item.h}</div>`};
}

function answer(choice){
  if(answered)return;answered=true;const item=questions[level][index];
  document.querySelectorAll('.option').forEach((b,i)=>{b.disabled=true;if(i===item.a)b.classList.add('correct');if(i===choice&&i!==item.a)b.classList.add('wrong')});
  if(choice===item.a)score++;
  document.querySelector('#message').innerHTML=`<div class="feedback"><b>${choice===item.a?'Correcte! ✓':'Encara no.'}</b> ${item.e}</div>`;
  document.querySelector('.quiz-actions').innerHTML='<button class="next-btn" id="next">Següent pregunta →</button>';
  document.querySelector('#next').onclick=()=>{index++;render()};
}

tabs.forEach(tab=>tab.onclick=()=>{tabs.forEach(t=>t.classList.remove('active'));tab.classList.add('active');level=Number(tab.dataset.level);index=0;score=0;render()});
render();
