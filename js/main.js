
//============ クリックイベント 画像変更　処理  Start ================
$(function(){
       var num = 0;
       var num_2;
       $("#main_image li").eq(0).addClass("show"); 
       $("#main_image li").eq(0).removeClass("img_hide"); 

       // === テーブルカラー選択
       $("#btn li").click(function () {
        num = $("#btn li").index(this);
        $("#main_image li").hide();
        $("#main_image li").eq(num).show();
    });

        // === 脚カラー
        $("#btn_ashi li").click(function(){
            num_2 = $("#btn_ashi li").index(this);

            if(num == 2 && num_2 == 0 || num == 6 && num_2 == 0) {
                $("#main_image li").hide();
                $("#main_image li").eq(8).show();
            }else if(num == 0 && num_2 == 0 || num == 4 && num_2 == 0) {
                $("#main_image li").hide();
                $("#main_image li").eq(9).show();
            } else if (num == 2 && num_2 == 1 || num == 6 && num_2 == 1) {
                $("#main_image li").hide();
                $("#main_image li").eq(2).show();
            } else if (num == 0 && num_2 == 1 || num == 4 && num_2 == 1) {
                $("#main_image li").hide();
                $("#main_image li").eq(0).show();
            }

        });

});            

//============ クリックイベント 画像変更　処理  END ================
         