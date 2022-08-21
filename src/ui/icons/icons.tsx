import styles from './styles.module.css';

export function SvgPersonWalk() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_24}
    >
      <path d='M9.818 6.545a2.273 2.273 0 100-4.545 2.273 2.273 0 000 4.545z'></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.364 22h3.182l1.909-3-1.637-2.545-3.454 5.546z'
      ></path>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.182 14.818L15.727 22h-3.273l-4.909-7.82v-3.09h-.818c-.545 0-1 .454-1 1v3.09H3v-3.09C3 10 4.727 8.363 6.727 8.363H12l4.273 4.273-1.819 1.727-3.272-3.272v3.727z'
      ></path>
      <path d='M20.727 17.546l-1.636 1.636a1.427 1.427 0 01-2 0l-2.546-2.636 1.364-1.364 1.364-1.273.909-.909 2.545 2.636c.637.455.546 1.364 0 1.91z'></path>
    </svg>
  );
}

export function SvgBag() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_24}
    >
      <path d='M17.833 7.833v-5H6.167v5H2.833v8.334c0 2.75 2.25 5 5 5h8.334c2.75 0 5-2.25 5-5V7.833h-3.334zm-9.166-2.5h6.666v2.5H8.667v-2.5z'></path>
    </svg>
  );
}

export function SvgHomeMarker() {
  return (
    <svg
      width='16px'
      height='16px'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
    >
      <path
        d='M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z'
        fill='#000000'
      ></path>
    </svg>
  );
}

export function SvgCartSearch() {
  return (
    <svg
      width='24px'
      height='24px'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
    >
      <path
        d='m20.8333 19-3.6666-3.6667c.9167-1.3333 1.4999-2.9166 1.4999-4.6666 0-4.33334-3.5833-7.9167-7.9167-7.9167-4.33331 0-7.91665 3.58336-7.91665 7.9167 0 4.3333 3.58334 7.9167 7.91665 7.9167 1.75 0 3.3334-.5834 4.6668-1.5001l3.6666 3.6667zm-15.50005-8.25c0-2.99999 2.41667-5.41666 5.41665-5.41666 3 0 5.4167 2.41667 5.4167 5.41666 0 3-2.4167 5.4167-5.4167 5.4167-2.99998 0-5.41665-2.4167-5.41665-5.4167z'
        fill='currentColor'
      ></path>
    </svg>
  );
}

export function SvgPosition() {
  return (
    <svg
      width='16px'
      height='24px'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-label='Leverera till'
      role='img'
      focusable='false'
    >
      <path
        d='M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z'
        fill='#000000'
      ></path>
    </svg>
  );
}

export function SvgCart({ size = 'normal' }: any) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 16 16'
      width={iconSize(size)}
      height={iconSize(size)}
      fill='currentColor'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.666 11.333h10.333l1.334-8h-11l-.267-2h-3.4v2h1.667l1.333 8zm1.333 3.334A1.333 1.333 0 105 12a1.333 1.333 0 000 2.667zm9.334-1.334a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z'
      ></path>
    </svg>
  );
}

export function SvgMapLeftArrow() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_16 + ' rotate-180'}
    >
      <path d='M16.9 12l-4.6 6H8.5l4.6-6-4.6-6h3.8l4.6 6z'></path>
    </svg>
  );
}

export function SvgMapMinus() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_20}
    >
      <path d='M19.333 11H4.667v2h14.666z'></path>
    </svg>
  );
}

export function SvgMapPlus() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_20}
    >
      <path d='M19.333 11H13V4.665h-2v6.333H4.667v2H11v6.334h2v-6.334h6.333z'></path>
    </svg>
  );
}

export function SvgMapArrow() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 16 16'
      className={styles.icon_16_grey}
    >
      <path d='M7 9L.333 7.333 14 2 8.666 15.667 7 9z'></path>
    </svg>
  );
}

export function SvgFooterLanguage() {
  return (
    <svg
      aria-label='Välj språk'
      role='img'
      focusable='false'
      viewBox='0 0 16 15'
      className={styles.icon_16}
    >
      <path d='M12.267 6.667H9.733l-.933 2.2c-.467-.2-1-.534-1.533-.934.866-.866 1.6-2 2-3.266h1.4v-2h-4v-2h-2v2h-4v2h1.466c.4 1.266 1.134 2.4 1.934 3.266-1.4.934-2.734 1.467-2.734 1.467v2.133L2 11.267c.133-.067 1.867-.667 3.667-2 .8.6 1.666 1.066 2.333 1.4l-1.8 4h2.2l.867-2h3.466l.867 2h2.2zm-5.2-2a6.79 6.79 0 01-1.4 2c-.534-.6-1.067-1.267-1.4-2zm3.066 6L11 8.733l.867 1.934z'></path>
    </svg>
  );
}

export function SvgLike() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_20_white}
    >
      <path d='M16 5c2.5 0 4 1.9 4 4.2 0 1.2-.6 2.3-1.3 3.1C17.5 13.5 12 18 12 18s-5.5-4.5-6.7-5.7C4.5 11.5 4 10.4 4 9.2 4 6.9 5.5 5 8 5c1.7 0 3.3 1.6 4 3 .7-1.4 2.3-3 4-3zm0-3c-1.5 0-2.9.6-4 1.4C10.9 2.5 9.5 2 8 2 4 2 1 5.1 1 9.2c0 1.9.8 3.7 2.2 5.2 1.4 1.5 8.8 7.5 8.8 7.5s7.4-6 8.8-7.5c1.4-1.5 2.2-3.3 2.2-5.2C23 5.1 20 2 16 2z'></path>
    </svg>
  );
}

export function SvgCategoryArrow({ rotate }: any) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={`${styles.icon_16} ${rotate ? ' rotate-180' : ''}`}
    >
      <path d='M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z'></path>
    </svg>
  );
}

export function SvgFilterDropdown() {
  return (
    <svg
      width='24px'
      height='24px'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
    >
      <path
        d='M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z'
        fill='#000000'
        transform='rotate(180, 12, 12)'
      ></path>
    </svg>
  );
}

export function SvgBuyBin() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 16 16'
      className={styles.icon_16}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.667.667V2H14v2H2V2h3.333V.667h5.334zM3.333 5.333h9.334v10H3.333v-10z'
      ></path>
    </svg>
  );
}

export function SvgDropDownRightArrow() {
  return (
    <svg
      width='24px'
      height='24px'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
    >
      <path
        d='M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z'
        fill='#AFAFAF'
        transform='rotate(90, 12, 12)'
      ></path>
    </svg>
  );
}

export function SvgDropdown({ rotate }: any) {
  return (
    <svg
      width='24px'
      height='24px'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
      className={rotate ? styles.icon_rotate : ''}
    >
      <path
        d='M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z'
        fill='#545454'
      ></path>
    </svg>
  );
}

export function SvgBuyPlus() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_24}
    >
      <path d='M19.333 11H13V4.665h-2v6.333H4.667v2H11v6.334h2v-6.334h6.333z'></path>
    </svg>
  );
}

export function SvgBuyMinus() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_24}
    >
      <path d='M19.333 11H4.667v2h14.666z'></path>
    </svg>
  );
}

export function SvgModalClose() {
  return (
    <svg
      width='24px'
      height='24px'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
    >
      <path
        d='m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z'
        fill='#000000'
      ></path>
    </svg>
  );
}

export function SvgFoodPlus() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 20 20'
      className={styles.icon_20_white}
    >
      <path d='M15.833 8.75H11.25V4.167h-2.5V8.75H4.167v2.5H8.75v4.583h2.5V11.25h4.583v-2.5z'></path>
    </svg>
  );
}

export function SvgSchedule() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 16 16'
      className={styles.icon_16}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.333 5.333V2.666h-2v-2h-2v2H4.667v-2h-2v2h-2v2.667h14.666zm0 10H.667V6.666h14.666v8.667zm-10-6h-2v2h2v-2z'
      ></path>
    </svg>
  );
}

export function SvgPersonAdd() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_16}
    >
      <g clipPath='url(#clip0)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M10 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm13 5h-3v-3h-3v3h-3v3h3v3h3v-3h3v-3zM1 23h12.1c-1-1.2-1.6-2.8-1.6-4.5 0-1.7.6-3.3 1.6-4.5H7c-3.3 0-6 2.7-6 6v3z'
        ></path>
      </g>
      <defs>
        <clipPath id='clip0'>
          <path d='M0 0h24v24H0z'></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export function SvgDots() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_16}
    >
      <g>
        <path d='M17 12a1.667 1.667 0 103.333 0A1.667 1.667 0 0017 12zM10.333 12a1.667 1.667 0 103.334 0 1.667 1.667 0 00-3.334 0zM5.333 13.667a1.667 1.667 0 110-3.333 1.667 1.667 0 010 3.333z'></path>
      </g>
    </svg>
  );
}

export function SvgHeart() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_16}
    >
      <path d='M16 5c2.5 0 4 1.9 4 4.2 0 1.2-.6 2.3-1.3 3.1C17.5 13.5 12 18 12 18s-5.5-4.5-6.7-5.7C4.5 11.5 4 10.4 4 9.2 4 6.9 5.5 5 8 5c1.7 0 3.3 1.6 4 3 .7-1.4 2.3-3 4-3zm0-3c-1.5 0-2.9.6-4 1.4C10.9 2.5 9.5 2 8 2 4 2 1 5.1 1 9.2c0 1.9.8 3.7 2.2 5.2 1.4 1.5 8.8 7.5 8.8 7.5s7.4-6 8.8-7.5c1.4-1.5 2.2-3.3 2.2-5.2C23 5.1 20 2 16 2z'></path>
    </svg>
  );
}

export function SvgAuthLoginArrow() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      style={{ paddingLeft: '5px', display: 'block' }}
    >
      <title>Arrow right</title>
      <path
        d='M22.2 12l-6.5 9h-3.5l5.5-7.5H2v-3h15.7L12.2 3h3.5l6.5 9z'
        fill='currentColor'
      ></path>
    </svg>
  );
}

export function SvgLogoAuth() {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='121' height='21' fill='none'>
      <path
        fill='#06C167'
        d='M63.5.3H77v3.3h-9.9v4.8h9.7v3.2H67v4.8h10v3.3H63.4V.3zM114 20c4.1 0 6.5-2 6.5-4.7 0-2-1.4-3.4-4.3-4l-3.1-.7c-1.8-.3-2.3-.6-2.3-1.3 0-.8.8-1.4 2.4-1.4 1.7 0 3 .5 3.3 2h3.6C120 7 117.8 5 113.4 5c-3.7 0-6.4 1.6-6.4 4.6 0 2 1.5 3.4 4.6 4l3.4.9c1.4.2 1.8.6 1.8 1.2 0 .9-1 1.4-2.7 1.4-2 0-3.3-.4-3.7-2h-3.7c.5 3 2.8 5 7.3 5zm-8.3-3.6H103c-.8 0-1.3-.3-1.3-1.1V8.6h4V5.4h-4v-4H98v4h-2.7v3.2H98v7.6c0 2 1.4 3.5 3.8 3.5h4v-3.3zm-12-11v14.3h-3.5v-1.3a7.5 7.5 0 110-11.7V5.4h3.6zm-3.5 7.1c0-2.4-1.9-4.3-4.3-4.3s-4.3 1.9-4.3 4.3a4.3 4.3 0 108.6 0z'
      ></path>
      <path
        fill='#FFF'
        d='M8 17.4c2.7 0 4.7-2 4.7-5.1V.3h3v19.4h-3v-1.8a7 7 0 01-5 2.1c-4.2 0-7.4-3-7.4-7.6V.4h3v11.9c0 3 2 5.1 4.7 5.1zm9.8 2.3h2.7v-1.8A7.3 7.3 0 0033 12.7c0-4.1-3.2-7.4-7.3-7.4a7 7 0 00-5 2v-7h-2.8v19.4zm7.6-2.2a4.9 4.9 0 01-4.9-4.9 4.9 4.9 0 119.7 0c0 2.8-2.2 5-4.8 5zm16-12.2a7.2 7.2 0 00-7.3 7.3c0 4.2 3.2 7.4 7.5 7.4 2.5 0 4.6-1.2 6-3l-2-1.5c-1 1.4-2.4 2-4 2a4.7 4.7 0 01-4.7-4h11.5v-.9c0-4.2-3-7.3-7-7.3zm-4.4 6a4.4 4.4 0 014.3-3.6c2 0 3.8 1.5 4.2 3.6H37zm20-3.2V5.5h-1c-1.5 0-2.6.7-3.3 1.8V5.6h-2.8v14h2.8v-8c0-2.1 1.3-3.5 3.1-3.5H57z'
      ></path>
    </svg>
  );
}

export function SvgBreadCrumb() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_breadcrumb}
    >
      <path d='M10.9 12l4.6 6h-3.8l-4.6-6 4.6-6h3.8l-4.6 6z'></path>
    </svg>
  );
}

export function SvgInputClock() {
  return (
    <svg
      width='24px'
      height='24px'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-label='När'
      role='img'
      focusable='false'
    >
      <path
        d='M12 2.83398C6.91671 2.83398 2.83337 6.91732 2.83337 12.0007C2.83337 17.084 6.91671 21.1673 12 21.1673C17.0834 21.1673 21.1667 17.084 21.1667 12.0007C21.1667 6.91732 17.0834 2.83398 12 2.83398ZM17 13.6673H10.3334V5.33398H12.8334V11.1673H17V13.6673Z'
        fill='#000000'
      ></path>
    </svg>
  );
}

export function SvgHorizontalArrow() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_16}
    >
      <path d='M22 13.5H6.3l5.5 7.5H8.3l-6.5-9 6.5-9h3.5l-5.5 7.5H22v3z'></path>
    </svg>
  );
}

export function SvgDownArrow() {
  return (
    <svg
      width='24px'
      height='24px'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
    >
      <path
        d='M17 11.7494V14.916L12 11.0827L7 14.916V11.7494L12 7.91602L17 11.7494Z'
        fill='#000000'
        transform='rotate(180, 12, 12)'
      ></path>
    </svg>
  );
}

export function SvgMap() {
  return (
    <svg
      width='24px'
      height='24px'
      fill='none'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
      focusable='false'
    >
      <path
        d='M17.5834 5.16602C14.5001 2.08268 9.50008 2.08268 6.41675 5.16602C3.33341 8.24935 3.33341 13.3327 6.41675 16.416L12.0001 21.9993L17.5834 16.3327C20.6667 13.3327 20.6667 8.24935 17.5834 5.16602ZM12.0001 12.416C11.0834 12.416 10.3334 11.666 10.3334 10.7493C10.3334 9.83268 11.0834 9.08268 12.0001 9.08268C12.9167 9.08268 13.6667 9.83268 13.6667 10.7493C13.6667 11.666 12.9167 12.416 12.0001 12.416Z'
        fill='#000000'
      ></path>
    </svg>
  );
}

export function SvgSidebar() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 20 20'
      className={styles.icon_20}
    >
      <path d='M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z'></path>
    </svg>
  );
}

export function SvgLogin({ size = 'normal' }: any) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 26 26'
      width={iconSize(size)}
      height={iconSize(size)}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z'
      ></path>
    </svg>
  );
}

export function SvgIphone() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_16}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M14.268 4.231c.649-.838 1.14-2.022.963-3.231-1.061.074-2.301.752-3.025 1.637-.66.802-1.201 1.994-.99 3.152 1.16.036 2.357-.66 3.052-1.558zM20 15.602c-.464 1.035-.688 1.497-1.285 2.413-.834 1.28-2.01 2.872-3.47 2.884-1.294.014-1.628-.849-3.385-.838-1.758.01-2.124.854-3.421.841-1.458-.013-2.572-1.45-3.406-2.729-2.334-3.574-2.58-7.769-1.14-10C4.916 6.587 6.53 5.66 8.048 5.66c1.543 0 2.515.852 3.793.852 1.24 0 1.995-.854 3.78-.854 1.352 0 2.784.74 3.803 2.018-3.34 1.842-2.8 6.642.576 7.925z'
      ></path>
    </svg>
  );
}

export function SvgAndroid() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 24 24'
      className={styles.icon_16}
    >
      <g>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.297 3.415l-.233.343c1.77.804 2.97 2.326 2.97 4.069H6.341c0-1.743 1.199-3.265 2.97-4.069l-.234-.343-.233-.338-.52-.761a.2.2 0 01.058-.282.214.214 0 01.29.057l.793 1.157.238.348a7.035 7.035 0 012.484-.444c.888 0 1.729.16 2.484.444l1.032-1.505a.21.21 0 01.288-.057.198.198 0 01.059.282l-.52.76-.234.339zm-1.23 2.176c0 .337.28.61.626.61a.618.618 0 00.627-.61.617.617 0 00-.627-.61.617.617 0 00-.627.61zm-4.385.61a.618.618 0 01-.627-.61c0-.338.28-.61.627-.61.346 0 .627.272.627.61 0 .337-.28.61-.627.61z'
        ></path>
        <path d='M6.342 8.639h11.692v8.942c0 .71-.592 1.288-1.322 1.288h-.956c.033.107.052.22.052.338v2.574c0 .673-.562 1.22-1.254 1.22s-1.253-.547-1.253-1.22v-2.574c0-.119.018-.23.05-.338h-2.327c.032.107.051.22.051.338v2.574c0 .673-.562 1.22-1.253 1.22-.692 0-1.254-.547-1.254-1.22v-2.574c0-.119.018-.23.05-.338h-.953c-.73 0-1.323-.578-1.323-1.288V8.639zm-2.089 0C3.561 8.639 3 9.185 3 9.858v5.216c0 .673.56 1.22 1.253 1.22.692 0 1.253-.547 1.253-1.22V9.858c0-.673-.561-1.219-1.253-1.219zM18.87 9.858c0-.673.56-1.219 1.253-1.219.691 0 1.252.546 1.252 1.219v5.216c0 .673-.56 1.22-1.252 1.22-.693 0-1.254-.547-1.254-1.22V9.858z'></path>
      </g>
    </svg>
  );
}

export function SvgFacebook() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 16 16'
      className={styles.icon_16}
    >
      <path d='M14.667 0H1.333C.597 0 0 .597 0 1.333v13.334C0 15.403.597 16 1.333 16h7.334v-6h-2V7.333h2V5.61c0-2.067 1.262-3.192 3.106-3.192.883 0 1.642.066 1.863.095v2.16h-1.279c-1.002 0-1.196.477-1.196 1.176v1.485h2.96L13.454 10h-2.293v6h3.506c.736 0 1.333-.597 1.333-1.333V1.333C16 .597 15.403 0 14.667 0z'></path>
    </svg>
  );
}

export function SvgTwitter() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 14 12'
      className={styles.icon_16}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13.973 1.429a5.556 5.556 0 01-1.649.476A3.02 3.02 0 0013.587.231c-.554.34-1.169.59-1.823.728A2.792 2.792 0 009.668 0c-1.585 0-2.87 1.356-2.87 3.025 0 .24.026.47.074.692-2.385-.12-4.5-1.328-5.916-3.154-.249.443-.388.96-.388 1.522 0 1.051.507 1.976 1.276 2.52a2.754 2.754 0 01-1.3-.378v.036c0 1.467.988 2.692 2.302 2.97a2.776 2.776 0 01-1.29.052c.368 1.202 1.426 2.077 2.685 2.102A5.566 5.566 0 010 10.641 7.856 7.856 0 004.407 12c5.282 0 8.168-4.611 8.168-8.604 0-.13 0-.259-.01-.388.56-.424 1.05-.959 1.435-1.567l-.027-.012z'
      ></path>
    </svg>
  );
}

export function SvgInstagram() {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 16 16'
      className={styles.icon_16}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42a3.908 3.908 0 00-1.417.923c-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372a3.908 3.908 0 001.417-.923c.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942a3.908 3.908 0 00-.923-1.417A3.886 3.886 0 0013.24.42c-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28a2.49 2.49 0 01-.92-.6c-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04L8 1.44zm0 2.452a4.108 4.108 0 100 8.215 4.108 4.108 0 000-8.215zm0 6.775a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm5.23-6.937a.96.96 0 11-1.92 0 .96.96 0 011.92 0z'
      ></path>
    </svg>
  );
}

function iconSize(size: string) {
  let setSize = '16';
  if (size === 'small') {
    setSize = '14';
  }
  return setSize;
}
