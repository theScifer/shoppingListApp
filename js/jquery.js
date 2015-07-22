function addListItem() {
	var text = $("#new-text").val();
	$("#shoppingList").append('<li><input type="checkbox"> '+text+ ' <button class="delete"><img src="images/redx.png" alt="delete button"></button></li>');
	$("#new-text").val('');
}

function deleteItem() {
	$(this).parent().remove();
}

function finishItem() {
	$(this).parent().toggleClass('strikethrough');
}

$(function() {
	$("#add").on('click', addListItem);
	$(document).on('click', '.delete', deleteItem);
	$(document).on('click', '.done', finishItem);
});