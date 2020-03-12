
$(function() {
    $('#js-shopping-list-form').submit(event => {
      event.preventDefault();
      var addItem = $('#js-shopping-list-form').find('input').val();
      if (addItem !=="") {  
        $("ul").append(
            "<li>"
                + "<span class='shopping-item'>" + addItem + "</span>"
                + "<div class='shopping-item-controls'>"
                    + "<button class='shopping-item-toggle'>"
                        + "<span class='button-label'>" + "check" + "</span>"
                    + "</button>" 
                    + "<button class='shopping-item-delete'>"
                        + "<span class='button-label'>" + "delete" + "</span>"
                    + "</button>"    
                + "</div>"
            + "</li>"
        );
        } 
    $('#js-shopping-list-form').find('input').val("");
});
});
$('ul').on('click', '.shopping-item-toggle', function (event) {
    $(this).parent().siblings().toggleClass('shopping-item__checked');
    })

$('ul').on('click', '.shopping-item-delete', function(event)   {
    this.closest("li").remove(); 
});

      