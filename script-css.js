document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('sidebar-toggle');
  const sidebar = document.getElementById('sidebar');

  // 1. 사이드바 열기/닫기 토글 및 툴팁/접근성 속성 동적 변경
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      const isCollapsed = sidebar.classList.toggle('collapsed');

      if (isCollapsed) {
        toggleBtn.setAttribute('data-tooltip', '사이드바 열기');
        toggleBtn.setAttribute('aria-label', '사이드바 열기');
      } else {
        toggleBtn.setAttribute('data-tooltip', '사이드바 닫기');
        toggleBtn.setAttribute('aria-label', '사이드바 닫기');
      }
    });
  }

  // 2. 다중 페이지 환경에서 현재 URL에 맞는 사이드바 메뉴 자동 Active 설정
  const menuLinks = document.querySelectorAll('.sidebar-menu a');
  
  // 현재 페이지의 파일명 추출 (예: '/notice.html' -> 'notice.html')
  // 루트 경로('/')로 접속한 경우 기본적으로 'index.html' 등으로 간주
  let currentPath = window.location.pathname.split('/').pop();
  if (!currentPath || currentPath === '') {
    currentPath = 'index.html';
  }

  menuLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    
    // 링크의 주소와 현재 페이지 파일명이 일치하면 active 클래스 추가
    if (linkHref === currentPath) {
      link.classList.add('active');
    }
  });
});