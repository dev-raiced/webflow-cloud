declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export = classes; // enables `import * as styles from '...module.css'`
}
