const event_key = document.querySelector("#event-key .event-value");
const event_keyCode = document.querySelector("#event-keyCode .event-value");
const event_code = document.querySelector("#event-code .event-value");


document.addEventListener("keydown",function(e){
     e.preventDefault();
     if(e.key === " ")
     {
          event_key.innerHTML = "(space)";
          event_key.style.fontStyle = "italic";
     }
     else{
          event_key.innerHTML = e.key;
          event_key.style.fontStyle = "normal";
     }
     
     event_keyCode.innerHTML = e.keyCode;
     event_code.innerHTML = e.code;
})