// sidebar.js
document.addEventListener("DOMContentLoaded", function() {
    // 1. Verificar se existe um estado salvo da barra (collapsed ou expanded)
    const isCollapsed = localStorage.getItem('sidebar_state') === 'collapsed';

    const sidebarHTML = `
    <nav class="sidebar ${isCollapsed ? 'collapsed' : ''}" id="sidebar">
        <button class="toggle-btn" onclick="toggleSidebar()">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
        </button>

        <div class="sidebar-header">
            <h1>
                <span class="txt-umclick">um<span>click</span></span>
                <span class="txt-tecnologia">tecnologia</span>
            </h1>
        </div>
        
        <div class="menu-list">
            <a href="Sistema_site.html" class="menu-item" id="menu-dashboard">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                <span>Dashboard</span>
            </a>
            <a href="#" class="menu-item" id="menu-usuarios">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Usuários</span>
            </a>
            <a href="favoritos_modulos.html" class="menu-item" id="menu-favoritos">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                <span>Favoritos</span>
            </a>
            <a href="#" class="menu-item" id="menu-config">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <span>Configurações</span>
            </a>
        </div>

        <div class="sidebar-bottom">
            <a href="login_site.html" class="menu-item logout-sidebar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                <span>Encerrar Sessão</span>
            </a>
            <div class="sidebar-footer">V 1.0.4 - umclick tecnologia</div>
        </div>
    </nav>
    `;

    document.body.insertAdjacentHTML('afterbegin', sidebarHTML);

    // Aplicar ajuste de margem no carregamento baseado no estado salvo
    const main = document.querySelector('main');
    if (main && isCollapsed) {
        main.style.marginLeft = "75px";
    } else if (main) {
        main.style.marginLeft = "260px";
    }

    // Lógica de ativação do menu atual
    const path = window.location.pathname;
    const page = path.split("/").pop();
    
    if (page === "Sistema_site.html") document.getElementById('menu-dashboard').classList.add('active');
    if (page === "favoritos_modulos.html") document.getElementById('menu-favoritos').classList.add('active');

    // Sincronizar estrelas se estiver no Dashboard
    if (page === "Sistema_site.html") {
        updateStarsFromStorage();
    }
});

// Função global para o botão retrátil COM MEMÓRIA
window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    
    if (sidebar) {
        sidebar.classList.toggle('collapsed');
        
        const isNowCollapsed = sidebar.classList.contains('collapsed');
        
        // SALVAR O ESTADO NO LOCALSTORAGE
        localStorage.setItem('sidebar_state', isNowCollapsed ? 'collapsed' : 'expanded');
        
        if (main) {
            main.style.marginLeft = isNowCollapsed ? "75px" : "260px";
        }
    }
}

// Lógica de Favoritos (Mantida como já estava)
window.toggleFavorite = function(element, event) {
    event.stopPropagation();
    element.classList.toggle('active');
    const card = element.closest('.card');
    const moduleName = card.getAttribute('data-name');
    let favorites = JSON.parse(localStorage.getItem('umclick_favorites')) || [];

    if (element.classList.contains('active')) {
        const moduleData = {
            id: moduleName.replace(/\s+/g, ''),
            name: moduleName,
            title: card.querySelector('.card-title').innerText,
            desc: card.querySelector('.card-desc').innerText,
            iconHTML: card.querySelector('.card-icon').innerHTML,
            className: card.classList[1]
        };
        favorites.push(moduleData);
    } else {
        favorites = favorites.filter(fav => fav.name !== moduleName);
    }
    localStorage.setItem('umclick_favorites', JSON.stringify(favorites));
}

function updateStarsFromStorage() {
    const favorites = JSON.parse(localStorage.getItem('umclick_favorites')) || [];
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const moduleName = card.getAttribute('data-name');
        if (favorites.some(fav => fav.name === moduleName)) {
            card.querySelector('.btn-favorite').classList.add('active');
        }
    });
}