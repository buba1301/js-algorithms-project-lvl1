const buildSearchEngine = (docs) => ({
  search: (value) => {
    const regExp = new RegExp(`\\s${value}\\s`, 'g');
    return docs.filter(({ text }) => text.match(regExp)).map(({ id }) => id);
  },
});

export default buildSearchEngine;
