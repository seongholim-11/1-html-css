jQuery(function(){
	var queryString = '';
	var queryParams = '';
	var searchText = '';
	
	//1.클라이언트가 정보를 검색 요청[Request(리쿼스트)]하면 
	//2.인트로의 index.html에서 검색 폼전송된 퀴리 스트링을 받는다.	
	//3.요청된 내용을 확인하고, 거기 맞는 요청된 내용을 처리한다.
	//4.서버가 응답[Response(리스판스)] - 결과 

	//2.퀴리 스트링
	queryString = location.search; //쿼리스트링 받는다
	
	//3.새 객체(Object)처리 URLSearchParams(queryString);
	queryParams = new URLSearchParams(queryString);
	
	//4.객체처리된변수에서 요소 별로 정보를 가져온다. 검색 문자열을 가져온다
	//문자열 모두를 소문자로 변환
	//첫글자만 대문자로 변환
	//검색실행
	//show()
	//<input type='text' name='searchText' id='searchText' value=''>
	   searchText  = queryParams.get('searchText').charAt(0).toUpperCase(); //첫글자만 대문자1자 추출
	   searchText += queryParams.get('searchText').toLowerCase().slice(1);  //두번째부터 나머지 모두 추출

	
	//5.정보검색 검색문자열이 포함된 요소만 출력
		$('.section1-container>ul>li').hide();	
		$('.section1-container>ul>li:contains("' + searchText + '")').show();	
	
	
});
//searchForm.js