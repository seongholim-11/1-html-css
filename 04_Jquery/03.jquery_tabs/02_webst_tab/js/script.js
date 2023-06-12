let menu = $('.tab-menu');

function tabMenu(e){
    e.preventDefault();
    let $this = $(this);

    // 누른 a 다음에 있는 ul 보이기
    $this.next('ul').show()
    // 보인 ul의 부모인 li에 클래스 active 추가하기
    .parent('li').addClass('active')
    // active를 추가한 li를 제외한 나머지 li에 클래스 active 삭제하기
    .siblings('li').removeClass('active')
    // active를 삭제한 li들의 자식(ul)들을 숨기기
    .find('>ul').hide();
}

// menu의 자식 중 a를 클릭하거나 포커스할 때 실행
menu.find('>ul>li>a').click(tabMenu).focus(tabMenu)