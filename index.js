//Taking the start from the exercise we worked through together with the fizzbuzz drill, I'm going to recycle the code to find and name the input for the items.
$(function() {
    $('#js-shopping-list-form').submit(event => {
      event.preventDefault();
      
      var addItem = $('#js-shopping-list-form').find('input').val();
//Wrapped .append with if() to prevent empty input box from creating an empty addItem.      
      if (addItem !=="") {
//At this point I see I need to create a new li with the addItem as the new item.  Here's what I got for this. (Started Feb 28-ish, finished successfully Mar 5.)
   
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
        //Mar 5. Clear out the text box after adding addItem to form.
    $('#js-shopping-list-form').find('input').val("");

});
});     
//March 7. Added these lines to make the buttons work.  These functions below were originally inside the addItem function, at the end of the code at line 27.  They didn't work, so I moved these functions outside of the above function to see if they needed to be outside of the other.  They still don't work.
$(function() {
    $("button").click(function(event) {
        $('ul').on('click', '.shopping-item-toggle', function(event) {
            $("this.closest('li')").find("li > span").toggleClass('shopping-item__checked');
        });
        $('ul').on('click', '.shopping-item-delete', function(event)   {
            this.closest("li").remove(); 
        });
    });
});
//Mar 4. I'm at the point where I want this line to essentially copy the previous li, substituting addItem for bread.  I probably can't do that so I'm ok with line 10 as it is, but I also want to add lines 58-65 from the HTML into this code.  The code passed into the .append() takes care of HTML line 57, but how to effect HMTL lines 57-65?  I can't even figure out how to put a hard return into the () of the .append().  I tried this...
         // $("ul").append("<li>" \n <span class="shopping-item"> + addItem + "</li>");
// ... but that didn't work.  I also tried telling the line to toggleClass the closest div, like this...
        // $("ul").append("<li>" + addItem + "</li>").toggleClass(.closest("div"));
// ... but that didn't work either.


//Mar 5. Finally got the .append to work by getting rid of the .toggleClass and instead adding in the code for the buttons.  Now I want the input box to clear itself out after the item is created, and then I need to get the buttons to actually work.

//Mar 7: getting the check button to get a line-through.  I want to write a jquery on the ul so it will work regardless of what items are on the list.  I will have it listen for a click on class 'shopping-item-toggle. 

// I realized that to target the ul I also need to target a specific class, and I don't know how to narrow the target down like that.  Besides, every item has buttons, so as long as I target by class name I don't nee to figure out how to do that, if I even can.

// I added the code for the check and delete buttons, then fixed my parentheses and curly braces so the addItems appear properly, but the buttons still don't work.

//Mar 2. Now I need to add classes to this new li to match the classes of the existing li's.  I think I can do this using .closest() and .toggleClass(), but first I need something that can always represent the new item being added to the shopping list.  I'm going to try this with a const, and I think this should be before the .append() .

//Idea! I first tried this by creating the new item using .append() first.  I think this needs to be done at the end once I've created the newItem with all its classes.
    


//Making changes to track in GH.
      