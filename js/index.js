  // discover button e click korle blog page e jabe
document.getElementById('discover-btn')
    .addEventListener('click',function(){
        window.location.href = "blog.html";
})

//
let one = 1;
const completedBtns = document.getElementsByClassName('completed-btn');
const completedBtnlength = completedBtns.length;
const checkboxButon1 = document.getElementById('checkbox-button-1');
const checkboxButon2 = document.getElementById('checkbox-button-2');
checkboxButon2.innerText = completedBtnlength;

for(let completedBtn of completedBtns){
    // console.log("array")
    completedBtn.addEventListener('click',function(event){
        const checkboxButon2Man = parseInt(checkboxButon2.innerText);
        console.log(checkboxButon2Man)
        if(checkboxButon2Man ===1){
            alert("Board Updated Successfully");
            alert("Congratulatiions!!! You have completed all the task");
        }
        else{
            alert("Board Updated Successfully");
        }
        const checkBoxButton2Value = parseInt(checkboxButon2.innerText) - 1;
        checkboxButon2.innerText = checkBoxButton2Value;
        const checkBoxButton1Value = parseInt(checkboxButon1.innerText) + 1;
        checkboxButon1.innerText = checkBoxButton1Value;
        completedBtn.setAttribute("disabled","true")
        completedBtn.classList.add("disabled:opacity-50");
        const addListItems = document.getElementById('add-list')
        const div = document.createElement('div')
        div.setAttribute("class","new-add-list")
        const pTag = completedBtn.parentNode.parentNode.parentNode.getElementsByTagName('p')[0].innerText;
        let myDate = new Date();
        const myTime = myDate.toLocaleTimeString();
        div.innerHTML =`
            <p class="added p-2 bg-slate-100 rounded-lg m-1"> You have completed the task ${pTag} at ${myTime} </p>
        `
        addListItems.appendChild(div);
    })
}
                        // clear history button er kaj
document.getElementById("clear-btn").addEventListener('click', function(){
    const newAddListArray = document.getElementsByClassName('new-add-list');
    const addList = document.getElementById('add-list');
    addList.innerHTML = ``;
})
        // challenge part 2 today date
const myDate = new Date().toDateString();
document.getElementById('chekbox-date').innerText = myDate

            // challenge part 1 bg color change
document.getElementById('theme-btn')
    .addEventListener('click',function(){
        const body = document.getElementById('body-tag');
        console.log(body.className)
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        function rgbToHex(r, g, b) {
            function componentToHex(c) {
                const hex = c.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            }
            return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
        }
        const colorHexValue = rgbToHex(r, g, b);
        console.log(colorHexValue)
        let color=colorHexValue;
        let bgcolorarray = body.className.split("-");
        console.log(bgcolorarray)
        let bgcolor = body.className.split("-")[1];
        console.log(bgcolor)
        bgcolor=[colorHexValue];
        console.log(bgcolor)
        body.classList.add("bg-",bgcolor)
        console.log(body)
        // body.classList.add("bg-[",colorHexValue,"]");
        // console.log(body.classList.add("bg-[",colorHexValue,"]"))
        
})



