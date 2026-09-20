import { useState } from "react";

function useNavegateBtns(items) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    setCurrentIndex((index) => (index === items.length - 1 ? 0 : index + 1));
  }

  function prev() {
    setCurrentIndex((index) => (index === 0 ? items.length - 1 : index - 1));
  }

  return {
    currentIndex,
    currentItem: items[currentIndex],
    next,
    prev,
  };
}

export default useNavegateBtns;
