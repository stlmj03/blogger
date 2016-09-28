$(function(){
    $.each($("article a:has(img)"), function(_i){
        var _title = "image";
        if ($(this).attr("title") !== undefined) {
            _title = $(this).hasAttr("title");
        }
        _title = _title + _i;
        
        if ($(this).attr("href").indexOf("amazon.com") === -1) {
            $(this).addClass("lightbox-group")
                .attr("href", $(this).attr("href").replace(/s1600-h/g, "s1600"))
                .attr("data-lightbox", _title);
        }
    });
    
    $("head").append($("<link />").attr({
        rel: "stylesheet",
        type: "text/css",
        href: "//pulipulichen.github.io/blogger/blogger/lib/lightbox2-lokeshdhakar/css/lightbox.min.css"
        //media: "screen"
    }));
    
    $.getScript("//pulipulichen.github.io/blogger/blogger/lib/lightbox2-lokeshdhakar/js/lightbox.js");
});