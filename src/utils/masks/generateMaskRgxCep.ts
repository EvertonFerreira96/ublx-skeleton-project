export function generateMaskRgxCep(value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{5})(\d{3})/, "$1-$2");
  return {
    value, 
    maxLenght: 9
  };
}