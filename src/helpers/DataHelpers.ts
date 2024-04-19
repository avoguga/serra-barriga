export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return 'Data inválida';
  }

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Janeiro é 0
  const hours = date.getHours().toString().padStart(2, '0');

  return `${day}/${month} às ${hours}h`;
}
