import {
  RestaurantDetails,
  RestaurantImage,
} from '@/components/pages/client/dining/pickup/restaurant';

import { pickupData } from '@/constant/pages/client/pickup.data';
import { useDelivery } from '@/contexts/delivery';
const { restaurants } = pickupData;

/**
 * @description Restaurant marker component
 * @param {Object} props - React props
 * @returns {JSX.Element}
 */
export const RestaurantMarker = ({ zoomLevel, tooltip, rating, item }: any) => {
  const { hoverItem, activeItem, setActiveItem } = useDelivery();

  const onClick = () => {
    if (activeItem?.position?.title === tooltip) {
      setActiveItem(undefined);
    } else {
      setActiveItem(item);
    }
  };

  function onHoverTooltip() {
    if (zoomLevel) {
      return 'visible';
    }
    if (hoverItem === item.place_id) {
      return 'visible';
    }
    if (activeItem?.position?.title === tooltip) {
      return 'visible';
    } else {
      return 'invisible';
    }
  }

  function onHover() {
    if (hoverItem === item.place_id) {
      return 'text-white bg-black';
    }
    if (activeItem?.position?.title === tooltip) {
      return 'text-white bg-black';
    } else {
      return 'text-black';
    }
  }

  return (
    <div className='group relative flex flex-col items-center'>
      <MapMarker
        onHoverTooltip={onHoverTooltip}
        onHover={onHover}
        isActive={Boolean(activeItem?.name === tooltip)}
        tooltip={tooltip}
        rating={rating}
        onClick={onClick}
      />
    </div>
  );
};

/**
 * @description Marker restaurant item
 * @param props 1. onHoverTooltip 2. onHover 3. isActive 4. tooltip 5. rating 6. onClick
 * @returns
 */
export function MarkerRestaurantItem(props: any) {
  const { name, photos, rating } = props;
  return (
    <div className='markerResItem'>
      <div className='markerPicture'>
        <RestaurantImage
          srcSet={photos ? photos[0].getUrl() : restaurants[0].srcSet}
          src={restaurants[0].src}
        />
      </div>
      <RestaurantDetails
        title={name}
        review={rating}
        time={restaurants[0].detail.time}
        distance={restaurants[0].detail.distance}
        mapMarker
      />
    </div>
  );
}

/**
 * @description Marker component
 * @param props 1. onHoverTooltip 2. onHover 3. isActive 4. tooltip 5. rating 6. onClick
 * @returns
 */
function MapMarker({
  isActive,
  onClick,
  onHoverTooltip,
  onHover,
  tooltip,
  rating,
}: any) {
  const markerActive = () => (
    <>
      <div className='marker_active marker'>{rating}</div>
      <div className='marker_active_middle'></div>
      <div className='marker_active_bottom marker_bottom'>{tooltip}</div>
    </>
  );

  const marker = () => (
    <>
      <div
        className={`marker bg-white group-hover:bg-black group-hover:text-white ${onHover()}`}
      >
        {rating}
      </div>
      <div className={`marker_bottom group-hover:visible ${onHoverTooltip()}`}>
        {tooltip}
      </div>
    </>
  );

  return <div onClick={onClick}>{isActive ? markerActive() : marker()}</div>;
}
