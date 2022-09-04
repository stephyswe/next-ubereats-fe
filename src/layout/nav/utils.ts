export function homePosition(
  position: any,
  setChange: (change: boolean) => void,
  change: boolean,
  changePos: number,
  changeMob: number,
  isMobile: boolean
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
