(function($){

  $(document).ready(function(){
    $("#elem").keypress( function(){
      //実行回数のカウント
      $("#result").html( parseInt( $("#result").html() ) + 1 );
    });
  });

})(jQuery);