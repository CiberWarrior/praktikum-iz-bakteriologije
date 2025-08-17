// sidebar.js - Kontrola sidebar-a za zatvaranje/otvaranje poglavlja

document.addEventListener('DOMContentLoaded', () => {
  // Funkcija za inicijalizaciju sidebar-a
  function initSidebar() {
    // Pronađi sve sidebar tree elemente
    const sidebarTrees = document.querySelectorAll('.sl-sidebar-tree');
    
    sidebarTrees.forEach(tree => {
      // Sakrij sve podstavke po defaultu
      const subTrees = tree.querySelectorAll('.sl-sidebar-tree');
      subTrees.forEach(subTree => {
        subTree.style.display = 'none';
        subTree.setAttribute('data-expanded', 'false');
      });
      
      // Dodaj click event listener na toggle buttone
      const toggleButtons = tree.querySelectorAll('.sl-sidebar-tree-toggle');
      toggleButtons.forEach(button => {
        // Ukloni postojeće event listenere
        button.removeEventListener('click', handleToggleClick);
        // Dodaj novi event listener
        button.addEventListener('click', handleToggleClick);
      });
    });
  }
  
  // Funkcija za rukovanje klikom na toggle
  function handleToggleClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    const parentTree = this.closest('.sl-sidebar-tree');
    const subTree = parentTree.querySelector('.sl-sidebar-tree');
    
    if (subTree) {
      const isExpanded = subTree.getAttribute('data-expanded') === 'true';
      
      if (isExpanded) {
        // Zatvori
        subTree.style.display = 'none';
        subTree.setAttribute('data-expanded', 'false');
        this.style.transform = 'rotate(0deg)';
      } else {
        // Otvori
        subTree.style.display = 'block';
        subTree.setAttribute('data-expanded', 'true');
        this.style.transform = 'rotate(90deg)';
      }
    }
  }
  
  // Inicijaliziraj sidebar
  initSidebar();
  
  // Ponovno inicijaliziraj nakon što se DOM promijeni (za SPA navigaciju)
  const observer = new MutationObserver(() => {
    initSidebar();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});
