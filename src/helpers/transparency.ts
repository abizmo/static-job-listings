export function transparency(color: string, alpha: number): string {
  return color.replace(')', `, ${alpha})`);
}
