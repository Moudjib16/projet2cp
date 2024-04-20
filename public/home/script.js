
let arrow = document.getElementById('arrow');
let menu = document.getElementById('menu');
let visible = false;



types=['guest','client','conducteur','admine'];

let user={

    nom:'kadache',
    prenom:'ahmed rami',
    age:20,    
    type:types[0], 

}


let admin_options=['vos trajet','Messages','Profile','Paiment','statistic','rapport','Deconxion'];
let driver_options=['vos trajet','Messages','Profile','Paiment','Deconxion'];
let client_options=['vos trajet','Messages','Profile','Deconxion'];
let guest_options=['log in','sign up'];


let admin_imglist=[
'/home/pics/menu-icons/trajet.png',
'/home/pics/menu-icons/message.png',
'/home/pics/menu-icons/profile.png',
'/home/pics/menu-icons/pay.svg',
'/home/pics/menu-icons/statistic.png',
'/home/pics/menu-icons/report.png',
'/home/pics/menu-icons/log-out.png'
];
let driver_imglist=[
'/home/pics/menu-icons/trajet.png',
'/home/pics/menu-icons/message.png',
'/home/pics/menu-icons/profile.png',
'/home/pics/menu-icons/pay.svg',
'/home/pics/menu-icons/log-out.png'
];
let client_imglist=[
'/home/pics/menu-icons/trajet.png',
'/home/pics/menu-icons/message.png',
'/home/pics/menu-icons/profile.png',
'/home/pics/menu-icons/log-out.png'
];
let guest_imglist=[
'/home/pics/menu-icons/log.png',
'/home/pics/menu-icons/sign.png',
];


let admin_pagelist=[
'notready.html',
'notready.html',
'../Profile/pass.html',
'notready.html',
'notready.html',
'notready.html',
'notready.html'
];
let driver_pagelist=[
'notready.html',
'notready.html',
'../Profile/pass.html',
'notready.html',
'notready.html'
]
client_pagelist=[

'notready.html',
'notready.html',
'../Profile/pass.html',
'notready.html'
]
guest_pagelist=[
'./login',
'./signup'
]
    



parameterValue="sign";

// fonction pour ajouter un option
function addoption(content , img_src ,page){
    let element = document.createElement('a');
    if(page === '../sign_login/auth.html' && img_src === 'pics/menu-icons/sign.png' && user.type=== types[0])
    {
        page= page+'?param=';
        page= page+parameterValue; 
     }
    element.href = page;
    let Im = document.createElement('img');
    Im.src=img_src; 
    Im.classList.add("icon");
    
    let text = document.createElement('p');
    text.innerText= content;
    text.classList.add("text");
    
    let cot = document.createElement('p');
    cot.innerText= ">"
    cot.classList.add("cotation")
    
    element.appendChild(Im);
    element.appendChild(text);
    element.appendChild(cot);
    
    
    element.classList.add("option");
    
    menu.appendChild(element);
}



function addline(){
    let line = document.createElement('div');
    line.classList.add('line');
    menu.appendChild(line);
}





function create(options,imglist,pagelist)
{   
    let name = document.getElementById('user-name');
    let i=0;
    while (i<options.length-1)
    {   
       
        addoption(options[i],imglist[i],pagelist[i]);
        i++;
        addline() 
    }
    addoption(options[i],imglist[i],pagelist[i]);
    name.innerText=user.nom+' '+user.prenom;
}



switch(user.type){

    case types[0]: create(guest_options,guest_imglist,guest_pagelist); break;
    case types[1]: create(client_options,client_imglist,client_pagelist);break;
    case types[2]: create(driver_options,driver_imglist,driver_pagelist);break;
    case types[3]: create(admin_options,admin_imglist,admin_pagelist);break;

}














arrow.addEventListener('click',function(){

    if( !visible ){
        visible= !visible;
        menu.style.display = 'flex';
        arrow.style.rotate ='180deg';
    }
    else
    {
        visible= !visible;
        menu.style.display = 'none';
        arrow.style.rotate ='0deg';
    }
    

})








document.getElementById('look').addEventListener('click', function() {
    var input1 = document.getElementById('input1').value.trim();
    var input2 = document.getElementById('input2').value.trim();
    var input3 = parseInt(document.getElementById('input3').value);

    if (input1 === '' || input2 === '' || isNaN(input3) || input3 < 1 || input3 > 5) {
        alert('Veuillez remplir tous les champs correctement.');
        return;
    }

    var parametre = [input1, input2, input3];
    console.log('Paramètres:', parametre);

    var queryString = '?input1=' + encodeURIComponent(parametre[0]) + '&input2=' + encodeURIComponent(parametre[1]) + '&input3=' + encodeURIComponent(parametre[2]);
    var nextPageURL = '../recherche/pass.html' + queryString;
    window.location.href = nextPageURL; // Redirect to pass.html with parameters
});