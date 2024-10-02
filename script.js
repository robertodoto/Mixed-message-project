function messageGenerator (first, second, third) {
    const subject = ['I will', 'you will', 'he will', 'she will', 'we will', 'they will'];
    const verb = ['want', 'take', 'see', 'have', 'bring', 'eat', 'drink', 'love', 'burn', 'kill'];
    const object = ['a horse', 'a new guitar', 'your partner', 'your job', 'a house', ' an ice-cream', 'sex', 'boobs', 'a penguin'];

    let randomMessage = [];

    randomSubject = Math.floor(Math.random()*subject.length);
    randomSub = () => {
        subject[randomSubject];
        randomSub.push[randomMessage]
    }; 

    randomVerb = Math.floor(Math.random()*verb.length);
    randomVerb = () =>{
        verb[randomVerb];
        randomVerb.push[randomMessage]
    };

    randomObject = Math.floor(Math.random()*object.length);
    randomObj = () => {
        randomObj = object[randomObject];
        randomObj.push[randomMessage];
    }

    return randomMessage.join('');
   
}


console.log(messageGenerator());