function toggleFaq(button) {
  const faqDesc = button.nextElementSibling;
  faqDesc.classList.toggle("faq_desc_hidden");
  const icon = button.querySelector(".faq_icon");
  icon.classList.toggle("rotate");
}
