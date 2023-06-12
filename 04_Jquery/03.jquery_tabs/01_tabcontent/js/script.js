$('.tab-set').each(function(){
    let topDiv = $(this);
    // 탭 이동 버튼
    let anchors = topDiv.find('ul.tabs a');
    // 탭 내용
    let panelDivs = topDiv.find('div.panel');
    let lastAnchor;
    let lastpanel;

    // 버튼(a)을 누르기 전의 클래스 on 담기
    lastAnchor = anchors.filter('.on');
    // 버튼(a)을 누르기 전의 내용 담기
    lastpanel = $(lastAnchor.attr('href'));

    // 모든 내용 숨기기
    panelDivs.hide();
    // 클래스 on에 대한 내용 보이기
    lastpanel.show();

    // 버튼(a)을 누르면
    anchors.click(function(e){
        // a의 기능 방지
        e.preventDefault();
        // 현재 누른 버튼(a)
        let currentAnchor = $(this);
        // 현재 누른 버튼(a)에 대한 내용 담기
        let currentPanel = $(currentAnchor.attr('href'));

        // 이전의 a태그 클래스 on 지우기
        lastAnchor.removeClass('on');
        // 현재 누른 버튼(a)의 a태그에 클래스 on 추가
        currentAnchor.addClass('on');

        // 이전의 내용 숨기기
        lastpanel.hide();
        // 현재 누른 버튼(a)에 대한 내용 보이기
        currentPanel.show();

        // 클래스 on을 지우고, 내용을 숨기기 위해
        // 현재 누른 버튼(a)를 이전의 누른 버튼으로 취급 => lastAnchor.removeClass('on');
        lastAnchor = currentAnchor;
        // 현재 누른 버튼(a)에 대한 내용을 이전의 내용으로 취급 =>  lastpanel.hide();
        lastpanel = currentPanel;
    })
})