import { fileURLToPath } from "url";
import path from "path";

export const dirname = () => {
  const __filename = fileURLToPath(import.meta.url);
  return path.dirname(__filename);
};

export default {
  context: dirname(),
};
