

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
    .then( reg => {
    Notification.requestPermission().then ( result => {
        console.log(result);
        reg.showNotification('Hola Mundo!');   

        
            //setTimeout(() => {
                //reg.sync.register('posteo-gatitos');
                //console.log('Se enviaron fotos de gatitos al server');
        //})
        //})
    });

    
});


if ( window.SyncManager) {

}


//fetch('https://reqres.in/api/users')
    //.then( resp => resp.text())
    //.then( console.log );


}
