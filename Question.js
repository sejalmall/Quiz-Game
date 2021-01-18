class Form {

    constructor() {
      this.input = createInput("Name");
     // this.input1 = createInput("Enter your option");
      this.button = createButton('Play');
      this.title = createElement('h2');
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
   //   this.input1.hide();
    }
  
    display(){
      this.title.html("Quiz Game");
      this.title.position(displayWidth/2 - 50, 0);
    //  this.input1.position(displayWidth/2 -80,displayHeight/2 - 80 )
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.button.position(displayWidth/2 + 30, displayHeight/2);

      this.button.mousePressed(()=>{
        this.input.hide();
    //    this.input1.hide();
        this.button.hide();
        contestant.name = this.input.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
        this.greeting.html("Hello " + contestant.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
  
    }
  }
  
  