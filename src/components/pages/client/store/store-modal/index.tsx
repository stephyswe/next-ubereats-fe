import {
  AccordionNew,
  AccordionNewSingle,
} from '@/components/pages/client/store/new-accordion';

import { ModalBuy, ModalDetail, ModalImage } from './items';

export function FoodModal(props: any) {
  const { photo, name, price, id, closeModal, options } = props;
  return (
    <div className='relative w-[676px]'>
      {photo && <ModalImage photo={photo} name={name} />}
      <ModalDetail price={price} name={name} />

      {/* ul */}
      <ul>
        <li>
          <div>
            {options.map((accordionItem: any, index: any) => {
              if (accordionItem.choices) {
                return (
                  <AccordionNew
                    key={index}
                    data={accordionItem}
                    index={index}
                    dishId={id}
                  />
                );
              } else {
                return (
                  <AccordionNewSingle
                    key={index}
                    data={accordionItem}
                    index={index}
                    dishId={id}
                  />
                );
              }
            })}
          </div>
        </li>
      </ul>
      <ModalBuy closeModal={closeModal} id={id} />
    </div>
  );
}
