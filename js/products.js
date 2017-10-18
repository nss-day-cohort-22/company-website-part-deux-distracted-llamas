$('#easyPaginate').easyPaginate({
    paginateElement: 'div',
    elementsPerPage: 4,
    effect: 'climb'
});




    if($("[title|='Page 1']").hasClass("current")) {
        // console.log('first')
        $('a.prev').hide();
    } else {
        $('a.prev').show();
    }

    if($("[title|='Page 5']").hasClass("current")) {
        // console.log('first')
        $('a.next').hide();
    } else {
        $('a.next').show();
    }



    $('a').click(function() {
        $('#easyPaginate').css("margin-left", "300px");
        $("html, body").animate({ scrollTop: 0 }, 10);
        if($("[title|='Page 1']").hasClass("current")) {
            // console.log('first')
            $('a.prev').hide();
        } else {
            $('a.prev').show();
        }
        if($("[title|='Page 5']").hasClass("current")) {
            // console.log('first')
            $('a.next').hide();
        } else {
            $('a.next').show();
        }
    });