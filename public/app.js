new fullpage("#fullpage",{
    autoScrolling:true,
    navigation:true,
    anchors:['0','1','2','3','4'],
    sectionsColor: ['#0e1821', '#ffffff', '#ffffff', '#ffffff', '#0e1821'],
    onLeave:(origin,destination,direction)=>{
        const section=destination.item;
        
        const title =section.querySelector('h1');
        const tl=new TimelineMax({delay:0.1});
        tl.fromTo(title,0.5,{y:'50',opacity:0},{y:0,opacity:1})
       
     if (destination.index===1){
         const photo=document.querySelector('#photo');
         const p=document.querySelector('p');
         const logo1=document.querySelector('#logo1');
         const logo2=document.querySelector('#logo2');
         const logo3=document.querySelector('#logo3');
         const logo4=document.querySelector('#logo4');
         const logo5=document.querySelector('#logo5');
         const logo6=document.querySelector('#logo6');
         const logo7=document.querySelector('#logo7');
         tl.fromTo(p,0.3,{opacity:0},{opacity:1})
         tl.fromTo(photo,0.4,{x:'100',opacity:0},{x:'0',opacity:1})
         tl.fromTo(logo1,0.4,{y:'50',opacity:0},{y:0,opacity:1})
         tl.fromTo(logo2,0.4,{y:'50',opacity:0},{y:0,opacity:1})
         tl.fromTo(logo3,0.4,{y:'50',opacity:0},{y:0,opacity:1})
         tl.fromTo(logo4,0.4,{y:'50',opacity:0},{y:0,opacity:1})
         tl.fromTo(logo5,0.4,{y:'50',opacity:0},{y:0,opacity:1})
         tl.fromTo(logo6,0.4,{y:'50',opacity:0},{y:0,opacity:1})
         tl.fromTo(logo7,0.4,{y:'50',opacity:0},{y:0,opacity:1})

        }
        if (destination.index===2){
           const projects=document.querySelectorAll('.pcontainer');
           let i=0;
           while(i<3) { tl.fromTo(projects[i],0.4,{x:'0',opacity:0},{x:'100',opacity:1})
           i=i+1;
        };
           
        }
        if (destination.index===3){
        const container1=document.querySelectorAll('.container1');
        tl.fromTo(container1[0],0.4,{x:'-100',opacity:0},{x:'0',opacity:1})
        tl.fromTo(container1[1],0.4,{x:'100',opacity:0},{x:'0',opacity:1})
        };
        if (destination.index===4){
            
            const form=document.querySelector('.container');
            const details=document.querySelector('.sec');
            

            tl.fromTo(form,0.4,{x:'-100',opacity:0},{x:'0',opacity:1})
            tl.fromTo(details,0.4,{x:'100',opacity:0},{x:'0',opacity:1})
            }
    }

    


});
