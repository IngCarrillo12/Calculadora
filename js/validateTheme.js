const validateTheme = ()=>{
    const calculator = document.querySelector(".calculator")
    const btnOperations = document.querySelectorAll(".operation")
    const btn = document.querySelectorAll(".btn_number")
    const screen = document.querySelector(".calculator__screen")
    const body = document.querySelector(".body")
        body.classList.toggle("body-dark")
        calculator.classList.toggle("calculator-dark")
        screen.classList.toggle("screen-dark")
        btn.forEach(b=>{
            b.classList.toggle("btn-dark")
        })
        btnOperations.forEach(b =>{
            b.classList.toggle("btn-operation-dark")
        })
        
}
