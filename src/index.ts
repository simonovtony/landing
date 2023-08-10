
window.addEventListener('load', (event: Event) => {
  const menuOpen = document.querySelector<HTMLDivElement>('#menu-button-open')!;
  const menuClose = document.querySelector<HTMLDivElement>('#menu-button-close')!;
  const menu = document.querySelector<HTMLDivElement>('.navigation__menu')!;
  
  menuOpen.addEventListener('click', (_event: MouseEvent) => {
    menuOpen.style.display = 'none';
    menuClose.style.display = 'flex';
    menu.style.display = 'flex';
  }); 

  menuClose.addEventListener('click', (_event: MouseEvent) => {
    menuOpen.style.display = 'flex';
    menuClose.style.display = 'none';
    menu.style.display = 'none';
  });
}); 