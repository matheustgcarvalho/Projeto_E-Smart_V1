(function() {
    const savedState = localStorage.getItem('sidebar_state');
    if (savedState === 'collapsed') {
        document.documentElement.classList.add('sidebar-is-collapsed');
    }
})();

document.addEventListener("DOMContentLoaded", function() {
    const isCollapsed = localStorage.getItem('sidebar_state') === 'collapsed';
    
    // BUSCA O NOME SALVO NO LOGIN (Prefeito ou Contador)
    const userName = localStorage.getItem('user_name') || 'Usuário';

    const sidebarHTML = `
    <nav class="sidebar ${isCollapsed ? 'collapsed' : ''}" id="sidebar">
        <button class="toggle-btn" onclick="toggleSidebar()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div class="sidebar-header">
            <h1><span class="txt-umclick">e-<span>smart</span></span></h1>
        </div>

        <div class="welcome-badge">
            <p class="greeting-main">Olá <strong>${userName}</strong>,</p>
            <p class="greeting-sub">seja bem vindo</p>
        </div>
        
        <div class="menu-list">
            <a href="Dashboard_site.html" class="menu-item" id="menu-dashboard">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <span>Dashboard</span>
            </a>
            <a href="Cauc_site.html" class="menu-item" id="menu-cauc">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
                <span>Cauc-SNT</span>
            </a>
            <a href="E_parcerias_site.html" class="menu-item" id="menu-parcerias">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                <span>E-parcerias</span>
            </a>
            <a href="Certidoes_site.html" class="menu-item" id="menu-certidoes">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <span>Certidões</span>
            </a>
            <a href="Configuracoes_site.html" class="menu-item" id="menu-config">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                <span>Configurações</span>
            </a>
        </div>

        <div class="sidebar-bottom">
            <a href="login_site.html" class="menu-item logout-sidebar" onclick="localStorage.clear()">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                <span>Sair da conta</span>
            </a>
            <div class="sidebar-footer">V 1.0.4 - e-smart tecnologia</div>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

    const main = document.querySelector('main');
    if (main && isCollapsed) {
        main.style.transition = 'none';
        main.style.marginLeft = "75px";
        setTimeout(() => main.style.transition = '', 100);
    }

    const page = window.location.pathname.split("/").pop();
    if (page === "Dashboard_site.html") document.getElementById('menu-dashboard')?.classList.add('active');
    if (page === "Cauc_site.html") document.getElementById('menu-cauc')?.classList.add('active');
    if (page === "E_parcerias_site.html") document.getElementById('menu-parcerias')?.classList.add('active');
    if (page === "Configuracoes_site.html") document.getElementById('menu-config')?.classList.add('active');
    if (page === "Certidoes_site.html") document.getElementById('menu-certidoes')?.classList.add('active');
});

window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
        const isNowCollapsed = sidebar.classList.contains('collapsed');
        localStorage.setItem('sidebar_state', isNowCollapsed ? 'collapsed' : 'expanded');
        if (main) main.style.marginLeft = isNowCollapsed ? "75px" : "260px";
    }
}