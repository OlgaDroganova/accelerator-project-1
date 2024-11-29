function toggleTabs() {

  const tabParents = document.querySelectorAll('[data-tab="parent"]');

  tabParents.forEach((tabParent) => {
    const tabButtons = tabParent.querySelectorAll('[data-tab="price-period"] button');
    const tabContents = tabParent.querySelectorAll('[data-tab="content"]');

    const activateTab = (index) => {
      tabButtons.forEach((button) => button.classList.remove('active'));
      tabContents.forEach((content) => content.classList.remove('active'));

      if (tabButtons[index]) {
        tabButtons[index].classList.add('active');
      }
      if (tabContents[index]) {
        tabContents[index].classList.add('active');
      }
    };

    tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        activateTab(index);
      });
    });

    if (tabButtons.length > 0) {
      activateTab(0);
    }
  });
}

export { toggleTabs };
