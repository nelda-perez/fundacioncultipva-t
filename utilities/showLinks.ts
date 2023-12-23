export const existLinks = (position: number | string, links: any[]) => {
  const linksFiltered = links.filter(item => item.position === position);
  return { length: linksFiltered.length, linksFilt: linksFiltered };
};
