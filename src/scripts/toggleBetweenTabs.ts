export const toggleBetweenTabs = (
  tabs: NodeListOf<Element>,
  projectContainers: NodeListOf<Element>
  // skip: number
) => {
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("bg-primary"));
      tabs.forEach((t) => t.classList.remove("bg-blue-500"));
      tabs.forEach((t) => t.classList.add("bg-primary"));

      tab.classList.add("bg-blue-500");
      tab.classList.remove("bg-primary");

      const activeTab = tab!.textContent!.trim().toLowerCase();

      projectContainers.forEach((container) => {
        if (container.id.trim().toLowerCase() === activeTab) {
          container.classList.remove("hidden");
          container.classList.add("block");
        } else {
          // skip = skip;
          container.classList.add("hidden");
        }
      });
    });
  });
};
