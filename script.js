document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');
  
  if (toggleBtn && sidebar) {
    const tooltipSpan = toggleBtn.querySelector('span');
    if (tooltipSpan) tooltipSpan.textContent = '사이드바 닫기';

    // 사이드바 토글 제어
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('md:w-0');
      sidebar.classList.toggle('md:p-0');
      sidebar.classList.toggle('opacity-0');
      sidebar.classList.toggle('pointer-events-none');

      const isCollapsed = sidebar.classList.contains('md:w-0');
      if (isCollapsed) {
        toggleBtn.setAttribute('data-tooltip', '사이드바 열기');
        if (tooltipSpan) tooltipSpan.textContent = '사이드바 열기';
        toggleBtn.setAttribute('aria-label', '사이드바 열기');
      } else {
        toggleBtn.setAttribute('data-tooltip', '사이드바 닫기');
        if (tooltipSpan) tooltipSpan.textContent = '사이드바 닫기';
        toggleBtn.setAttribute('aria-label', '사이드바 닫기');
      }
    });
  }

  // URL 기반 사이드바 메뉴 자동 Active 설정
  const menuLinks = document.querySelectorAll('#sidebar-menu a');
  let currentPath = window.location.pathname.split('/').pop();
  
  if (!currentPath || currentPath === '' || currentPath.indexOf('.') === -1) {
    currentPath = 'index.html';
  }

  menuLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath) {
      link.className = "block px-6 py-2 rounded bg-brand-primary text-white font-bold shadow-sm transition-colors";
    }
  });
});