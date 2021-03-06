import Bird from './Bird'; // Import verknüpft die Bird.js mit unsserer Main.js
import Counter from './Counter';
import Hunter from './Hunter';


// Für erstellen eine neue KLasse "Game" mit einem optionalen Constructor um darin definierte Funktionen sofort auszuführen.
export default class Game {
    entities = [];

    constructor() {
        this.createBirds();
        this.createCounter()
        this.loop();
        this.createHunter();
    }

    createHunter() {
        this.hunter = new Hunter()
        this.entities = [...this.entities, this.hunter]
    }

    createCounter() {
        this.counter = new Counter()
    }

    //createBirds() {
    //this.entities = [ // durch "this." greifen wir auf die Klasse Birds zu
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
            onRemove: this.removeBird,
            onClick: this.updatePlayerPoints,
            onEscape: this.updateBirdsPoints
        };
        this.entities = [...this.entities, new Bird(config)];
    }

    removeBird = bird => {
        const index = this.entities.indexOf(bird);
        this.entities = [
            ...this.entities.slice(0, index),
            ...this.entities.slice(index + 1), // entfernt alle Birds vor und hinter dem Element
        ];
    }; // indem wir eine Pfeilfunktion bird => anwenden gehen wir sicher, dass sich this.removeBird auf die Klasse Game bezieht
    // entfernt aus dem loop..
    //um Bird aus dem Array zu entfernen, sobald er über den Bildschirmrand geht, erstellen wir eine Eltern-Funktion  die wir in das Kind(Bird) hineinreichen. Das machen wir weil die Positionierung in der Bird-Klasse definiert ist)

    updateBirdsPoints = () => { // fügt die Funktion hinzu; jetzt erscheint ein Punkt für jeden Vogel der aus dem Bildschirm fliegt
        this.counter.addBirdsPoint()
    }

    updatePlayerPoints = () => { //Funktion ein Punkt für jeden getroffenen Vogel
        this.counter.addPlayerPoint()
    }

    loop() {
        Math.random() < 1 / 60 && this.addBird() //fügen die addBird-Funktion als Random dem Loop hinzu um immer wieder neue Birds automatisch zu produzieren
        this.entities.forEach(entity => entity.update());
        requestAnimationFrame(() => this.loop()); // durch "this." holen wir uns die Funktion "update aus der Klasse Birds in unsere KLasse Game"
    }
}