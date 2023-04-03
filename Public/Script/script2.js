//! Injections d'évènements via JS en attendant PHP/AJAX 
let evenements = [{
    "title": "Oral Blanc - DevWeb", 
    "start": "2023-03-09 09:00:00",
    "end": "2023-03-09 12:00:00",
    "backgroundColor": "red",
},{   
    "title": "PHP", 
    "start": "2023-03-09 13:30:00",
    "end": "2023-03-09 17:00:00",
}]

//! FULL CALENDAR 
document.addEventListener("DOMContentLoaded", function() {
    const calendarEl = document.getElementById("calendar");
    const calendar = new FullCalendar.Calendar(calendarEl, {
        height: "100%",
        initialView: "dayGridMonth", 
        locale : "fr",
        headerToolbar : {
            left:"prev next today", 
            center:"title",
            right:"dayGridMonth timeGridWeek",
        },
        buttonText:{
            today: `Aujourd'hui`, 
            month: `Mois`, 
            week: `Semaine`, 
            list: `Liste`, 
        },
        events: evenements,
        nowIndicator: true,
        editable: true,
        selectable: true,
        selectHelper: true,
        eventDrop: (infos)=> {
            if(!confirm("Êtes-vous sûr de vouloir déplacer l'évènement?")){
                infos.revert();
            }
        },
        eventResize: (infos)=> {
            console.log(infos.event.end);
        }
    });
    calendar.render();
});

//! Manipuler le menu burger

//* On récupère l'élément du menu burger et de la barre de navigtion
const burger = document.querySelector('.burger');
const sidebarNav = document.querySelector('.sidebarnav');

//* On ajote un événement de clic au menu burger pour on/off
//* la classe "show" sur la barre de navigation latérale
burger.addEventListener('click', function() {
    sidebarNav.classList.toggle('show');
});