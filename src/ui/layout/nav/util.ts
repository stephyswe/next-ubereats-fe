export function showSidebar(styles: any, setStyles: any) {
  if (styles) document.body.classList.add('overflow-hidden');
  else document.body.classList.remove('overflow-hidden');
  setStyles(!styles);
}

export function homePosition(
  position: any,
  setChange: any,
  change: any,
  changePos: any,
  changeMob: any,
  isMobile: any
) {
  if (position && !isMobile) {
    if (position.scrollY > changePos && !change) setChange(true);
    if (position.scrollY <= changePos && change) setChange(false);
  }

  if (position && isMobile) {
    if (position.scrollY > changeMob && !change) setChange(true);
    if (position.scrollY <= changeMob && change) setChange(false);
  }
}
