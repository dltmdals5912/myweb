document.addEventListener('DOMContentLoaded', () => {
    const runBtn = document.getElementById('runBtn');
    const itemsInput = document.getElementById('items');
    const resultDiv = document.getElementById('result');
  
    runBtn.addEventListener('click', () => {
      const list = itemsInput.value
        .split(',')
        .map(s => s.trim())
        .filter(s => s);
  
      if (list.length < 2) {
        alert('항목을 최소 2개 이상 쉼표로 구분하여 입력하세요.');
        return;
      }
  
      // 1) 랜덤 순서 섞기
      const shuffled = [...list].sort(() => Math.random() - 0.5);
      // 2) 반반 나누기
      const half = Math.round(shuffled.length / 2);
      const groupA = shuffled.slice(0, half);
      const groupB = shuffled.slice(half);
  
      // 3) 결과 렌더링
      resultDiv.innerHTML = `
        <div class="group">
          <h2>그룹 A (${groupA.length}명)</h2>
          <ul>${groupA.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
        <div class="group">
          <h2>그룹 B (${groupB.length}명)</h2>
          <ul>${groupB.map(item => `<li>${item}</li>`).join('')}</ul>
        </div>
      `;
    });
  });
  