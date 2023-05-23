import {BaseConfig, Config} from "@/Config";

export function trimConfig(config: Config) : BaseConfig {
  return {
    number: config.number,
    string: config.string
  }
}