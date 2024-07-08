export const changeCopyIcon = () => {
  const copyIcon = document.getElementById("copyIcon");
  const copiedText = document.getElementById("copied");

  if (copyIcon && copiedText) {
    copyIcon.classList.add("hidden");
    copiedText.classList.remove("hidden");
  }
};
