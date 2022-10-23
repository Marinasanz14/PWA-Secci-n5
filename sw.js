
// Ciclo de vida del SW

self.addEventListener('install', event =>{

    //descagar assets 
    // Creamos un cache

    console.log('SW: Instalando SW!!');

    const instalacion = new Promise((resolve, reject) => {
        setTimeout(() => {
           console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
    }, 1);

            

            
    })

    event.waitUntil( instalacion );
});

//Cuando el SW toma el control de la aplicacion 
self.addEventListener('activate', event => {

    //Borrar cache viejp 
    console.log('SW: activa y listo para controlar la app');

});

//FETCH: Manejo de peticiones HTTP
//self.addEventListener('fetch', event => {

    //Aplicar estrategias del cache
    //console.log( ' SW:', event.request.url ); 

    //if ( event.request.url.includes('https://reqres.in/') ){
        //const resp = new Response(`{ok: false, mensaje: 'jajaja'}`);

        //event.responswith( resp ); 
    //}
    
// SYNC: Recuperamos la conexion al internet
self.addEventListener('sync', event => {
    console.log('Tenemos conexion');
    console.log(event);
    console.log(event.tag);
})

