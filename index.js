const button=document.querySelector("button");
button.addEventListener('click',(e)=>{
//    Notification.requestPermission()
//                .then(param=>{
//                     if(param==='granted'){
//                         new Notification("Example Notification");
//                     }

//                });
var notification=new Notification("Example Notification",{
                     body:'This is More Test',
                     data:{
                        hello:'world'
                     },
                     icon:'https://i.ibb.co/tDNdJYT/tmlogo.png'
                });

    // Please Check All Properties of the Notification Object of the Browser                
                
   // Handle notification events
   notification.addEventListener('click', (e) => {
    console.log('Notification clicked');
    console.log(e)
    // Add logic to handle notification click event
});

notification.addEventListener('close', () => {
    console.log('Notification closed');
    // Add logic to handle notification close event
});

notification.addEventListener('error', (err) => {
    console.error('Notification error:', err);
    // Add logic to handle notification error event
});            

});