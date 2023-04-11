export function normalizeVarName(name: string) {
  return name.replace(/[A-Z]/, (letter: string) => {
    return "-" + letter.toLowerCase();
  });
}
