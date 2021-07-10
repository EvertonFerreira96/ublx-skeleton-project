export function generateMaskRgxPhone(value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, "($1) $2 $3-$4");
  return {
    value, 
    maxLenght: 16
  };
}