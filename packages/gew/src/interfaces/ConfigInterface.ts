import { ClassesInterface } from "./ClassesInterface";

export interface ConfigInterface {

  element: string;

  maxElements: number;

  R: number;

  labels: Array<string>;

  showLines: boolean;

  showBorder: boolean;

  classes: ClassesInterface;

  headerBottom: string;

  headerTop: string;

  showHeader: boolean;

  checkedElements: Array<number>;
}