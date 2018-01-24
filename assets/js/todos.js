// Check off specific todos by clicking
// adding event listener when code is first run
// that listens for click event on any li's that are there or added later
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
})


// The "X" button
// the wrong way to do it
// $('span').click(function(event) {
//   ...
// })

// use .on (intead of .click) b/c .on listens for all 'ul's added after initialization as well
// adding event listener when code is first run
// that listens for click event on any li's that are there or added later
$("ul").on("click", "span", function(event){
    event.stopPropagation();

    // remove the li (parent) the "x"(span) is in
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
})


$("input[type='text']").keypress(function(event){
    // if "Enter" key is pressed
    if (event.which === 13) {
        // get input string
        var todoText = $(this).val();
        // clear textinput
        $(this).val("");
        // create new li and add to ul
        $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
    }
})

$('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle();
})
