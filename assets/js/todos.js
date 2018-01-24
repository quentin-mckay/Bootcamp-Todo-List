// Check off specific todos by clicking
$("ul").on("click", "li", function(){    
    $(this).toggleClass("completed");
})

// The "X" button
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