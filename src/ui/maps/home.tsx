import styled from '@emotion/styled';
import GoogleMapReact from 'google-map-react';

import { GOOGLE_API } from '@/lib/env';

import { SvgHomeMarker } from '@/ui/icons';

const HomeMarker = ({ city, link }: any) => {
  const HomeIcon = styled.a`
    &:hover:after {
      content: '${city}';
      z-index: -1;
      border-radius: 36px;
      background-color: rgb(255, 255, 255);
      padding: 0px 16px 0px 36px;
      left: 0px;
      top: 0px;
      position: absolute;
      width: max-content;
      line-height: 30px;
      font-weight: 500;
      font-size: 14px;
      font-family: UberMoveText, sans-serif;
    }
  `;
  return (
    <HomeIcon
      className={`box-border block h-[30px] w-[30px] rounded-[50%]
       transition-all-300 transform-3d box-shadow-map-12 hover:transform-hover-map-home`}
      href={link}
    >
      <div className='flex h-full w-full items-center justify-center rounded-[50%] bg-white'>
        <div className='h-4 w-4 leading-[1]'>
          <SvgHomeMarker />
        </div>
      </div>
    </HomeIcon>
  );
};

export const HomeMap = ({ mapCenter, data }: any) => (
  <div data-testid='ui-map-home' className='h-[360px] w-full' id='homeMap'>
    <GoogleMapReact
      defaultZoom={6}
      draggable={false}
      defaultCenter={mapCenter}
      bootstrapURLKeys={{ key: GOOGLE_API, libraries: 'places' }}
      // eslint-disable-next-line no-unused-labels
      options={{ mapId: '7a05b529c8f1a87b' }}
    >
      {data.map((item: any, index: any) => {
        return (
          <HomeMarker
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            lat={item.position.lat}
            lng={item.position.lng}
            key={index}
            {...item}
          />
        );
      })}
    </GoogleMapReact>
  </div>
);
