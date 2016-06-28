/*****************
 *     JQuery     *
 *****************/
$(document).ready(function() {

    // Prevent Screen Pop Default on links
    $('a,button').click(function(e) {
        e.preventDefault();
    });

    // Navbar Functionality
    //toggle border function
    $('li.nav-link').click(function() {
        $('.nav-link').removeClass('nav-active');
        $(this).addClass('nav-active');
        console.log('This link is active');
    });

    // Follow and Unfollow Functionality
    $('#status-btn').click(function(e) {
        e.preventDefault();
        if ($('#status-btn').html() === 'Follow') {
            $(this).removeClass('follow-btn').addClass('followed');
            $(this).html('Unfollow');
            console.log('Now Following User!');
        } else {
            $(this).removeClass('followed');
            $(this).addClass('follow-btn');
            $(this).html('Follow');
            console.log('You Unfollowed this User!');
        }
    });

    // Post Functionality
    $('.post-btn').click(function() {
        // Clone A post and modify it
        var content = $('#text-area').val();
        $('#newsfeed').prepend($('.post').last().clone().removeClass('post-hidden'));
        //Change Last Create Posted
        $('.post p').first().html(content);
        $('#text-area').val(''); //clear form after posting
        console.log('Posted!');
    });

    // Hide Ad Functionality
    $('#hide-ad-btn').click(function(e) {
        e.preventDefault();
        var placeholder = 'http://placehold.it/162x372';
        if ($(this).html() === 'Hide Ads') {
            $('#ad').attr('src', placeholder); //Shows Gray Placeholder
            console.log('Ad hidden');
            $(this).html('Show Ads')
        } else {
            $('#ad').attr('src', 'http://lorempicsum.com/simpsons/162/372/1');
            console.log('Ad shown');
            $(this).html('Hide Ads');
        }
    });

    // Lightbox Functionality

    // Lightbox On
    $('.lightbox-link').click(function(e) {
        console.log('Lightbox On!');
        e.preventDefault();
        $('#lightbox-container').addClass('lightbox-on');
        $('#lightbox-image').attr('src', $(this).attr('data-src'));
    });

    // Lightbox Off
    $('#lightbox-container').click(function() {
        console.log('Lightbox Off!');
        $(this).removeClass('lightbox-on');
    });

    // Prevents Lightbox closing when only image is clicked
    $('#lightbox-image').click(function(e) {
        e.stopPropagation();
        console.log('lightbox wont close when lightbox image is clicked');
    });

    // Lightbox off: opt 2 ('esc' key)
    $(document).keyup(function(e) {
        console.log('Lightbox Off!');
        if (e.which === 27) {
            $('#lightbox-container').removeClass('lightbox-on');
        }
    });

}); //End Of JQuery
