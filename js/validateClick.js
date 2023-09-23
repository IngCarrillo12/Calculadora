export const validateClick =(boton, pressed, operaciones, screen,result)=>{
    if(boton.id === "clean"){
        screen.textContent="0";
        screen.style.fontSize = "1.5rem"
        result.style.display = "none";
        result.textContent = "";
        return;
      }
      if(boton.id === "delete"){
          if(screen.textContent.length === 1){
            screen.textContent = "0"
          }else{
            screen.textContent = screen.textContent.slice(0,-1);
          }
          result.textContent= "";
          result.style.display= "none"
          screen.style.fontSize = "1.5rem"
          return;
        }
      if(boton.id === "equal"){
        try {
          result.style.display = "block";
          screen.style.fontSize = "1rem"
          result.textContent = eval(screen.textContent.replace("^","**"))
        } catch {
          screen.textContent  = "Error!"
        }
        return;
      }
      if((result.textContent!=="")&&(operaciones.includes(pressed))){
        screen.textContent = result.textContent + pressed;
        screen.style.fontSize = "1.5rem"
        result.style.display="none"
        result.textContent= ""
        return
      }
      if((operaciones.includes(pressed))&&(operaciones.includes(screen.textContent.charAt(screen.textContent.length-1)))){
        screen.textContent = screen.textContent.slice(0,-1) + pressed;
        return;
      }
      if(screen.textContent==="0"){
        screen.textContent = pressed;
      }else{
        screen.textContent += pressed;
        result.style.display = "none";
      }
}