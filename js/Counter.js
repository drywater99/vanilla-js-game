export default class Counter {

    constructor() {

        this.playerPoints = 0
        this.birdsPoints = 0
        this.el = this.render()
        this.update()
    }


    addPlayerPoint() {
        this.playerPoints = this.playerPoints + 1 // addiert den Wert um 1
        this.update()
    }


    addBirdsPoint() {
        this.birdsPoints = this.birdsPoints + 1 // addiert den Wert um 1
        this.update()
    }

    render() {
        const el = document.createElement('div');
        el.className = 'counter';
        document.body.insertAdjacentElement('beforeend', el);
        return el;
    }

    update() { // Aktualisiert im innerHTML den Text (unsere Punkte)
        this.el.innerHTML = `${this.playerPoints}` + ' : ' + `${this.birdsPoints}`
    }

}