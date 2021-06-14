const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startButton: document.querySelector('[data-action="start"]'),
    stopButton: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
}

const changeApp = {
    intervalID: null,
    isActive: false,

    start() {
        if (this.isActive) { return }
        this.isActive=true
        this.intervalID = setInterval(() => {
             refs.body.style.background=colors[randomIntegerFromInterval(0, (colors.length-1))]
        }, 1000);
    
    },

    stop() {
        clearInterval(this.intervalID)
        this.isActive=false
    }
}

refs.startButton.addEventListener('click', ()=>{changeApp.start()})
refs.stopButton.addEventListener('click', ()=>{changeApp.stop()})


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};