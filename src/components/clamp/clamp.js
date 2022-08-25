import React, { Fragment, useEffect, useState } from 'react';

import TruncatedElement from './truncatedElement';

const isCssEllipsisApplied = (elem) => elem.scrollHeight > elem.clientHeight;

const defaultShowMoreElement = ({ toggle }) => (
  <button className='mt-1 underline' type='button' onClick={toggle}>
    More...
  </button>
);

const defaultShowLessElement = ({ toggle }) => (
  <button className='mt-1 underline' type='button' onClick={toggle}>
    Less.
  </button>
);

export const Clamp = ({
  children,
  lines = 2,
  maxLines = 8,
  withTooltip = true,
  withToggle = false,
  showMoreElement = defaultShowMoreElement,
  showLessElement = defaultShowLessElement,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onShowMore = () => {},
}) => {
  const [sLines, setLines] = useState(lines);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = (show) => {
    const newLines = show ? maxLines : lines;

    setShowMore((showMore) => !showMore);
    setIsExpanded((isExpanded) => !isExpanded);
    setLines(newLines);

    onShowMore(show);
  };

  const handleConfigElement = (elem) => {
    if (!elem) return;

    if (isCssEllipsisApplied(elem)) {
      if (withTooltip) {
        const title = elem.textContent;
        elem.setAttribute('title', title);
      }

      if (withToggle && !showMore && !isExpanded) {
        setShowMore(true);
      }
    } else {
      elem.removeAttribute('title');
      setShowMore(false);
    }
  };

  useEffect(() => {
    if (lines) {
      setLines(lines);
    }
  }, [lines]);

  return (
    <Fragment>
      <TruncatedElement lines={sLines} getRef={handleConfigElement}>
        {children}
      </TruncatedElement>

      {showMore &&
        !isExpanded &&
        showMoreElement({ toggle: () => handleToggleShowMore(true) })}

      {isExpanded &&
        showLessElement({ toggle: () => handleToggleShowMore(false) })}
    </Fragment>
  );
};
