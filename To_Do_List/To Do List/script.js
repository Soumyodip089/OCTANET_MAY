const inputBox = document.getElementById("input-box");

const listcon = document.getElementById("list");

const eventDateInput = document.getElementById("eventDate");

const eventTimeInput = document.getElementById("eventTime");

function displayDate(){
    let date = new Date()
    date = date.toString().split(" ")
    document.querySelector("#date").innerHTML = data[1] + " " + date[2]+ " " + date[3]
}

window.onload= function data(){
    displayDate()
}

function prior(){
    if(inputBox.value == ''){
        alert("Please Enter Your Task");
    }
    else if (eventDateInput.value == ''){
        alert("Please Enter The Date");
    }
    else if(eventTimeInput.value == ''){
        alert("Please Enter The Time");
    }
    else{
        
        let li = document.createElement("li");
        li.style.color = "#ff0000"
        li.innerHTML = inputBox.value  + "&nbsp" + "&nbsp" + "&nbsp"+"&nbsp"+"&nbsp" +"Date & Time:" + "&nbsp" +  eventDateInput.value + "&nbsp" + "&nbsp" + eventTimeInput.value;
        listcon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = '';
    eventDateInput.value = '';
    eventTimeInput.value = '';
  
  }
  function add(){
    if(inputBox.value == ''){
        alert("Please Enter Your Task");
    }
    else if (eventDateInput.value == ''){
        alert("Please Enter The Date");
    }
    else if(eventTimeInput.value == ''){
        alert("Please Enter The Time");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value  + "&nbsp" + "&nbsp" + "&nbsp"+"&nbsp"+"&nbsp" +"Date & Time:" + "&nbsp" +  eventDateInput.value + "&nbsp" + "&nbsp" + eventTimeInput.value;
        listcon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = '';
    eventDateInput.value = '';
    eventTimeInput.value = '';

}

listcon.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcon.innerHTML);
}

function showTask(){
    listcon.innerHTML= localStorage.getItem("data");
}

showTask();



