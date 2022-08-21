export interface ICoords {
  lat: number;
  lng: number;
}

export interface IDriverProps {
  lat: number;
  lng: number;
  $hover?: any;
}

export interface IGoogleOnLoad {
  map: any;
  maps: any;
  driverCoords: any;
  setMap: any;
  setMaps: any;
}

export const renderDirection = {
  polylineOptions: {
    strokeColor: '#000',
    strokeOpacity: 1,
    strokeWeight: 5,
  },
};

export const defaultCenter = {
  lat: 36.58,
  lng: 125.95,
};

export const Driver: React.FC<IDriverProps> = () => (
  <div className='text-lg'>🚖</div>
);

export const makeRoute = ({ map, driverCoords }: any) => {
  if (map) {
    const directionsService = new google.maps.DirectionsService();
    const pathRenderer = new google.maps.DirectionsRenderer(renderDirection);
    pathRenderer.setMap(map);
    directionSetup(directionsService, driverCoords, pathRenderer);
  }
};

export const onLoad = ({
  map,
  maps,
  driverCoords,
  setMap,
  setMaps,
}: IGoogleOnLoad) => {
  map.panTo(new google.maps.LatLng(driverCoords.lat, driverCoords.lng));
  setMap(map);
  setMaps(maps);
};

export function directionSetup(
  directionsService: any,
  driverCoords: any,
  pathRenderer: any
) {
  return directionsService.route(
    {
      origin: {
        location: new google.maps.LatLng(driverCoords.lat, driverCoords.lng),
      },
      destination: {
        location: new google.maps.LatLng(
          driverCoords.lat + 0.05,
          driverCoords.lng + 0.05
        ),
      },
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (result: any) => {
      pathRenderer.setDirections(result);
    }
  );
}
