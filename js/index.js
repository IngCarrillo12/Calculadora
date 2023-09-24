import { validateClick } from "./validateClick.js";
import { validateKeys } from "./validateKeys.js";
const botones = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen__operacion");
const result = document.querySelector(".screen__resultado")
const operaciones = ["+","-","/","*","^","%"]
document.addEventListener("keydown",(event)=>{
    const expReg = new RegExp("^[0-9+\\-*/^%.]+$|Backspace|Enter|Delete");
    let pressed = event.key;
    if(expReg.test(pressed)){
      validateKeys(pressed, operaciones, screen, result)
    }
  })
  
botones.forEach(boton =>{
    boton.addEventListener("click", ()=>{
      let pressed = boton.textContent;
      validateClick(boton,pressed, operaciones, screen,result);
      })
    })
    