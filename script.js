const selects = document.querySelectorAll("select");

selects.forEach((select) => {
  select.addEventListener("change", () => {
    select.style.borderColor = "#d8ac2f";
    setTimeout(() => {
      select.style.borderColor = "#c6dfbe";
    }, 350);
  });
});

const accessoriesSelect = document.getElementById("roof-acc");
const accessoriesDetails = document.getElementById("acc-details");
const accessoriesWhatsAppLink = document.getElementById("acc-whatsapp-link");

function updateAccessoriesMessage() {
  if (!accessoriesSelect || !accessoriesWhatsAppLink) {
    return;
  }

  const selectedAccessory = accessoriesSelect.value;
  const extraDetails = accessoriesDetails ? accessoriesDetails.value.trim() : "";
  const messageLines = [
    "Hello Horizon Mabati,",
    "I would like to order/access this roofing accessory:",
    `- Item: ${selectedAccessory}`
  ];

  if (extraDetails) {
    messageLines.push(`- Details: ${extraDetails}`);
  }

  messageLines.push("Please assist me with pricing and delivery.");

  const encodedMessage = encodeURIComponent(messageLines.join("\n"));
  accessoriesWhatsAppLink.href = `https://wa.me/254797407195?text=${encodedMessage}`;
}

if (accessoriesSelect) {
  accessoriesSelect.addEventListener("change", updateAccessoriesMessage);
}

if (accessoriesDetails) {
  accessoriesDetails.addEventListener("input", updateAccessoriesMessage);
}

updateAccessoriesMessage();
