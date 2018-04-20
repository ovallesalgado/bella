$(document).ready(function () {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '7548017482',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '7548017482.4c888bb.1d1b5ef520fe41b69ff9f41fca0112f4',
        sortBy: 'most-recent',
        template: '<div class="col-sm-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" style="width: 100%; height:auto; max-height: 212px" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();


    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});