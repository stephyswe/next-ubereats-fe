/* eslint-disable @typescript-eslint/ban-ts-comment */
import GoogleMapReact from 'google-map-react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { GOOGLE_API } from '@/lib/env';

import { Button, Typography } from '@/components';

import {
  useCookedOrdersSubscription,
  useUpdateOrderDriverMutation,
} from '@/__generated__/graphql';
import {
  defaultCenter,
  Driver,
  ICoords,
  makeRoute,
  onLoad,
} from '@/pages/driver/utils';

export default function DriverDashboardPage() {
  const router = useRouter();
  const [driverCoords, setDriverCoords] = useState<ICoords>({ lng: 0, lat: 0 });
  const [map, setMap] = useState<google.maps.Map>();
  const [maps, setMaps] = useState<google.maps.Map>();

  const { data: cookedOrdersData } = useCookedOrdersSubscription();

  const [updateOrderDriverMutation] = useUpdateOrderDriverMutation({
    onCompleted(data) {
      if (data.updateOrderDriver.ok) {
        router.push(`/client/order/${cookedOrdersData?.cookedOrders.id}`);
      }
    },
  });

  const triggerMutation = (orderId: number) =>
    updateOrderDriverMutation({ variables: { input: { id: orderId } } });

  const onSuccess = ({ coords: { latitude, longitude } }: any) => {
    setDriverCoords({ lat: latitude, lng: longitude });
  };

  const onError = (error: any) => {
    // eslint-disable-next-line no-console
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.watchPosition(onSuccess, onError, {
      enableHighAccuracy: true,
    });
  }, []);

  useEffect(() => {
    if (map && maps)
      map.panTo(new google.maps.LatLng(driverCoords.lat, driverCoords.lng));
  }, [driverCoords.lat, driverCoords.lng, map, maps]);

  useEffect(() => {
    if (cookedOrdersData?.cookedOrders.id) {
      makeRoute({ map, driverCoords });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookedOrdersData]);

  return (
    <div>
      <div className='h-[50vh] w-full overflow-hidden'>
        <GoogleMapReact
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) =>
            onLoad({ map, maps, driverCoords, setMap, setMaps })
          }
          defaultZoom={16}
          draggable={true}
          defaultCenter={defaultCenter}
          bootstrapURLKeys={{ key: GOOGLE_API }}
        >
          <Driver
            // @ts-ignore
            lat={driverCoords.lat}
            lng={driverCoords.lng}
          />
        </GoogleMapReact>
      </div>
      <div className='relative -top-10 bg-white px-5 py-8 shadow-lg'>
        {cookedOrdersData?.cookedOrders.restaurant ? (
          <div className='text-center'>
            <Typography>New Cooked Order</Typography>
            <Typography>
              Pick it up soon @{' '}
              {cookedOrdersData?.cookedOrders.restaurant?.name}
            </Typography>
            <Button
              onClick={() => triggerMutation(cookedOrdersData?.cookedOrders.id)}
            >
              Accept Challenge &rarr;
            </Button>
          </div>
        ) : (
          <Typography>No orders yet...</Typography>
        )}
      </div>
    </div>
  );
}
