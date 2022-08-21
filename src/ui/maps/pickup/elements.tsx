import { useState } from 'react';

import { SvgMapMinus, SvgMapPlus } from '@/ui/icons';

export function MapButtonSize({ svg, extraClass }: any) {
  return (
    <div className={`map_btn map_btn_shadow_size ${extraClass}`}>{svg}</div>
  );
}

export function MapButtonSizePlus() {
  return (
    <div className='map_btn map_btn_shadow_size loading_map_btn_plus'>
      <SvgMapPlus />
    </div>
  );
}

export function MapButtonSizeMinus() {
  return (
    <div className='map_btn map_btn_shadow_size loading_map_btn_minus'>
      <SvgMapMinus />
    </div>
  );
}

export function MapButton({ text, svg }: any) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`map_btn map_btn_shadow map_btn_arrow ${
        text ? 'loading_map_btn_text' : ''
      }`}
    >
      {svg}
      {hover && text && (
        <>
          <div className='spacer _4'></div> {text}
        </>
      )}
    </button>
  );
}
