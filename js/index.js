$(document).ready(function () {


  // 스크롤 시 헤더 밑줄
  $(window).scroll(function() {
      var scheight = $(document).scrollTop();
      var scwidth = $( window ).width();

      if(scwidth >= 1281) {
        if(scheight > 100){
          $("header, .sub").css({"backgroundColor":"#fff"})
          $(".gnb .main>a, .sub li a, .fontIcon").css({"color":"#333"})
          console.log(scheight)
        } else {
          $("header, .sub").css({"backgroundColor":"transparent"})
          $(".gnb .main>a, .sub li a, .fontIcon").css({"color":"#fff"})
        }

      } else if(scwidth >= 1024 && scwidth < 1281) {
        if(scheight > 80){
          $("header").css({"border-bottom":"1px solid #ddd"})
        } else {
          $("header").css({"border":"none"})
        }

      } else if(scwidth >= 320 && scwidth < 1024) {
        if(scheight > 60){
          $("header").css({"border-bottom":"1px solid #ddd"})
        } else {
          $("header").css({"border":"none"})
        }
      }
  });







  // header - submenu
  $(".main").hover(function() {
    $(this).find(".submenu").stop().slideDown();
  }, function() {
    $(this).find(".submenu").stop().slideUp();
  });






   


  /* 메인 비주얼 */
  let $img = $(".changeimg ul li");
  let $btn = $(".index ul li");
  let oldidx=0;
  let idx=0;
  let img_n = $img.length; 

  function changeImg(idx) {
    if(oldidx!=idx) {
      $btn.eq(oldidx).removeClass("active");
      $btn.eq(idx).addClass("active");
      $img.eq(oldidx).stop().fadeOut(300);
      $img.eq(idx).stop().fadeIn(300);
    }
    oldidx = idx;

  }

  function changeAuto() {
    idx++;

  if(idx>img_n-1) {
    idx=0;
  }
  changeImg(idx);
}
  timer=setInterval(changeAuto,6000);

  $btn.click(function() {
    clearInterval(timer);
    idx=$(this).index();
    changeImg(idx);
    timer=setInterval(changeAuto,6000);
  })

  $btn.click(function() {
    idx=$(this).index();
    changeImg(idx);
  })



 

  // menu slick
  $('.shop>div.center>div.menu_con_total').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    dots: true
  })








  /* about 비주얼 */
  let $aboutImg = $(".aboutFlex .ABOUT");
  let $lbtn = $(".aboutFontIcon .lbtn");
  let $rbtn = $(".aboutFontIcon .rbtn");
  let aboutOldidx = 0;
  let aboutNewidx = 0;
  let aboutImg_n = $aboutImg.length;

  function changeAboutimg(aboutNewidx) {
    if(aboutOldidx!=aboutNewidx) {
      $aboutImg.eq(aboutOldidx).stop().fadeOut(300);
      $aboutImg.eq(aboutNewidx).stop().fadeIn(300);
    }
    aboutOldidx = aboutNewidx;
  }

  $rbtn.click(function() {
    aboutNewidx++;
    if(aboutNewidx>aboutImg_n-1) {
      aboutNewidx=0;
    }
    changeAboutimg(aboutNewidx);

  });

  $lbtn.click(function() {
    aboutNewidx--;
    if(aboutNewidx<0) {
      aboutNewidx=aboutImg_n-1;
    }
    changeAboutimg(aboutNewidx);
  });


  // 썸네일 클릭시 
  let aboutPATH;
  $(".aboutBottomImg div img").click(function(){
    let aboutPATH=$(this).attr("src");
    $(".aboutIMG").css({"background":`url(${aboutPATH})`}).hide().fadeIn();
  });








  // footer slick 

  $('.footerImg_img1').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 300,
    dots: true,
    autoplay: true,     
    autoplaySpeed: 3000
  });

  $('.footerImg_img2').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 400,
    dots: true,
    autoplay: true,    
    autoplaySpeed: 2000
  });

 

});