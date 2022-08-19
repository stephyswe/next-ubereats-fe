import { Fragment } from 'react';

import styles from './styles.module.css';

import { OrderItemOptionInputType } from '@/__generated__/graphql';
import { useOrders } from '@/contexts';
import { Spacer } from '@/ui';
import { SvgDropDownRightArrow } from '@/ui/icons';

export function AccordionItem(props: any) {
  const { name, choices, index, dishId } = props;
  return (
    <div className='accordion-item'>
      <h2 className='' id='flush-headingOne'>
        <button
          className='accordion-button flex w-full items-center p-4'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target={`#flush-collapseOne${index}`}
          aria-expanded='false'
          aria-controls='flush-collapseOne'
        >
          <div className='flex flex-col text-inherit'>
            <div className='font-UberMoveText text-justify text-lg font-normal leading-6 text-black'>
              {name}
            </div>
            <div className='text-justify font-uberMoveText text-sm font-normal leading-5 text-[#545454]'>
              Obligatoriskt
            </div>
          </div>
        </button>
      </h2>
      <div
        id={`flush-collapseOne${index}`}
        className='accordion-collapse collapse show px-4 py-6'
        aria-labelledby='flush-headingOne'
      >
        {choices &&
          choices.map((choice: any, i: any) => {
            return (
              <Fragment key={i}>
                <ModalDropdownItem
                  {...choice}
                  optionName={name}
                  dishId={dishId}
                />
                <Spacer length={choices.length} index={i}>
                  <div className='mt-6'></div>
                </Spacer>
              </Fragment>
            );
          })}
      </div>
    </div>
  );
}

function ModalDropdownItem({ dishId, extra, name, optionName }: any) {
  const { setOrderItem, orderItem } = useOrders();

  const getOptionChoiceFromItem = (
    item: any,
    optionName: string,
    choiceName: string
  ) => {
    const option = item.options?.find(
      (option: any) => option.name === optionName
    );

    if (option) {
      return option.choices?.find((choice: any) => choice === choiceName);
    }
  };

  const isChoiceSelected = (optionName: string, choiceName: string) => {
    const item = orderItem;
    if (item) {
      return Boolean(getOptionChoiceFromItem(item, optionName, choiceName));
    }
    return false;
  };

  const isSelected = isChoiceSelected(optionName, name);
  const onClick = () => {
    if (isSelected) {
      // eslint-disable-next-line no-console
    } else {
      // addOptionChoiceToItem
      let rightOptions: OrderItemOptionInputType[] | undefined = [];
      if (orderItem) {
        const foundOption = orderItem.options?.find(
          (aOption: any) => aOption.name === optionName
        );
        rightOptions = orderItem?.options?.filter(
          (someOption: any) => someOption !== foundOption
        );
      }

      setOrderItem(undefined);

      setOrderItem({
        dishId,
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        options: [{ name: optionName, choice: name }, ...rightOptions!],
      });
    }
  };

  return (
    <>
      <input
        type='radio'
        className='pointer-events-none absolute opacity-0 outline-inherit'
      />
      <label
        onClick={onClick}
        className={`${styles.modal_dropdown_label} ${
          isSelected ? styles.modal_dropdown_label_selected : null
        }`}
      >
        <div className='spacer _16'></div>
        <div className={styles.modal_dropdown_label_item}>
          <div className='flex flex-1 flex-col justify-center self-start'>
            <div className='flex flex-row'>
              <div className='font-uberMoveText text-sm font-normal leading-4'>
                {name}
              </div>
              <div className='spacer _8'></div>
            </div>
          </div>

          {/* price */}
          {extra && (
            <div className='font-uberMoveText text-sm font-normal leading-5 text-[#545454]'>
              + {extra} kr
            </div>
          )}

          <div className='ml-3'>
            <div className='h-6 w-6 '>
              <SvgDropDownRightArrow />
            </div>
          </div>
        </div>
      </label>
    </>
  );
}
