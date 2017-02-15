function initMap(){
        var uluru = {lat: 47.518, lng: 19.068};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }


var introPage = document.getElementById('lower-section-intro');
var furnPage = document.getElementById('lower-section-furn');
var otherPage = document.getElementById('lower-section-other');
var servicesPage = document.getElementById('lower-section-services');
var contactPage = document.getElementById('lower-section-contact');

var imgSection = document.getElementById('img-section');

var furnImages = document.getElementsByClassName('img-furn');
var lowerSections = [introPage, furnPage, otherPage, servicesPage, contactPage];
var furnImgBtns = ['50s-furn', '60s-furn', '70s-furn', 'older-furn'];
var menuIds = ['introduction', 'furniture', 'other', 'services', 'contact'];





function lowerSectionListeners(x, array){

  if(x != array.length) {

  document.getElementById(array[x]).addEventListener('click', function(){
    
    for(var i = 0; i < lowerSections.length; i++){
      
    if(lowerSections[i].id == 'lower-section-intro' && array[x] == 'introduction' || lowerSections[i].id == 'lower-section-services' && array[x] == 'services')
       lowerSections[i].style.display = 'inherit';
      
    else if(lowerSections[i].id == 'lower-section-furn' && array[x] == 'furniture'){
       for(var k = 0; k < furnImages.length; k++){
           furnImages[k].style.display = 'none';
  }
       lowerSections[i].style.display = 'flex';
    }
    
    else if(lowerSections[i].className == 'lower-sections ' + array[x] && lowerSections[i] != introPage)
            lowerSections[i].style.display = 'flex';
    
    else lowerSections[i].style.display = 'none';
  }
})
  
  return lowerSectionListeners(x+1, array);
}
  
   else if(x == array.length) 
   return;
}


lowerSectionListeners(0, menuIds);




function imgBtnListeners(x, array){
  
  if(x != array.length) {

  document.getElementById(array[x]).addEventListener('click', function(){

  for(var j = 0; j < furnImages.length; j++){
    if(furnImages[j].className == 'img-furn ' + array[x]) furnImages[j].style.display = 'inherit';
    else furnImages[j].style.display = 'none';
  }
})
  return imgBtnListeners(x+1, array);
}
  
 else if(x == array.length) 
   return;
}

imgBtnListeners(0, furnImgBtns);
