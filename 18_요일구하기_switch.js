// 날짜와 관련된 날짜 객체 사용하기
// 시스템에서 제공해주는 날짜관련 객체
// 복합데이터 타입
var date = new Date();
console.log(date);
// 년도,월,일,요일,시간,분,초
// 년도
var year = date.getFullYear();
console.log(year);
// 월
// 0 = 1월, 1 = 2월 0부터 출력이 된다.
var month = date.getMonth();
console.log(month);
// 일
var theDate = date.getDate();
console.log(theDate);
// 요일
var day = date.getDay();
console.log(day);

switch (day) {
    case(1) :console.log("월요일");
    break;
    case(2) :console.log("화요일");
    break;
    case(3) :console.log("수요일");
    break;
    case(4) :console.log("목요일");
    break;
    case(5) :console.log("금요일");
    break;
    case(6) :console.log("토요일");
    break;
    case(0) :console.log("일요일");
    break;
    default :console.log("오류");
}