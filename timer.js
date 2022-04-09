export default class Timer {
    constructor(root) {
     
    root.innerHTML = Timer.getHTML();


    this.el = {
        minutes: root.queryselector(".timer__part--minutes"),
        seconds: root.queryselector(".timer__part--seconds"),
        control: root.queryselector(".timer__btn--control"),
        reset: root.queryselector(".timer__btn--reset")
    }
    this.interval = null;
    this.remainingseconds = 90;
    this.updateInterfacetime();

    this.el.control.addEventListener("click", () => {
        //todoooo
    })
    this.el.reset.addEventListener("click", () => {
        //todoooo
    });
updateInterfacetime() 
{
    const minutes = Math.floor(this.remainingseconds / 60);
    const seconds = this.remainingseconds % 60;

}


console.log(minutes, seconds);

    }
    static getHTML() { 
return `
<span class="timer__part timer__part--minutes">00</span>
<span class="timer__part"></span>
<span class="timer__part timer__part--second">00</span>
<button type="button" class="timer__btn timer__btn--control timer__btn--start">
    <span class="material-icons">play_arrow</span>
</button>
<button type="button" class="timer__btn timer__btn--reset">
    <span class="material-icons">timer</span>
</button>

`;


    }

    }