//$(function() {
document.addEventListener("turbolinks:load", function() {	  
  var editor;
  var viewer;
  $('.administrate-jsoneditor').each(function( index ) {

    var $current = $(this).find("textarea");
    
    var options = {    
      onChange: function(){
        try {
          var updated_json = editor.get();
        } catch(err) {
          console.log(err);
        }

        $current.val(JSON.stringify(updated_json));
      },
      onError: function (err) {
        alert(err.toString());
      },
      mode: 'tree',
      modes: ['text', 'tree'],
    };

    var editor = new JSONEditor(this, options);

    editor.set(JSON.parse($current.val()));
  });

$('.administrate-jsonviewer').each(function( index ) {
  var $current = $(this).find("textarea");

    var options = {    
      onChange: function(){
        try {
          var updated_json = editor.get();
        } catch(err) {
          console.log(err);
        }

        $current.val(JSON.stringify(updated_json));
      },
      onError: function (err) {
        alert(err.toString());
      },
      mode: 'tree',
      modes: ['text', 'tree'],
    };

    var editor = new JSONEditor(this, options);

    editor.set(JSON.parse($current.val()));
  // var $current = $(this).find("textarea");
  //
  // var options = {    
  //  onEditable: function (node) {
  //       if (!node.path) {
  //         // In modes code and text, node is empty: no path, field, or value
  //         // returning false makes the text area read-only
  //         return false;
  //       }
  //     },
  //     onError: function (err) {
  //       alert(err.toString());
  //     },
  //     onModeChange: function (newMode, oldMode) {
  //       console.log('Mode switched from', oldMode, 'to', newMode);
  //     },
  //   mode: 'tree',
  //   modes: ['text', 'tree'],
  // };
  //
  // var viewer = new JSONEditor(this, options);
  //
  // viewer.set(JSON.parse($current.val()));
  });



});