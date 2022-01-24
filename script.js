// テキストを保存

$('.item_submit').click(function() {
    const $text_area = $('.form-control').val();

    const $text_box = $('<div class="item text-item"><p style="margin: 0px;" class="addition"></p><ul class="editpager clearfix unvisible"><li class="first-order">一番上へ</li><li class="minus-order">上へ</li><li class="plus-order">下へ</li><li class="last-order">一番下へ</li><li class="edit-item">編集</li><li class="delete-item">削除</li></ul><div class="not_exist"><input class="edit_btn btn btn-primary" type="button" value="保存する"><textarea class="hidden-textarea" style="width: 300px;"></textarea></div</div>');

    $('#sortable').append($text_box);

    // $(".addition").text($text_area);

    $("#sortable").children(".text-item").last().children('p').text($text_area);
    $('.form-control').val('');
});

// 機能一覧が出現

$('#sortable').on({
    'mouseenter':function(){
	$(this).children('.editpager').removeClass("unvisible");
    },
    'mouseleave':function(){
	$(this).children('.editpager').addClass("unvisible");
    }
}, ".item");


// 一番上へ移動

$('#sortable').on('click','.first-order', function() {
    $(this).parent().parent().prependTo("#sortable");
    $(this).parent('.editpager').addClass("unvisible");
});

// 一番下へ移動

$('#sortable').on('click','.last-order', function() {
    $(this).parent().parent().appendTo("#sortable");
    $(this).parent('.editpager').addClass("unvisible");
});

// 一つ上へ移動

$('#sortable').on('click','.minus-order', function() {

    $(this).parent().parent().prev().before($(this).parent().parent());

    $(this).parent('.editpager').addClass("unvisible");
});

// 一つ下へ移動

$('#sortable').on('click','.plus-order', function() {

    $(this).parent().parent().next().after($(this).parent().parent());

    $(this).parent('.editpager').addClass("unvisible");
});

// 削除機能

$('#sortable').on('click','.delete-item', function() {
    if(confirm('本当に削除してよろしいですか？')){
        $(this).parent().parent().remove();
    }
});

// 編集機能 テキストエリアと保存ボタンを表示

$('#sortable').on('click','.edit-item', function() {

    const $target = $(this).parent().parent().siblings().children(".hidden-class")

    $target.toggleClass('hidden-class').toggleClass('not_exist');

    $(this).parent().next().toggleClass('not_exist');
    $(this).parent().next().toggleClass('hidden-class');

    const text_str = $(this).parent().prev('p').text();

    $(this).parent().next().children('.hidden-textarea').text(text_str);


});

    // 編集機能 保存ボタンをクリック

$('#sortable').on('click','.edit_btn', function() {

    const edit_str = $(this).next().val();
    $(this).parent().prevAll('p').text(edit_str);

    $(this).parent().toggleClass('hidden-class');
    $(this).parent().toggleClass('not_exist');

});
