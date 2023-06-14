export type ImplementationStatus = 'implemented' | 'not-implemented';
export interface Control {
  name: string;
  description: string;
  status: ImplementationStatus;
  origin: string;
}
