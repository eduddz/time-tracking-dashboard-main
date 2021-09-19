async function extrairDados() {
    const daily = document.querySelector('#daily');
    const weekly = document.querySelector('#weekly');
    const monthly = document.querySelector('#monthly');
    const card = document.querySelectorAll('.card');


    const response = await fetch('data.json')
    const data = await response.json()

    const image = ['work', 'play', 'study', 'exercise', 'social', 'self-care'];

    const background = ['hsl(15, 100%, 70%)', 'hsl(195, 74%, 62%)', 'hsl(348, 100%, 68%)', 'hsl(145, 58%, 55%)', 'hsl(264, 64%, 52%)', 'hsl(43, 84%, 65%)'];

    const url = './images/icon-ellipsis.svg'

    

    function imprimir() {
        for (i in data) {
            card[i].style.backgroundImage = `url('./images/icon-${image[i]}.svg')`;
            card[i].style.backgroundColor = `${background[i]}`;
            
            card[i].innerHTML = 
            `
                <div class="subcard">
                    <div class="title">
                        <h2>${data[i].title}</h2>
                        <img src="${url}"/>
                    </div>
                    <div class="description">
                        <p class="hrs">
                            ${data[i].timeframes.daily.current}hrs
                        </p>
                        <span class="last">
                            Last Daily - ${data[i].timeframes.daily.previous}hrs
                        </span>
                    </div>
                </div>
            `
        }
    }


    imprimir()

    daily.addEventListener('click', () => {
        imprimir();
        clicado(daily)
    })

    weekly.addEventListener('click', () => {

        for (i in data) {
            card[i].style.backgroundImage = `url('./images/icon-${image[i]}.svg')`;
            card[i].style.backgroundColor = `${background[i]}`;
            card[i].innerHTML = 
            `
                <div class="subcard">
                    <div class="title">
                        <h2>${data[i].title}</h2>
                        <img src="${url}"/>
                    </div>
                    <div class="description">
                        <p class="hrs">
                            ${data[i].timeframes.weekly.current}hrs
                        </p>
                        <span class="last">
                            Last Weekly - ${data[i].timeframes.weekly.previous}hrs
                        </span>
                    </div>
                </div>
            `
        }
    })

    monthly.addEventListener('click', () => {
        for (i in data) {
            card[i].style.backgroundImage = `url('./images/icon-${image[i]}.svg')`;
            card[i].style.backgroundColor = `${background[i]}`;
            card[i].innerHTML = 
            `
                <div class="subcard">
                    <div class="title">
                        <h2>${data[i].title}</h2>
                        <img src="${url}"/>
                    </div>
                    <div class="description">
                        <p class="hrs">
                            ${data[i].timeframes.monthly.current}hrs
                        </p>
                        <span class="last">
                            Last Monthly - ${data[i].timeframes.monthly.previous}hrs
                        </span>
                    </div>
                </div>
            `
        }
    })
}

extrairDados()

