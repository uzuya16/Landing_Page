
gsap.registerPlugin(ScrollTrigger);


// 2025 숫자
function runCounter() {
  let obj = { val: 19 };
  gsap.to(obj, {
    val: 25,
    duration: 1.5,
    ease: "power2.out",
    onUpdate: () => {
      const num = Math.floor(obj.val);
      document.getElementById("countTen").textContent = Math.floor(num / 10);
      document.getElementById("countOne").textContent = num % 10;
    }
  });
}
ScrollTrigger.create({
  trigger: ".year",
  start: "top 80%",   // year 영역이 화면 80% 지점에 들어오면 실행
  end: "bottom 20%",  // 영역이 끝날 때까지 트리거 유지
  markers: false,     // 디버깅용 (필요하면 true)
  onEnter: runCounter,     // 스크롤 ↓
  onEnterBack: runCounter, // 스크롤 ↑
});




// 막대그래프
function runGraph() {
  // 첫 번째 막대 (투자 비용)
  gsap.fromTo(".graph li:first-child .gra", 
    {height: '10%'}, 
    {height: '80%', duration: 1.5, ease: "power3.out"}
  );

  // 두 번째 막대 (학습 시간)
  gsap.fromTo(".graph li:last-child .gra", 
    {height: '10%'}, 
    {height: '40%', duration: 1.5, delay: 0.3, ease: "power3.out"}
  );
}
ScrollTrigger.create({
  trigger: ".graph_box",
  start: "top 80%",          // 뷰포트 80% 위치에서 실행
  end: "bottom 20%",         // 영역이 끝날 때까지 트리거 유지
  markers: false,            // 디버깅용
  onEnter: runGraph,         // 스크롤 ↓ 내려올 때
  onEnterBack: runGraph      // 스크롤 ↑ 올라올 때
});




// part2
function animateFeatures() {
  gsap.fromTo("#main .part2 .content li",
    {opacity: 0, y: 50, scale: 0.8},   // 시작 상태
    {
      opacity: 1, 
      y: 0, 
      scale: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2                 // 순차 효과
    }
  );
}
ScrollTrigger.create({
  trigger: ".part2 .centerbox",
  start: "top 80%",        // 뷰포트 80%에서 발동
  end: "bottom 20%",       // 영역 끝날 때까지 유지
  onEnter: animateFeatures,    
  onEnterBack: animateFeatures  // 위로 올려도 다시 실행
});
