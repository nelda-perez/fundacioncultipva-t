export const existLinks = (position, links) => {
  const linksFiltered = links.filter((item) => item.position === position);
  return { length: linksFiltered.length, linksFilt: linksFiltered };
};
