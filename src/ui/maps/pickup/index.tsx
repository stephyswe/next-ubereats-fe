/* eslint-disable @typescript-eslint/ban-ts-comment */
import GoogleMapReact from 'google-map-react';
import { useRef, useState } from 'react';

import { useOnClickOutside } from '@/hooks/useOutsideDiv';

import { Link } from '@/components';

import { GOOGLE_API } from '@/constant/env';
import { useDelivery } from '@/contexts/delivery';

import { MarkerRestaurantItem, RestaurantMarker } from './Marker';

let googleMap: google.maps.Map;
let service: google.maps.places.PlacesService;
const cityPosition = { lat: 57.70887, lng: 11.96866 };

export function PickupMap({ setResItems, resItems }: any) {
  const { activeItem, setActiveItem, setComplete } = useDelivery();
  const [zoomLevel, setZoomLevel] = useState<number>(0);

  async function callback(results: any, status: any, pagination: any) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      setResItems((prevState: any) => [...prevState, ...results]);
    }
    if (pagination && pagination.hasNextPage) {
      // Note: nextPage will call the same handler function as the initial call
      //pagination.nextPage()
      setTimeout(() => {
        setComplete(true);
      }, 1000);
    } else {
      setComplete(true);
    }
  }

  function onClickStart() {
    const city = new google.maps.LatLng(cityPosition.lat, cityPosition.lng);

    googleMap = new google.maps.Map(
      document.getElementById('extraMap') as HTMLElement,
      {
        center: city,
        zoom: 16,
      }
    );

    service = new google.maps.places.PlacesService(googleMap);
    service.textSearch(
      {
        location: city,
        radius: 400,
        type: 'restaurant',
      },
      callback
    );
  }

  function createMapOptions(maps: any) {
    return {
      gestureHandling: 'greedy',
      zoomControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
        style: maps.ZoomControlStyle.SMALL,
      },
      mapTypeControlOptions: {
        position: maps.ControlPosition.TOP_RIGHT,
      },
      mapTypeControl: false,
      mapId: '7a05b529c8f1a87b',
    };
  }

  const handleZoom = (zoom: number) => {
    setZoomLevel(zoom);
    return zoom;
  };

  const ref = useRef(null);
  const onClickOutside = () => {
    setActiveItem(undefined);
  };
  useOnClickOutside(ref, onClickOutside);

  const googleMapE = () => (
    <GoogleMapReact
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={() => onClickStart()}
      defaultZoom={16}
      draggable={true}
      defaultCenter={cityPosition}
      bootstrapURLKeys={{ key: GOOGLE_API, libraries: 'places' }}
      options={createMapOptions}
      onZoomAnimationEnd={handleZoom}
    >
      {resItems.map((item: any, index: any) => {
        const { geometry, place_id, rating, name } = item;

        return (
          <RestaurantMarker
            // @ts-ignore
            lat={geometry.location.lat()}
            lng={geometry.location.lng()}
            key={index}
            text={place_id}
            tooltip={name}
            rating={rating.toFixed(1)}
            item={item}
            zoomLevel={Boolean(zoomLevel > 16)}
          />
        );
      })}
      {activeItem && (
        <Link
          href='/'
          ref={ref}
          // @ts-ignore
          lat={activeItem.geometry.location.lat()}
          lng={activeItem.geometry.location.lng()}
        >
          <MarkerRestaurantItem {...activeItem} />
        </Link>
      )}
    </GoogleMapReact>
  );

  return (
    <>
      <div id='extraMap'>{googleMapE()}</div>
      <div style={{ height: '100%', width: '100%' }} id='someMap'>
        {googleMapE()}
      </div>
    </>
  );
}
