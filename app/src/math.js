export let sum = (sections, objProperty) => {
  let sum = 0;
  sections.forEach((section) => {
    sum = sum + parseInt(section[objProperty]);
  });
  return sum;
};

export function uid() {
  return (performance.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ""
  );
}
