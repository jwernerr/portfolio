window.addEventListener("load", handleLoad);

let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let game:Game;

function handleLoad(_event: Event) {
    canvas = <HTMLCanvasElement>document.getElementById("gameCanvas");
    canvas.height = window.innerHeight+2;
    ctx = canvas.getContext("2d")!;
    game=new Game(canvas);
    gameLoop();

    
    addContent(document.getElementById("Projects")!);
    setUpGallery();

    addEventListeners();
}
function addEventListeners():void{
    
    document.addEventListener("keydown", handleKeyInput);
    
}

function scrollToHome():void{
    let home:HTMLElement =<HTMLElement>document.getElementById("Home");
    window.scrollTo(0, home.offsetTop - (window.innerHeight * 0.25));
}

function setUpGallery():void{
    createGalleryItem();

    function createGalleryItem():void{
        console.log(document.querySelector("#Projects #Gallery"))
    }
}

function gameLoop() {

    game.update()
    requestAnimationFrame(gameLoop);
    
    

}

function draw(){
    ctx.fillStyle="red";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function addContent(_element:HTMLElement){
    for(let i:number=0;i<3;i++){
        _element.innerHTML = _element.innerHTML +"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
    }
}

function handleKeyInput(_event:KeyboardEvent):void{
    if (_event.key === "ArrowUp" || _event.key===" " ||_event.key==="a"){
        game.jump();
        
    }
}

function openModal(_event:MouseEvent){
    console.log("Open modal");
}
