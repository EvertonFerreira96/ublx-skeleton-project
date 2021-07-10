export function generateMaskRgxCnpj(value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  return {
    value, 
    maxLenght: 18
  };
}