let canvas = document.getElementById("snake"); 
let context = canvas.getContext("2d");
let box = 32;
let snake = []; 
snake[0] ={
    x: 8 * box,
    y: 8 * box
}
let direction = "right";
let food ={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 16*box, 16*box); 
   // context.clearRect(0, 0, 5, 5);
}

function criarCobrinha (){
    for(i = 0; i < snake.length; i++){
        context.fillStyle = "blue";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood (){
    context.fillStyle = "yellow";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != 'right') direction = 'left';
    if(event.keyCode == 38 && direction != 'down') direction = 'up';
    if(event.keyCode == 39 && direction != 'left') direction = 'right';
    if(event.keyCode == 40 && direction != 'up') direction = 'down';
}

/*function Update(event)
{        
    const keypressed = event.Keypressed//variavel recebe a tecla digitada          
    const Mover = MovimentoAccept(keypressed)//passa a tecla pressionada por parametro para mover a cobrinha          
    const MovesAccept =
    {    
         ArrowLeft()
            {
             console.log ('Movendo para esquerda')    
             if(event.keyCode == 37 && direction != 'right') {    
                 direction = 'left';       
                 ex: player.y = player.y - 1//deslocamento da cobrinha (uma casa para esquerda)    
                }    
            }    
        
         ,ArrowUp()
            {   
              console.log ('Movendo para cima')    
               if(event.keyCode == 38 && direction != 'down') {    
                 direction = 'up';     
                 ex: player.y = player.y +1//deslocamento da cobrinha (uma casa para cima)       
                }
            }
    
          ,ArrowRight()
            {    
              console.log ('Movendo para direita')    
               if(event.keyCode == 39 && direction != 'left') {    
                  direction = 'right';         
                  ex: player.x = player.x + 1//deslocamento da cobrinha (uma casa para direita)    
               }    
            }   
       
          ,ArrowDown()
            {    
               console.log ('Movendo para baixo')    
                if(event.keyCode == 40 && direction != 'up') {    
                    direction = 'down';            
                    ex: player.y = player.y - 1 //deslocamento da cobrinha (uma casa para baixo )    
               }    
            }
        
        }    
    }    */

function iniciarJogo(){    

    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;

    for(i = 1; i < snake.length; i++){
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(jogo);
            alert('Game Over :(');
        }
    }

    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
        snake.pop(); 
    }else{
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }

    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); 
}

let jogo = setInterval(iniciarJogo, 100);