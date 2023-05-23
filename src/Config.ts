export type BaseConfig = {
  number: number,
  string: string,
}

export type Config = BaseConfig & {
  component: React.FunctionComponent
}
