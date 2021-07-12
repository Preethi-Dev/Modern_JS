const correctAnswer = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
    //prevent default behaviour
    e.preventDefault();
    const userAnswer = [form.q1, form.q2, form.q3, form.q4];
    let score = 0;
    userAnswer.forEach((ans, index) => {
        if(ans.value === correctAnswer[index]){
            score += 25;
            ans.forEach(correct => {
                if(correct.value == 'B'){
                    correct.parentElement.classList.remove('text-secondary');
                    correct.parentElement.classList.add('text-success');
                    correct.parentElement.classList.add('fw-bold');
                }
            });
        } else {

            ans.forEach(correct => {
                if(correct.value != 'B'){
                    correct.parentElement.classList.remove('text-secondary');
                    correct.parentElement.classList.add('text-danger');
                    correct.parentElement.classList.add('fw-bold');
                }
            });
                
        }
    });

    form.addEventListener('reset', () => {
        location.reload();
    })
    // document.querySelector('#score').textContent = `you are ${score}% ninja level`;
    scrollTo(0, 0);
    document.querySelector('.result').classList.remove('d-none');
    let output = 0;
    const timer = setInterval(() =>{
        document.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});