let obj = {};
obj["주문번호"] = 20230328;
obj["주문자 아이디"] = "efubFront";
obj["주문자 이름"] = "김이화";
obj["배송 주소"] = "서울특별시 서대문구 이화여대길 52";

for (let key in obj) {
  console.log(key, obj[key]);
}

// 결과
// 주문번호 20230328
// 주문자 아이디 efubFront
// 주문자 이름 김이화
// 배송 주소 서울특별시 서대문구 이화여대길 52
