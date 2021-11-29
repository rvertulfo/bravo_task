const btnHamburger = document.querySelector('#btn-menu-toggle');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function(){


    if (header.classList.contains('open')){
        header.classList.remove('open');
    } else {
        header.classList.add('open');

    }
});


var screen_width = screen.width;
window.addEventListener('resize', function(event){
    screen_width = screen.width;
    console.log(screen_width)
});

let url = 'https://87197325.blob.core.windows.net/fed-technical-test/events.json';
const eventList = document.querySelector('.event-list');
fetch(url)
    .then(res => res.json())
.then((events) => {

    for (var event in events) {
    var eventImage =  (screen_width > 425) ? events[event].imgUrlDesktop : events[event].imgUrlMobile;
    var eventImage2x =  (screen_width > 425) ? events[event].imgUrlDesktop2x : events[event].imgUrlMobile2x;
    eventList.innerHTML += '<div class="event-item"><div class="event-item-content"><div class="event-item-image"><img src="' + eventImage + '"  srcset="' + eventImage + ' 1x, ' + eventImage2x + ' 2x"  /></div><div class="event-item-text"><h3>' + events[event].title + '</h3><p>' + events[event].description + '</p></div></div></div>';
}

})
.catch(err => { throw err });