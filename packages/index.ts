import * as Components from "./components";
import { makeInstaller } from "./utils/install";

export * from "./components";
export default makeInstaller(Object.values(Components));
