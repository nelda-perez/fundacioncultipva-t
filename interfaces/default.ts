export interface InterInputForm {
  name: string;
  title: string;
  type?: string;
  msgError: string;
  validator: any;
  isRequired?: Boolean;
}

export interface InfoCards {
  key: number;
  title: string;
  description: string;
  path: string;
}

export interface ActionsData {
  key: number;
  title: string;
  description: string;
  boldDesc?: string;
  wayHelps: string[];
  path: string;
}

export interface ParticipationInfo {
  key: number;
  title: string;
  metafora?: string;
  description?: string;
  contributions: string[];
  links?: LinkParticipate[];
}

export interface LinkParticipate {
  position: number;
  label: string;
  routerLink: string;
}

export interface FilesPDF {
  key: number;
  name: string;
  file: string;
}
