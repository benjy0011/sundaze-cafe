export const getCurrentDateFormatted = () => {
  const date = new Date();

  const formatted = date.toLocaleString("en-US", {
    weekday: "long",   // Sunday
    month: "long",     // December
    day: "2-digit",    // 03
    year: "numeric",   // 2023
    hour: "numeric",   // 9
    minute: "2-digit", // 00
    hour12: true       // AM/PM
  });

  const currentDateFormatted = formatted.replace(", ", " at ");

  return currentDateFormatted;
}