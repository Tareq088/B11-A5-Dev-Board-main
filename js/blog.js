
document.getElementById('back-to-desk-btn')
    .addEventListener('click',function(){
        window.location.href = "index.html";
})


for(let i =0; i<completedBtnlength; i++){
    // console.log("array")
    completedBtn[i].addEventListener('click',function(event){
        my_modal_1.showModal();
        document.getElementById('ok-btn')
            .addEventListener('click',function(){
                console.log(completedBtn[i]);
                const checkBoxButton2Value = parseInt(checkboxButon2.innerText) - 1;
                checkboxButon2.innerText = checkBoxButton2Value;
                const checkBoxButton1Value = parseInt(checkboxButon1.innerText) + 1;
                checkboxButon1.innerText = checkBoxButton1Value;
                completedBtn[i].setAttribute("disabled","true")
                // completedBtn[i].classList.remove("bg-btn-primary")
                completedBtn[i].classList.add("disabled:opacity-20");
                // completedBtn[i].classList.add
    })

    for(let i =0; i<completedBtnlength; i++){
        // console.log("array")
        completedBtn[i].addEventListener('click',function(event){
        console.log(completedBtn[i]);
        const checkBoxButton2Value = parseInt(checkboxButon2.innerText) - 1;
        checkboxButon2.innerText = checkBoxButton2Value;
        const checkBoxButton1Value = parseInt(checkboxButon1.innerText) + 1;
        checkboxButon1.innerText = checkBoxButton1Value;
        completedBtn[i].setAttribute("disabled","true")
        // completedBtn[i].classList.remove("bg-btn-primary")
        completedBtn[i].classList.add("disabled:opacity-20");
        // completedBtn[i].classList.add
    
        })
    
    }


    for(let completedBtn of completedBtns){
        // console.log("array")
        completedBtn.addEventListener('click',function(event){
             console.log(completedBtn);
            const checkBoxButton2Value = parseInt(checkboxButon2.innerText) - 1;
            checkboxButon2.innerText = checkBoxButton2Value;
            const checkBoxButton1Value = parseInt(checkboxButon1.innerText) + 1;
            checkboxButon1.innerText = checkBoxButton1Value;
            completedBtn.setAttribute("disabled","true")
            // completedBtn[i].classList.remove("bg-btn-primary")
            completedBtn.classList.add("disabled:opacity-50");
            // completedBtn[i].classList.add
        
        })
    
    }

    for(let completedBtn of completedBtns){
        // console.log("array")
        completedBtn.addEventListener('click',function(event){
            my_modal_1.showModal();
            document.getElementById('ok-btn')
                .addEventListener('click',function(){
                    console.log(completedBtn);
                    const checkBoxButton2Value = parseInt(checkboxButon2.innerText) - 1;
                    checkboxButon2.innerText = checkBoxButton2Value;
                    const checkBoxButton1Value = parseInt(checkboxButon1.innerText) + 1;
                    checkboxButon1.innerText = checkBoxButton1Value;
                    completedBtn.setAttribute("disabled","true")
                    // completedBtn[i].classList.remove("bg-btn-primary")
                    completedBtn.classList.add("disabled:opacity-50");
                    // completedBtn[i].classList.add
                })   
    
    
        })
    
    }


    let array = [];
for(let i=1; i<=completedBtnlength; i++){
    array.push(i)
}
console.log(array)
for(let i=0; i<array.length; i++){
    let element = array[i];
    const buttonIdNumber = document.getElementById(element);
    if(element === )
}
for(let completedBtn of completedBtns){
    // console.log("array")
    completedBtn.addEventListener('click',function(event){
        my_modal_1.showModal();
        document.getElementById('ok-btn')
            .addEventListener('click',function(){
                console.log(completedBtn);
                const checkBoxButton2Value = parseInt(checkboxButon2.innerText) - 1;
                checkboxButon2.innerText = checkBoxButton2Value;
                const checkBoxButton1Value = parseInt(checkboxButon1.innerText) + 1;
                checkboxButon1.innerText = checkBoxButton1Value;
                completedBtn.setAttribute("disabled","true")
                // completedBtn[i].classList.remove("bg-btn-primary")
                completedBtn.classList.add("disabled:opacity-50");
                // completedBtn[i].classList.add
            })   


    })

}
