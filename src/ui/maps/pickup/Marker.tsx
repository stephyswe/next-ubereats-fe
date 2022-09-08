import { pickupItemData } from '@/pages/_app/items/store';
import { useDelivery } from '@/contexts/delivery';
import { pickupData } from '@/pages/client/dining/pickup/pickup.data';
import { StoreItemDefault } from '@/ui/store/item';
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
export const MarkerRestaurantItem = ({ name, photos, rating }: any) => (
  <div className='markerResItem'>
    <StoreItemDefault
      time={pickupItemData.time}
      distance={pickupItemData.time}
      ranking={rating}
      title={name}
      srcSet={photos ? photos[0].getUrl() : pickupItemData.srcSet}
      imageClassName='h-[180px] overflow-hidden'
      detailClassName='px-3'
    />
  </div>
);

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
