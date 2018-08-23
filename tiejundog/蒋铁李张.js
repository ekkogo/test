var nowpage=0;

$(function(){
   var width=$(window).width();
   var height=$(window).height();
//    console.log(width,height);

   $(".content").width(width);
   $(".content").height(height*10);

   $(".page").width(width);
   $(".page").height(height);
    
   $(".content").swipe({
       swipe:function(event,direction,distance,duration,fingerCount){
           if(direction=="up"){
               nowpage=nowpage+1;
           }
           else if(direction=="down"){
               nowpage=nowpage-1;
           }

           if(nowpage<0){
               nowpage=0;
           }
           if(nowpage>9){
               nowpage=9;
           }
       console.log(nowpage);
       $(".content").animate({top:nowpage*-100+"%"},1000,getpage(nowpage))
        }
    });
    function getpage(page){
        /**-------------------分割线----------------------**/
        if(page==0){
            $(".t1bg").fadeTo(1000,1);
            $(".t1bg1").animate({left:'0%'},700);
            $(".t1bg2").animate({left:'0%'},700);
            $(".t1bg3").animate({left:'0%'},700);
            $(".t1bg4").animate({left:'0%'},700);
            $(".t1yuan").animate({top:'19%'}, 700,function () {
                $(".t1text").animate({height:"33%",width:"66%"},1000)
            })

            // $(".t1yuan").
        }
        /**-------------------分割线----------------------**/
        if(page==1){
            $(".t2bg").fadeTo(420,0.2,function () {
                $(".t2bg").animate({left:'0%'},1000);
                $(".t2bg").fadeTo(1000,1);
                $(".t2ren").fadeIn(200);
                $(".t2text").fadeIn(200);
                $(".t2ren").animate({top:'19%'},1000);
                $(".t2text").animate({top:'67%'},1000);


            });

        }
        /**-------------------分割线----------------------**/
        else if(nowpage==2){
            $(".t3-2").animate({"right":"27%"},1500,function(){
                $(".t3-1").fadeIn(1000,function(){
                    $(".t3-3").fadeIn(1000)
                    $(".t3-5").fadeIn(1000)
                    $(".t3-7").fadeIn(1000)
                    $(".t3-6").fadeIn(1000,function(){
                        $(".t3-4").fadeIn(1000)
                        $(".t3-8").fadeIn(1000)
                    })
                })
            })

        }
            
        /**-------------------分割线----------------------**/
        
        else if(nowpage==3){
            $(".t4-1").animate({"left":"7%"},1500)
            $(".t4-2").animate({"left":"19%"},1500)
            $(".t4-3").fadeIn(2000)
        }
        /**-------------------分割线----------------------**/
        else if(page==4){
            $(".t5-2").fadeIn(3000);
            // console.log("444")
            $(".t5-3").fadeIn(3000)
        }
        /**-------------------分割线----------------------**/
        else if(page==5){
            $(".t6-3").fadeIn(3000)
        }
        /**-------------------分割线----------------------**/
       else  if(page==6){
            // 第七页
            // 人的淡入
            $(".t7-2").fadeIn(2000,function(){
                $(".btn_design").fadeIn(1000);
                $ (".btn_design").click(function(){
                    $(".btn_design").fadeOut(1000);
                    $(".t7-1").fadeOut(1000);
                    $(".t7-2").fadeOut(1000);
                    $(".t7-3").fadeOut(1000);
                    $(".cloud").fadeOut(1000);
                    $(".designer").fadeIn(1000,function(){
                        $(".design").fadeIn(1000,function(){
                            $(".designer").animate({"left":"-50%"},500,function(){
                                $(".designer").fadeOut(1000);})
                            $(".design").animate({"left":"-50%"},500,function(){
                                $(".design").fadeOut(1000,function(){
                                    $(".introduction").fadeIn(5)
                                });
                            })
                        })                                  
                    })  
                })                                                    
        })   
        }
        /**-------------------分割线----------------------**/
        else if(page==7){
             // 第八页
             $(".t8-2").fadeIn(2000,function(){           
                $(".btn_design1").fadeIn(1000);
                $ (".btn_design1").click(function(){
                    $(".btn_design1").fadeOut(1000);
                    $(".t8-1").fadeOut(1000);
                    $(".t8-2").fadeOut(1000);
                    $(".t8-3").fadeOut(1000);
                    $(".designer1").fadeIn(1000,function(){
                        $(".design1").fadeIn(1000,function(){
                            $(".designer1").animate({"left":"-50%"},500,function(){
                                $(".designer1").fadeOut(1000);})
                            $(".design1").animate({"left":"-50%"},500,function(){
                                $(".design1").fadeOut(1000,function(){
                                    $(".introduction1").fadeIn(5)
                                });
                            })
                        })                                  
                    })  
                })             
                                    
        })   
        }
        /**-------------------分割线----------------------**/
        else if(page==8){
            $(".page9-t9-1").fadeIn(2000)
        }
        /**-------------------分割线----------------------**/
        else if(page==9){
            // console.log("111")
            $(".t10-bg").fadeIn(2000,function(){
            $(".t10-1").animate({"width":"40%","left":"-10%","top":"33%"},1000)
            $(".t10-1").animate({"width":"52%","left":"6%","top":"17%"},1000)
            $(".t10-1").animate({"width":"70%","left":"15%","top":"22%"},1000,function(){
                // 李铁蒋张显示
                $(".t10-6").animate({"width":"87%"},2000,function(){
                    // 公司图标
                    //  $(".t10-5").animate({"left":"20%"},1000)
                    // 显示ltjz
                    $(".L").animate({"left":"-30%"},5000)
                    $(".T").animate({"left":"28%"},5000)
                    $(".J").animate({"bottom":"17%"},5000)
                    $(".Z").animate({"bottom":"17%"},5000,function(){
                        $(".L").animate({"left":"20%"},2000)
                    })

                    $(".t10-3").animate({"left":"28%"},1000,function(){
                        // $(".t10-2").animate({"bottom":"2%"},1500)
                        $(".t10-4").animate({"bottom":"10%"},500,function(){
                            $(".t10-4").animate({"bottom":"12%"},500,function(){
                                $(".t10-4").animate({"bottom":"10%"},500)

                        })
                    })
                })
            })
        })

        })
            

          
        }
        /**-------------------分割线----------------------**/

    }
    getpage(nowpage);
    $(".musicbtn").click(function(){
        var play=document.getElementById("music");
        if(play.paused)
        {
            play.play();
            $(".musicbtn").attr("src","./img/music_note_big.png")
        }
        else 
        {
            play.pause()
            $(".musicbtn").attr("src","./img/musicBtnOff.png");
        }
    })
})