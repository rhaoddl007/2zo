// 달력아이콘 클릭시 달력나오기
document.querySelector(".selectBox-right").addEventListener("click",()=>{
    document.querySelector(".calendarIcon").classList.toggle("show");
})

// 달력 제작
$(document).ready(function(){
    let k=1;
    $('.next').on("click",function(){
        k++;
        if(k==2){
            $(".calendarIcon-text").html('');
            $(".calendarIcon-text").append('March 2023');
            $(".calendarIcon-month").html('');
            $(".calendarIcon-month").append(`<tr>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
            <th>Su</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td class="shop4 Mac">1</td>
            <td class="shop4 Mac">2</td>
            <td class="shop4 Mac">3</td>
            <td class="shop4 Mac">4</td>
            <td class="shop4 Mac">5</td>
          </tr>
          <tr>
            <td class="shop4 Mac">6</td>
            <td class="shop4 Mac">7</td>
            <td class="shop4 Mac">8</td>
            <td class="shop4 Mac">9</td>
            <td class="shop4 Mac">10</td>
            <td class="shop4 Mac">11</td>
            <td class="shop4 Mac">12</td>
          </tr>
          <tr>
            <td class="shop4 Mac">13</td>
            <td class="shop4 Mac">14</td>
            <td class="shop4 Mac">15</td>
            <td class="shop4 Mac">16</td>
            <td class="shop4 Mac">17</td>
            <td class="shop5 Mac">18</td>
            <td class="shop5 Mac">19</td>
          </tr>
          <tr>
            <td class="shop5 Mac">20</td>
            <td class="shop5 Mac">21</td>
            <td class="shop5 Mac">22</td>
            <td class="shop5 Mac">23</td>
            <td class="shop5 Mac">24</td>
            <td class="shop5 Mac">25</td>
            <td class="shop5 Mac">26</td>
          </tr>
          <tr>
            <td class="shop5 Mac">27</td>
            <td class="shop5 Mac">28</td>
            <td class="shop5 Mac">29</td>
            <td class="shop5 Mac">30</td>
            <td class="shop5 Mac">31</td>
            <td></td>
            <td></td>
          </tr>`)}else if(k==3){
            $(".calendarIcon-text").html('');
            $(".calendarIcon-text").append('April 2023');
            $(".calendarIcon-month").html('');
            $(".calendarIcon-month").append(`<tr>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
            <th>Sa</th>
            <th>Su</th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td class="shop5 Apr">1</td>
            <td class="shop5 Apr">2</td>
          </tr>
          <tr>
            <td class="shop6 Apr">3</td>
            <td class="shop6 Apr">4</td>
            <td class="shop6 Apr">5</td>
            <td class="shop6 Apr">9</td>
            <td class="shop6 Apr">7</td>
            <td class="shop6 Apr">8</td>
            <td class="shop6 Apr">9</td>
          </tr>
          <tr>
            <td class="shop6 Apr">10</td>
            <td class="shop6 Apr">11</td>
            <td class="shop6 Apr">12</td>
            <td class="shop6 Apr">13</td>
            <td class="shop6 Apr">14</td>
            <td class="shop6 Apr">15</td>
            <td class="shop6 Apr">16</td>
          </tr>
          <tr>
            <td class="shop6 Apr">17</td>
            <td>18</td>
            <td>19</td>
            <td>20</td>
            <td>21</td>
            <td>22</td>
            <td>23</td>
          </tr>
          <tr>
            <td>24</td>
            <td>25</td>
            <td>26</td>
            <td>27</td>
            <td>28</td>
            <td>29</td>
            <td>30</td>
          </tr>`)}
          // 날짜 클릭시 월 일 바꾸기
          // 3월
    for( let i=1;i<32;i++){
      $('.Mac').eq(i).on("click",()=>{
        $(".today-date-info").html("");
        $(".today-date-info").append(`3월 ${i+1}일`);
      })
    }
    // 4월
    for( let i=1;i<31;i++){
      $('.Apr').eq(i).on("click",()=>{
        $(".today-date-info").html("");
        $(".today-date-info").append(`4월 ${i+1}일`);
      })
    }
          // 달력 날짜 일수 클릭시 오늘의 운휴시설 바뀌기
          // 2/26 ~ 3/17
    $(".shop4").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration3.jpg" alt="로저래빗의 카툰스핀">
      <figcaption>로저래빗의 카툰스핀</figcaption>
  </figure>`);
    })
    // 3/18 ~ 4/2
    $(".shop5").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/notice.png
      " alt="정상운영">
    </figure>`);
    // 정상운영
$("figure img").css('width','100%').css('height','100%');
$('figure').css('width','100%').css('height','100%');
    })
    // 4/3 ~ 4/17
    $(".shop6").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration4.jpg" alt="앨리스의 티파티">
      <figcaption>앨리스의 티파티</figcaption>
  </figure>`);
    })
    })
    $('.back').on("click",function(){
        k--;
        if(k==1){
            $(".calendarIcon-text").html('');
            $(".calendarIcon-text").append('February 2023');
        $(".calendarIcon-month").html('');
        $(".calendarIcon-month").append(`<tr>
        <th>Mo</th>
        <th>Tu</th>
        <th>We</th>
        <th>Th</th>
        <th>Fr</th>
        <th>Sa</th>
        <th>Su</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td class="shop0 Feb">1</td>
        <td class="shop0 Feb">2</td>
        <td class="shop0 Feb">3</td>
        <td class="shop0 Feb">4</td>
        <td class="shop0 Feb">5</td>
        </tr>
        <tr>
        <td class="shop0 Feb">6</td>
        <td class="shop0 Feb">7</td>
        <td class="shop1 Feb">8</td>
        <td class="shop1 Feb">9</td>
        <td class="shop1 Feb">10</td>
        <td class="shop1 Feb">11</td>
        <td class="shop1 Feb">12</td>
        </tr>
        <tr>
        <td class="shop1 Feb">13</td>
        <td class="shop1 Feb">14</td>
        <td class="shop1 Feb">15</td>
        <td class="shop1 Feb">16</td>
        <td class="shop1 Feb">17</td>
        <td class="shop1 Feb">18</td>
        <td class="shop1 Feb">19</td>
        </tr>
        <tr>
        <td class="shop2 Feb">20</td>
        <td class="shop2 Feb">21</td>
        <td class="shop2 Feb">22</td>
        <td class="shop3 Feb">23</td>
        <td class="shop3 Feb">24</td>
        <td class="shop3 Feb">25</td>
        <td class="shop4 Feb">26</td>
        </tr>
        <tr>
        <td class="shop4 Feb">27</td>
        <td class="shop4 Feb">28</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>`)}else
      if(k==2){
        $(".calendarIcon-text").html('');
        $(".calendarIcon-text").append('March 2023');
        $(".calendarIcon-month").html('');
        $(".calendarIcon-month").append(`<tr>
        <th>Mo</th>
        <th>Tu</th>
        <th>We</th>
        <th>Th</th>
        <th>Fr</th>
        <th>Sa</th>
        <th>Su</th>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td class="shop4 Mac">1</td>
        <td class="shop4 Mac">2</td>
        <td class="shop4 Mac">3</td>
        <td class="shop4 Mac">4</td>
        <td class="shop4 Mac">5</td>
          </tr>
          <tr>
            <td class="shop4 Mac">6</td>
            <td class="shop4 Mac">7</td>
            <td class="shop4 Mac">8</td>
            <td class="shop4 Mac">9</td>
            <td class="shop4 Mac">10</td>
            <td class="shop4 Mac">11</td>
            <td class="shop4 Mac">12</td>
          </tr>
          <tr>
            <td class="shop4 Mac">13</td>
            <td class="shop4 Mac">14</td>
            <td class="shop4 Mac">15</td>
            <td class="shop4 Mac">16</td>
            <td class="shop4 Mac">17</td>
            <td class="shop5 Mac">18</td>
            <td class="shop5 Mac">19</td>
          </tr>
          <tr>
            <td class="shop5 Mac">20</td>
            <td class="shop5 Mac">21</td>
            <td class="shop5 Mac">22</td>
            <td class="shop5 Mac">23</td>
            <td class="shop5 Mac">24</td>
            <td class="shop5 Mac">25</td>
            <td class="shop5 Mac">26</td>
          </tr>
          <tr>
            <td class="shop5 Mac">27</td>
            <td class="shop5 Mac">28</td>
            <td class="shop5 Mac">29</td>
            <td class="shop5 Mac">30</td>
            <td class="shop5 Mac">31</td>
        <td></td>
        <td></td>
      </tr>`)}
      // 날짜 클릭시 월 일 바꾸기
    // 2월
    for( let i=1;i<29;i++){
      $('.Feb').eq(i).on("click",()=>{
        $(".today-date-info").html("");
        $(".today-date-info").append(`2월 ${i+1}일`);
      })
    }
    // 3월
    for( let i=1;i<32;i++){
      $('.Mac').eq(i).on("click",()=>{
        $(".today-date-info").html("");
        $(".today-date-info").append(`3월 ${i+1}일`);
      })
    }
      // 달력 날짜 일수 클릭시 오늘의 운휴시설 바뀌기
      // 2/1~2/7
    $(".shop0").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration1.jpg" alt="페니아케이드">
      <figcaption>페니 아케이드</figcaption>
  </figure>`);
    })
    // 2/8~2/19
    $(".shop1").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration1.jpg" alt="페니아케이드">
      <figcaption>페니 아케이드</figcaption>
  </figure>
  <figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration2.jpg" alt="구피의 페인트&플레이 하우스">
      <figcaption>구피의 페인트&플레이 하우스</figcaption>
  </figure>`);
    })
    // 2/20 ~ 2/22
    $(".shop2").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration1.jpg" alt="페니아케이드">
      <figcaption>페니 아케이드</figcaption>
  </figure>
  <figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration2.jpg" alt="구피의 페인트&플레이 하우스">
      <figcaption>구피의 페인트&플레이 하우스</figcaption>
  </figure>
  <figure>
    <img src="./imgs/menu2/parkguide imgs/opration/opration3.jpg" alt="로저래빗의 카툰스핀">
    <figcaption>로저래빗의 카툰스핀</figcaption>
</figure>`);
// 운휴시설 3개
$("figure img").css('width','380px');
$("figure img").css('height','270px');
$("figure").css('margin-left','30px');
    })
    // 2/23 ~ 2/25
    $(".shop3").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration2.jpg" alt="구피의 페인트&플레이 하우스">
      <figcaption>구피의 페인트&플레이 하우스</figcaption>
  </figure>
  <figure>
    <img src="./imgs/menu2/parkguide imgs/opration/opration3.jpg" alt="로저래빗의 카툰스핀">
    <figcaption>로저래빗의 카툰스핀</figcaption>
</figure>`);

    })
    // 2/26 ~ 3/17
    $(".shop4").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration3.jpg" alt="로저래빗의 카툰스핀">
      <figcaption>로저래빗의 카툰스핀</figcaption>
  </figure>`);
    })
    // 3/18 ~ 4/2
    $(".shop5").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/notice.png
      " alt="정상운영">
    </figure>`);
    // 정상운영
$("figure img").css('width','100%').css('height','100%');
$('figure').css('width','100%').css('height','100%');
    })
    })


    // 달력 날짜 일수 클릭시 오늘의 운휴시설 바뀌기
    // 2/1~2/7
    $(".shop0").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration1.jpg" alt="페니아케이드">
      <figcaption>페니 아케이드</figcaption>
  </figure>`);
    })
    // 2/8~2/19
    $(".shop1").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration1.jpg" alt="페니아케이드">
      <figcaption>페니 아케이드</figcaption>
  </figure>
  <figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration2.jpg" alt="구피의 페인트&플레이 하우스">
      <figcaption>구피의 페인트&플레이 하우스</figcaption>
  </figure>`);
    })
    // 2/20 ~ 2/22
    $(".shop2").on("click",()=>{
      // 운휴시설 3개
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration1.jpg" alt="페니아케이드">
      <figcaption>페니 아케이드</figcaption>
  </figure>
  <figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration2.jpg" alt="구피의 페인트&플레이 하우스">
      <figcaption>구피의 페인트&플레이 하우스</figcaption>
  </figure>
  <figure>
    <img src="./imgs/menu2/parkguide imgs/opration/opration3.jpg" alt="로저래빗의 카툰스핀">
    <figcaption>로저래빗의 카툰스핀</figcaption>
</figure>`);
// 운휴시설 3개
$("figure img").css('width','380px');
$("figure img").css('height','270px');
$("figure").css('margin-left','30px');
    })
    // 2/23 ~ 2/25
    $(".shop3").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration2.jpg" alt="구피의 페인트&플레이 하우스">
      <figcaption>구피의 페인트&플레이 하우스</figcaption>
  </figure>
  <figure>
    <img src="./imgs/menu2/parkguide imgs/opration/opration3.jpg" alt="로저래빗의 카툰스핀">
    <figcaption>로저래빗의 카툰스핀</figcaption>
</figure>`);
    })
    // 2/26 ~ 3/17
    $(".shop4").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration3.jpg" alt="로저래빗의 카툰스핀">
      <figcaption>로저래빗의 카툰스핀</figcaption>
  </figure>`);
    })
    // 3/18 ~ 4/2
    $(".shop5").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/notice.png
      " alt="정상운영">
    </figure>`);
    })
    // 4/3 ~ 4/17
    $(".shop6").on("click",()=>{
      $(".info-img").html("");
      $(".info-img").append(`<figure>
      <img src="./imgs/menu2/parkguide imgs/opration/opration4.jpg" alt="앨리스의 티파티">
      <figcaption>앨리스의 티파티</figcaption>
  </figure>`);
    })

    // 날짜 클릭시 월 일 바꾸기
    // 2월
    for( let i=1;i<29;i++){
      $('.Feb').eq(i).on("click",()=>{
        $(".today-date-info").html("");
        $(".today-date-info").append(`2월 ${i+1}일`);
      })
    }
    // 3월
    for( let i=1;i<32;i++){
      $('.Mac').eq(i).on("click",()=>{
        $(".today-date-info").html("");
        $(".today-date-info").append(`3월 ${i+1}일`);
      })
    }
    // 4월
    for( let i=1;i<31;i++){
      $('.Apr').eq(i).on("click",()=>{
        $(".today-date-info").html("");
        $(".today-date-info").append(`4월 ${i+1}일`);
      })
    }
})