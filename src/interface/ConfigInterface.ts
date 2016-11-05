import { ClassesInterface } from "./ClassesInterface";

export interface ConfigInterface {
  /**
   * Radius of the main wheel
   */
  R: number;
  /**
   * List of all labels
   */
  labels: Array<string>;

  /**
   * Id DOM element
   */
  element: string;

  showLines: boolean;

  showBorder: boolean;

  classes: ClassesInterface;

  headerBottom: string;

  headerTop: string;

  showHeader: boolean;

  maxElements: number;
}