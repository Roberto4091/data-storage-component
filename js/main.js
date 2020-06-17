(() => {
  const storageUsed = {
    folders: {
      used: 1000,
      percentageUsed: 100,
    },
    uploads: {
      used: 320,
      percentageUsed: 32,
    },
    documents: {
      used: 815,
      percentageUsed: 81.5,
    },
  };
  const $freeSpace = document.querySelector(
    '.storage-box__available-number strong',
  );
  const $btns = document.querySelectorAll('.nav__menu .btn');
  const $usedSpace = document.querySelector('.storage-box__title strong');
  const $progressBar = document.querySelector('.progress__bar-indicator');

  const setStorageInfo = values => {
    const storageCapacity = Number($progressBar.dataset.storageCapacity);
    const applyRandomNumbers = setInterval(() => {
      const randomNumber = (Math.random() * (900 - 100) + 100).toFixed(0);
      $usedSpace.innerText = `${randomNumber} GB`;
      $freeSpace.innerText = randomNumber;
    }, 10);

    setTimeout(() => {
      clearInterval(applyRandomNumbers);
      $usedSpace.innerText = `${values.used} GB`;
      $freeSpace.innerText = storageCapacity - values.used;
    }, 1200);
    $progressBar.style.width = `${values.percentageUsed}%`;
  };

  /**
   * Added listener in to all btns
   */
  $btns.forEach(btn => {
    btn.addEventListener('click', ({ target: clickedBtn }) => {
      const { storageType } = clickedBtn.dataset;

      if (!clickedBtn.classList.contains('active')) {
        setStorageInfo(storageUsed[storageType]);
      }
      $btns.forEach(btn => btn.classList.remove('active'));
      clickedBtn.classList.add('active');
    });
  });

  window.addEventListener('load', () => {
    $btns[0].classList.add('active');
    setStorageInfo(storageUsed.documents);
  });
})();
