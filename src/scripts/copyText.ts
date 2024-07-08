export function copyText(id: string) {
  const text = document.getElementById(id)?.innerText;

  navigator.clipboard.writeText(text!);
}
