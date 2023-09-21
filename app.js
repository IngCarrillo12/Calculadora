const botones = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen__operacion");
const result = document.querySelector(".screen__resultado")
const operaciones = ["+","-","/","*","^","%"]
botones.forEach(boton =>{
  boton.addEventListener("click", ()=>{
    const btnApretado = boton.textContent;
    
    if(boton.id === "clean"){
      screen.textContent="0";
      return;
    }
    if(boton.id === "delete"){
      if(screen.textContent.length === 1){
        screen.textContent = "0"
      }else{
        screen.textContent = screen.textContent.slice(0,-1);
      }
      return;
    }
    if(boton.id === "equal"){
      try {
        result.style.display = "block";
        result.textContent = eval(screen.textContent)
      } catch {
        screen.textContent  = "Error!"
      }
      return;
    }
    if((result.textContent!=="")&&(operaciones.includes(btnApretado))){
      screen.textContent = result.textContent + btnApretado;
      result.textContent= ""
      return
    }
    if((operaciones.includes(btnApretado))&&(operaciones.includes(screen.textContent.charAt(screen.textContent.length-1)))){
      screen.textContent = screen.textContent.slice(0,-1) + btnApretado;
      return;
    }
    if(screen.textContent==="0"){
      screen.textContent = btnApretado;
    }else{
      screen.textContent += btnApretado;
    }
  })
})