function messageGenerator (first, second, third) {
    const subject = ['I will', 'you will', 'he will', 'she will', 'we will', 'they will'];
    const verb = ['want', 'take', 'see', 'have', 'bring', 'eat', 'drink', 'love', 'burn', 'kill'];
    const object = ['a horse', 'a new guitar', 'your partner', 'your job', 'a house', ' an ice-cream', 'sex', 'boobs', 'a penguin'];

    let randomMessage = [];

    randomIndex = Math.floor(Math.random()*Array.lenght);
    randomSub = () => {
        first = subject;
        subject(randomIndex);
        randomSub.push(randomMessage)
    }; 
    randomVerb = () =>{
        second = verb;
        verb(randomIndex);
        randomVerb.push(randomMessage)
    };
    randomObj = () => {
        third = object;
        randomObj = object(randomIndex);
        randomObj.push(randomMessage);
    }

    return randomMessage.join('');
   
}


console.log(messageGenerator());