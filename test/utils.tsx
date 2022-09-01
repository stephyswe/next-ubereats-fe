import { render } from 'test-utils';

export const resizeWindow = (x?: any, y?: any) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

export const renderMobile = (component: any) => {
  resizeWindow(375, 667);
  return render(component);
};
