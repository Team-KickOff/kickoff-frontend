import { ReactNode } from 'react';

export interface iMainLayout {
  $mobile?: string;
  header?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
}
