import styles from './ui-components.module.css';
import { MyClass } from '@storybook-vite-import-bug/core';

/* eslint-disable-next-line */
export interface UiComponentsProps {}

export function UiComponents(props: UiComponentsProps) {
  const obj = new MyClass();
  return (
    <div className={styles['container']}>
      <h1>Welcome to UiComponents!</h1>
      <p>{obj.name}</p>
    </div>
  );
}

export default UiComponents;
