var pictures_and_descriptions, picture_var, description_var, button_var;

// Describe this function...
function move_forwards() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  picture_var = pictures_and_descriptions.shift();
  description_var = pictures_and_descriptions.shift();
  let element_image = document.getElementById('image');
  element_image.setAttribute("src", picture_var);
  let element_description = document.getElementById('description');
  element_description.innerText = description_var;
  pictures_and_descriptions.push(picture_var);
  pictures_and_descriptions.push(description_var);
  let element_selection_display = document.getElementById('selection-display');
  element_selection_display.innerText = '';
  let element_selection_span = document.getElementById('selection-span');
  element_selection_span.innerText = '';
}

// Describe this function...
function move_backwards() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  description_var = pictures_and_descriptions.pop();
  picture_var = pictures_and_descriptions.pop();
  let element_image2 = document.getElementById('image');
  element_image2.setAttribute("src", picture_var);
  let element_description2 = document.getElementById('description');
  element_description2.innerText = description_var;
  pictures_and_descriptions.unshift(description_var);
  pictures_and_descriptions.unshift(picture_var);
  let element_selection_display2 = document.getElementById('selection-display');
  element_selection_display2.innerText = '';
  let element_selection_span2 = document.getElementById('selection-span');
  element_selection_span2.innerText = '';
}


pictures_and_descriptions = ['https://assets.carandclassic.com/uploads/cars/ford/C1422914/1975-ford-escort-620235bae706d.jpg?ar=4%3A3&auto=compress&fill=blur&fit=fillmax&h=225&ixlib=php-3.3.1&max-h=225&max-w=300&q=50&w=300&s=4fa46c6aab4f447693f880fe3a119641', '1975 Ford Escort 1600 Sport', 'https://www.motorbiscuit.com/wp-content/uploads/2020/07/1998-Subaru-Impreza-22B-STi-1024x683.jpg', '1998 Subaru Impreza 22B STi', 'https://www.iksportclassic.com/wp-content/uploads/2020/09/ik-classics-morris-minor-1961.jpg', '1961 Morris Minor Convertible', 'https://images.hgmsites.net/hug/2017-dodge-viper_100563539_h.jpg', '2017 Dodge Viper'];
move_forwards();
button_var = 'next';


document.getElementById('next').addEventListener('click', (event) => {
  if (button_var == 'previous') {
    picture_var = pictures_and_descriptions.shift();
    pictures_and_descriptions.push(picture_var);
    description_var = pictures_and_descriptions.shift();
    pictures_and_descriptions.push(description_var);
  }
  move_forwards();
  button_var = 'next';

});

document.getElementById('previous').addEventListener('click', (event) => {
  if (button_var == 'next') {
    picture_var = pictures_and_descriptions.pop();
    pictures_and_descriptions.unshift(picture_var);
    description_var = pictures_and_descriptions.pop();
    pictures_and_descriptions.unshift(description_var);
  }
  move_backwards();
  button_var = 'previous';

});

document.getElementById('selection').addEventListener('click', (event) => {
  let element_selection_display3 = document.getElementById('selection-display');
  element_selection_display3.innerText = 'You have selected to test drive our:';
  let element_selection_span3 = document.getElementById('selection-span');
  element_selection_span3.innerText = description_var;

});
