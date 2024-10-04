function messageGenerator () {
    const subject = ['I will', 'you will', 'he will', 'she will', 'we will', 'they will'];
    const verb = ['want', 'take', 'see', 'have', 'bring', 'eat', 'drink', 'love', 'burn', 'kill'];
    const object = ['a horse', 'a new guitar', 'your partner', 'your job', 'a house', ' an ice-cream', 'a penguin'];

    let randomMessage = [];

    const randomSubject = Math.floor(Math.random()*subject.length);
    const randomSub = subject[randomSubject];
    let randomIndexSub = randomMessage.push(randomSub + ' ');

     const randomVrb = Math.floor(Math.random()*verb.length);
     const randomVerb = verb[randomVrb];
     let randomIndexVerb = randomMessage.push(randomVerb + ' ');

    const randomObject = Math.floor(Math.random()*object.length);
    const randomObj = object[randomObject];
    let randomIndexObj = randomMessage.push(randomObj);

    return randomMessage.join('');
   
}


console.log(messageGenerator());