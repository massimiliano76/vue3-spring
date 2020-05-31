export interface SpringsData {
  [key: string]: any;
}

export interface SpringsProps {
  to: SpringsData;
  from: SpringsData;
  precisionDigits: number;
  [key: string]: any;
}