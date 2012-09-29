jQuery.fn.submitOnCheck = function() {
  this.find('input[type=submit]').remove();
  this.find('input[type=checkbox]').click(function() {
    $(this).parent('form').submit();
  });
  return this;
}

$(function() {
  $('.edit_task').submitOnCheck();
});

// CoffeeScript Version:
// 
// jQuery.fn.submitOnCheck = ->
//   @find('input[type=submit]').remove()
//   @find('input[type=checkbox]').click ->
//     $(this).parent('form').submit()
//   this
// 
// jQuery ->
//   $('.edit_task').submitOnCheck()
