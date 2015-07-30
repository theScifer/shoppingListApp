function addListItem() {
	var text = $("#new-text").val();
	    if (isBlank(text)) {
	      return;
	    }
	var html = $('#template').html().replace(/{{itemText}}/g,text);               
		$("#shoppingList").append(html);
		$("#new-text").val('');
}

function isBlank(text) {
  if ((text == null) || (text.length == 0)) {
    return true;
  }
  
  var trimmedText = text.replace(/^\s+|\s+$/g,'');
  if (trimmedText.length == 0) {
    return true;
  }
  
  return false;
}

function deleteItem() {
	$(this).parent().remove();
}

function finishItem() {
	$(this).parent().toggleClass('strikethrough');
}

function deleteAllChecked() {
	$('input:checked').parent().remove();
}

function deleteAll() {
	$('input:checkbox').parent().remove();
}

$(document).ready(function() {
	$("#add").on('click', addListItem);
	$('#shoppingList').on('click', '.delete', deleteItem);
	$('#shoppingList').on('click', '.done', finishItem);

	// $('#delete-checked').on('click',deleteAllChecked);
	// $('#delete-all').on('click',deleteAll)
});