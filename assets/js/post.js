(function () {
  var prose = document.querySelector('.post-body .prose');
  if (!prose) return;

  // 오른쪽 여백에 AI 작성 구간 표시. 넓은 화면에서만 CSS가 보여 준다
  var aiBlocks = prose.querySelectorAll('.ai-written');
  aiBlocks.forEach(function (block) {
    var rail = document.createElement('div');
    rail.className = 'ai-rail';
    rail.setAttribute('aria-hidden', 'true');
    rail.innerHTML = '<span class="ai-rail-label">AI 작성</span>';
    block.appendChild(rail);
  });
  if (aiBlocks.length) document.documentElement.classList.add('has-ai-rail');

  // 왼쪽 목차. 맨 앞의 h1은 논문 제목이라 뺀다
  var toc = document.querySelector('.post-body .toc');
  var headings = Array.prototype.filter.call(
    prose.querySelectorAll('h1[id], h2[id], h3[id]'),
    function (h, i) { return !(i === 0 && h.tagName === 'H1' && h === prose.firstElementChild); }
  );
  if (!toc || headings.length < 2) return;

  var list = document.createElement('ol');
  var links = headings.map(function (h) {
    var li = document.createElement('li');
    li.className = 'toc-' + (h.tagName === 'H3' ? 'sub' : 'top');
    if (h.closest('.ai-written')) li.classList.add('toc-ai');
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    list.appendChild(li);
    return a;
  });
  var postTitle = document.querySelector('.post-header h1');
  if (postTitle) {
    var name = document.createElement('p');
    name.className = 'toc-post';
    name.textContent = postTitle.textContent;
    toc.appendChild(name);
  }
  var label = document.createElement('p');
  label.className = 'toc-label';
  label.textContent = '목차';
  toc.appendChild(label);
  toc.appendChild(list);

  // 본문을 얼마나 읽었는지
  var progress = document.createElement('div');
  progress.className = 'toc-progress';
  progress.innerHTML = '<span class="toc-progress-bar"><span></span></span><span class="toc-progress-num">0%</span>';
  toc.appendChild(progress);
  var bar = progress.querySelector('.toc-progress-bar > span');
  var num = progress.querySelector('.toc-progress-num');
  toc.hidden = false;

  // 화면 위쪽 기준선을 지난 마지막 제목을 지금 읽는 챕터로 본다
  var current = -1;
  function update() {
    var box = prose.getBoundingClientRect();
    var span = box.height - window.innerHeight;
    var ratio = span > 0 ? Math.min(Math.max(-box.top / span, 0), 1) : 1;
    var percent = Math.round(ratio * 100) + '%';
    bar.style.width = percent;
    num.textContent = percent;

    var line = window.innerHeight * 0.3;
    var index = -1;
    for (var i = 0; i < headings.length; i++) {
      if (headings[i].getBoundingClientRect().top <= line) index = i;
      else break;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      index = headings.length - 1;
    }
    if (index === current) return;
    if (current >= 0) links[current].removeAttribute('aria-current');
    if (index >= 0) links[index].setAttribute('aria-current', 'true');
    current = index;
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; update(); });
  }, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
