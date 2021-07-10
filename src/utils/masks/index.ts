import { generateMaskRgxCep } from "./generateMaskRgxCep";
import { generateMaskRgxCpf } from "./generateMaskRgxCpf";
import { generateMaskRgxCnpj } from "./generateMaskRgxCnpj";
import { generateMaskRgxPhone } from "./generateMaskRgxPhone";

const masks = { 
  cpf: generateMaskRgxCpf,
  cnpj: generateMaskRgxCnpj,
  cep: generateMaskRgxCep,
  phone: generateMaskRgxPhone,
}

export default masks; 