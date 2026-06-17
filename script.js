const buttons = document.querySelectorAll(".gift-btn");
const result = document.getElementById("pickResult");

const messages = {
  "장난감": "귀여운 장난감이면 어떤 친구도 좋아할 거예요!",
  "그림책": "재미있는 이야기가 가득한 그림책은 선물로 최고예요!",
  "과자 세트": "달콤한 과자 세트는 생일 파티 분위기를 확 살려줘요!",
  "블록·레고": "상상력을 키워 주는 블록·레고, 만들기를 좋아하는 아이에게 딱!",
  "미술 도구": "크레용과 색연필로 멋진 작품을 그려볼 수 있어요!",
  "보드게임": "가족·친구와 함께 즐기는 보드게임은 추억 선물이에요!",
  "스포츠 용품": "공이나 배트 같은 용품은 활동적인 아이에게 좋아요!",
  "인형·피규어": "캐릭터 인형·피규어는 모으는 재미도 있어요!",
  "과학 키트": "실험하며 배우는 과학 키트, 호기심 많은 아이에게 추천!",
  "체험권": "동물원·뮤지엄 체험권은 잊지 못할 생일이 될 거예요!",
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const gift = btn.dataset.gift;

    buttons.forEach((b) => b.classList.remove("is-picked"));
    btn.classList.add("is-picked");

    result.textContent = `🎁 ${gift} 선택! ${messages[gift]}`;
    result.classList.add("has-pick");
    result.classList.remove("has-pick");
    void result.offsetWidth;
    result.classList.add("has-pick");
  });
});
