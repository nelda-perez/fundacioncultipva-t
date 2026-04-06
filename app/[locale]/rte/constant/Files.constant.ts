import { FilesPDF } from '@/interfaces/default';

export const FILESPDF: FilesPDF[] = [
  {
    key: 0,
    name: 'Camara de Camercio - 2024',
    file: '/assets/Camara_Comercio_Marzo_21_2024.pdf',
    order: 3
  },
  {
    key: 1,
    name: 'Estados Financieros - 2023',
    file: '/assets/Estados_financieros_2023.pdf',
    order: 2
  },
  {
    key: 2,
    name: 'RUT - 2023',
    file: '/assets/Rut_Actual_2023.pdf',
    order: 2
  },
  {
    key: 3,
    name: 'Regimen Tributario Especial - 2021',
    file: '/assets/rte.pdf',
    order: 0
  },
  {
    key: 4,
    name: 'Regimen Tributario Especial - 2022 - 2023',
    file: '/assets/rte2022.pdf',
    order: 1
  },
  {
    key: 5,
    name: 'Estados Financieros - 2024',
    file: '/assets/Estados_Financieros_Año_2024.pdf',
    order: 3
  },
  {
    key: 6,
    name: 'RUT - 2024',
    file: '/assets/RUT_ACTUALIZADO_05_11_2024.pdf',
    order: 3
  },
  {
    key: 7,
    name: 'RUT - 2025',
    file: '/assets/Rut_Actual_06_05_2025.pdf',
    order: 4
  },
  {
    key: 8,
    name: 'Camara de Camercio - 2026',
    file: '/assets/certificado_camara_comercio_31_03_2026.pdf',
    order: 8
  },
  {
    key: 9,
    name: 'Estados Financieros - 2025',
    file: '/assets/Estados_financieros_2025.pdf',
    order: 6
  },
  {
    key: 10,
    name: 'Acta Oficial Asamblea General Ordinaria - 2026',
    file: '/assets/acta_oficial_asamblea_general_ordinaria_2026.pdf',
    order: 7
  },
  {
    key: 11,
    name: 'Informe de Gestion Asambleistas - 2025',
    file: '/assets/informe_gestion_asambleistas_2025.pdf',
    order: 5
  },
  {
    key: 12,
    name: 'RUT - 2026',
    file: '/assets/rut_actualizado_20082025.pdf',
    order: 9
  }
].sort((a,b) => b.order - a.order);
