export default class Bird {
    //wir schreiben export default, damit andere Klassen auf "Bird" zugreifen können
    defaultConfig = {
        // legt die Grund-Konfiguration der Birds fest
        color: 'black',
        speed: 1 + Math.random() * 2,
        position: {
            x: 0,
            y: 200 + Math.random() * 200,
        },
    };

    constructor(config) {
        config = {
            ...this.defaultConfig,
            ...config,
        }; //Konfigurations-Objekt,
        //this = config // definiert config, erlaubt uns die Default-Konfiguration zu überschreiben und verbessert die Lesbarkeit
        const {
            color,
            speed,
            position,
            onRemove,
            onClick, //fügt einen Punkt in den Countzer bei Klick
            onEscape,
        } = config;

        this.onClick = onClick
        this.color = color;
        this.position = position;
        this.speed = speed;
        this.onRemove = onRemove; // wir reichen die Eltern-Funktion in die Kind-Klasse
        this.onEscape = onEscape;
        this.el = this.render();
        this.addClickHandler()
    }

    addClickHandler() {
        this.el.addEventListener('click', () => {
            this.onClick() //fügt einen Punkt in den Countzer bei Klick
            this.remove() //entfernt aus HTML beim Click
        }) //Funktion löst aus, dass der Bird abgeschossen wird
    }

    remove() {
        this.onRemove(this)
        this.el.remove()
    }

    update() {
        this.position.x += this.speed;
        if (this.position.x > window.innerWidth) {
            //wir zerstören den Vogel am rechten Bildschirmrand mithilfe der Funktion "onRemove()"
            //da in der KLasse Bird festgelegt ist, wo sich der Bird befindet wenden wir hier die Funktion onRemove aus der Klasse Game an.
            //Wir müssen die Funktion onRemove() aber in der Klasse-Game positionieren, da mit die Funktion den Array verkleinert, der sich in Ihr befindet
            this.remove() //entfernt aus HTML
            this.onEscape()
        } else {
            this.el.style.left = this.position.x + 'px';
            this.el.style.top = this.position.y + Math.sin(this.position.x / 100) * 100 + 'px';
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