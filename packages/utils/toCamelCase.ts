export default function getCamelCase(name: string) {
  return name
    .replace(/^(\w)/, (_: string, i: string) => {
      return i.toUpperCase();
    })
    .replace(/-([a-z])/g, (_: string, i: string) => {
      return i.toUpperCase();
    });
}
