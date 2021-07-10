export function generateMaskRgxCpf(value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  return {
    value, 
    maxLenght: 14
  };
}