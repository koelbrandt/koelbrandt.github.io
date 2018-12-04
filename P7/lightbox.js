// this is a comment

$('header').click(function() {
    $('header').css('background-color', 'red')
    $('h2').html('hello there!');
})

// lightbox
$('a').click(function() {
    // add the class of 'clicked' to my link
    $(this).toggleClass('clicked')
    
    // show model with a fade of .5s
    $('div.modal').fadeIn(500)
    
    // fill content wih an image
    $('div.modal-content').html(
        $(this).html()
    )
    // stop link from going to the next page
    event.preventDefault()
})

// close lightbox
$('div.modal-close').click(function() {
    $('div.modal').fadeOut(500)
})