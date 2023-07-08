
const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger)=>{
  trigger.addEventListener('click',(element)=>{
    trigger.parentElement.classList.toggle('open');
 
    var panel = trigger.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
})