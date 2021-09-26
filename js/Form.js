class Form {
    constructor() {
        this.heading = createElement("h1");
        this.heading.setAttribute("id", "heading")

        this.nameInput = createInput();
        this.nameInput.setAttribute("placeholder", "Enter Your Name");
        this.nameInput.setAttribute("id", "NameInput");

        this.button = createButton("Play");
        this.button.setAttribute("id", "Submitbtn");
    }

    display() {
        this.heading.html("Welcome to BasketBall Game");
        this.heading.position((displayWidth / 2)  - 100, 0);
        this.nameInput.position((displayWidth / 2)  - 100, this.heading.position.y + 150);
        this.button.position((displayWidth / 2)  - 100, this.nameInput.position.y + 150);
        this.button.mousePressed(() => {
            if (this.nameInput.value() == null) {
                alert("Name Feild Cannot be Empty");
            } else {
                database.ref("/").update({
                    PlayersCount: PlayersCount + 1,
                    
                })
            }
            gameState = "init";
        })
    }
};