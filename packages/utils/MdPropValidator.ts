import { warn } from "vue";

export default (name: string, options: any) => {
  return {
    validator: (value: string) => {
      if (options.includes(value)) {
        return true;
      }

      warn(
        `The ${name} prop is invalid. Given value: ${value}. Available options: ${options.join(
          ", "
        )}.`,
        this
      );

      return false;
    },
  };
};
