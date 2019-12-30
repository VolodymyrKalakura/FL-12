let playCasino = confirm('Do you want to play a game?');

if (playCasino) {
    const startRange = 8,         
          firstTry = 3,
          secondTry = 2,
          firstTryPrize = 100,
          secondTryPrize = 50,
          thirdTryPrize = 25,
          rangeStep = 4;
    let attempts = 3;
    let loop = 0;    
    let totalPrize = 0;  
    let wantPlayRoulette = true;
    let win = false;
    while(wantPlayRoulette) {
        let randomRange = startRange + rangeStep*loop;
        let randomNumber = Math.floor(Math.random() * startRange);                
        while(attempts > 0) {
            let prizePull = 0;
            const prizePullStep = 2;
            if (attempts === firstTry) {
                prizePull = firstTryPrize * Math.pow(prizePullStep, loop);
            } else if (attempts === secondTry) {
                prizePull = secondTryPrize * Math.pow(prizePullStep, loop);
            } else {
                prizePull = thirdTryPrize * Math.pow(prizePullStep, loop);
            }
            let userNumber = parseFloat(prompt(`Choose a roulette pocket number from 0 to ${randomRange}
            Attempts left: ${attempts}
            Total prize: ${totalPrize}$
            Possible prize on current attempt: ${prizePull}$`,''));
            if (userNumber === randomNumber){
                totalPrize += prizePull;
                win = true;
                attempts = 0;
            }
            attempts -= 1;
        } 
        if (win) {
            if (confirm(`Congratulation, you won!\nYour prize is:  ${totalPrize} $\nDo you want to continue?`)) {
                loop += 1;
                win = false;
                attempts = firstTry;
            } else {
                alert(`Thank you for your participation.\nYour prize is: ${totalPrize}$`);
                if (confirm('Do you want to play again?')) {
                    loop = 0;
                    attempts = firstTry;
                } else {
                    wantPlayRoulette = false;
                }
            }
        } else {
            totalPrize = 0;
            alert(`Thank you for your participation.\nYour prize is: ${totalPrize}$`);
            if (confirm('Do you want to play again?')) {
                attempts = firstTry;
                loop = 0;
            } else {
                wantPlayRoulette = false;
            }
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}