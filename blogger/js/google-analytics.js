 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

//ga('create', 'UA-37178375-1', 'auto');    // 原始的呼叫方法

var _user_id = "pudding";
ga('create', 'UA-37178375-1', {'userId': _user_id});   // 20161118 嘗試加入userId看看
ga('require', 'displayfeatures');
ga('set', 'dimension1', _user_id);

ga('send', 'pageview');

// ----------------------------------------
/**
 * 20161118 加入事件設定
 */
  
 $(function () {
     
     // ------------------------
     // 搜尋
     var _check_ga_search_ready = function () {
         if ($(".gsc-search-button").length === 0) {
             setTimeout(_check_ga_search_ready, 1000);
         }
         else {
             $(".gsc-search-button:first").click(function () {
                 ga("send", "event", "search", $("input.gsc-input:first").val(), 1);
                 //console.log("送出GA event search");
             });
         }
     };
     _check_ga_search_ready();
     
     // ----------------------------
     // 分享
     $(".social-button").click(function () {
         //var _btn = $(this);
         //var _link = _btn.parent("aside:first");
         ga("send", "event", "share", $(this).attr("data-title"), 1);
        //console.log("送出GA event search");
     });
 });