// Import React and ReactDOM
import React from 'react';
import ReactDOM from 'react-dom';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-React Plugin
import Framework7React from 'framework7-react';

// Import Framework7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

// Import App Component
import App from '../components/app.jsx';

// Init F7 React Plugin
Framework7.use(Framework7React)

// Mount React App
ReactDOM.render(
  React.createElement(App),
  document.getElementById('app'),
);

// jQuery
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = jQuery;

import {
  f7
} from 'framework7-react';

// custom code
$("#choose_file").on('click', function () {
  $("#file_input_gallery").trigger('click');
});

$("#click_photo").on('click', function () {
  $("#file_input_camera").trigger('click');
});

$('#find_look').on('click', function() {
  $('#find_look').addClass('button-loading');

  var fd = new FormData();
  var files = $('#file_input_gallery')[0].files;
  fd.append('input_image_gallery',files[0]);

  console.log(fd.get('input_image_gallery'))

  var outfits = "";

  $.ajax({
    url: $('#get_match_form').attr('action'),
    type: 'POST',
    data : fd,
    contentType: false,
    processData: false,
    success: function(response){
      console.log('form response');
      console.log(response);
      outfits = JSON.parse(response);

      // var outfits = JSON.parse('["white_tank_top", "black_pants"]')

      if(outfits.length > 0) {
        $('#match_results_container p').remove();
        $('#match_results_container div').remove();
      }else{
        $('#match_results_container').append('<p>We could not find any matching items from your closet</p>');
      }

      $.each(outfits , function(index, val) {
        console.log(index, val);
        // $('img[data-outfit-name='+val+']')[0].src
        $('#match_results_container').append('<div class="col-33"> <img style="width:100%" data-outfit-name="'+val+'" src="'+$('img[data-outfit-name='+val+']')[0].src+'" class="lazy"/> </div>');
      });

      $('#match_results_open').trigger('click');

      $('#find_look').removeClass('button-loading');

    },
    error: function(response){
      console.log('form response');
      console.log(response);
      resp = JSON.parse(response);
      alert(resp.error);
    },
  });

});

// $('#add_to_closet').on('click', function (ev, ele) {
//   f7.dialog.login('Select Item Type', 'Add Item To Closet', function (username, password) {
//     f7.dialog.alert('Thank you!<br>Username:' + username + '<br>Password:' + password);
//   });
// });

f7.picker.create({
  inputEl: '#closet-add-item-type',
  cols: [
    {
      textAlign: 'center',
      values: ['Top', 'Dress', 'Jacket', 'Skirts', 'Shoe', 'Shorts', 'Scarf', 'Pants']
    }
  ],
  on: {
    closed: function () {
      $('#closet_item_add_image').trigger('click');
      $('#closet_item_add_image_close').trigger('click');
    }
  }
});