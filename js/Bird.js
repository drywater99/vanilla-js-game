export default class Bird {
    //wir schreiben export default, damit andere Klassen auf "Bird" zugreifen können
    defaultConfig = {
        // legt die Grund-Konfiguration der Birds fest
        color: 'black',
        speed: 2 + Math.random() * 8,
        position: 0,
    };

    constructor(config) {
        config = {
            ...this.defaultConfig,
            ...config,
        }; //Konfigurations-Objekt,
        //this = config // definiert config, erlaubt uns die Default-Konfiguration zu überschreiben
        const {
            color,
            speed,
            position,
            removeBird
        } = config;

        this.color = color;
        this.position = position;
        this.speed = speed;
        this.removeBird = removeBird; // wir reichen die Eltern-Funktion in die Kind-Klasse
        this.el = this.render();
        this.addClickHandler()
    }

    addClickHandler() {
        this.el.addEventListener('click', () => {
            this.el.classList.add('hit')
        }) //Funktion löst aus, dass der Bird abgeschossen wird
    }


    update() {
        this.position = this.position + this.speed;
        if (this.position > window.innerwidth) {
            //wir zerstören den Vogel am rechten Bildschirmrand mithilfe der Funktion "removeBird()"
            //da in der KLasse Bird festgelegt ist, wo sich der Bird befindet wenden wir hier die Funktion removeBird aus der Klasse Game an.
            //Wir müssen die Funktion removeBird() aber in der Klasse-Game positionieren, da mit die Funktion den Array verkleinert, der sich in Ihr befindet
            this.removeBird(this);
            this.el.remove(); //entfernt aus HTML
        } else {
            this.el.style.left = this.position + 'px';
        }
    }

    render() {
        const el = document.createElement('div');
        el.className = 'bird';
        el.style.background = this.color;
        document.body.insertAdjacentElement('beforeend', el);
        return el;
    }
}