// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function(){
	bindListeners();
});

var bindListeners = function(){
	boxListeners();
};

var boxListeners = function(){
    $('.container').on('click', function(e){
        e.preventDefault();
        var thisItemId = e.target.id;
        // Add logic so that ONLY Box items are effected by this click
        var thisItem = document.getElementById(thisItemId);
        console.log("Box_2 clicked: " + $(thisItem).css('stroke') + "  id:" + this.id + " item_id:" + thisItemId);
        if ($(thisItem).css('stroke')=== "rgb(0, 0, 0)"){
            $(thisItem).css({ stroke: "red"  });
        } else {
            $(thisItem).css({ stroke: "black"});
        };

    });
};