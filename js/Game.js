import Bird from './Bird'; // Import verknüpft die Bird.js mit unsserer Main.js
import Counter from './Counter';


// Für erstellen eine neue KLasse "Game" mit einem optionalen Constructor um darin definierte Funktionen sofort auszuführen.
export default class Game {
    birds = [];

    constructor() {
        this.createBirds();
        this.createCounter()
        this.loop();
    }

    createCounter() {
        this.counter = new Counter()
        this.counter.addPlayerPoint()
        this.counter.addPlayerPoint()
        this.counter.addBirdsPoint()
        this.counter.addBirdsPoint()
        this.counter.addBirdsPoint()
    }

    addCounter() {
        this.counter = [...this.counter, new Counter()];
    }

    //createBirds() {
    //this.birds = [ // durch "this." greifen wir auf die Klasse Birds zu
    //new Bird({
    // ...config,
    //color: 'hotpink',
    //speed: 30}), // bei mehreren Konfigurationen schreibt man Objekte{}, das verbessert Lesbarkeit und macht es möglich einzelne Konfigurationen optinal zu machen oder zu überschreiben( config überschreibt default config, color/speed überschreibt config )
    //new Bird(config),

    createBirds() {
        this.addBird;
        this.addBird;
        this.addBird;
        this.addBird;
        this.addBird;
    }

    addBird() {
        //prodziert neue Birds und fügt sie dem Array Birds hinzu.
        const config = {
            // config legt Konfigurationen fest die von den Standardkonfigurationen aus "Bird" abweichen sollen
            removeBird: this.removeBird,
        };
        this.birds = [...this.birds, new Bird(config)];
    }

    removeBird = bird => {
        const index = this.birds.indexOf(bird);
        this.birds = [
            ...this.birds.slice(0, index),
            ...this.birds.slice(index + 1), // entfernt alle Birds vor und hinter dem Element
        ];
        console.log(this.birds.length);
    }; // indem wir eine Pfeilfunktion bird => anwenden gehen wir sicher, dass sich this.removeBird auf die Klasse Game bezieht
    // entfernt aus dem loop..
    //um Bird aus dem Array zu entfernen, sobald er über den Bildschirmrand geht, erstellen wir eine Eltern-Funktion  die wir in das Kind(Bird) hineinreichen. Das machen wir weil die Positionierung in der Bird-Klasse definiert ist)

    loop() {
        Math.random() < 1 / 60 && this.addBird() //fügen die addBird-Funktion als Random dem Loop hinzu um immer wieder neue Birds automatisch zu produzieren
        this.birds.forEach(bird => bird.update());
        requestAnimationFrame(() => this.loop()); // durch "this." holen wir uns die Funktion "update aus der Klasse Birds in unsere KLasse Game"
    }
}