

export const trimSlash = (s: string) => s.replace(/^\/+|\/+$/g, '');

const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
  return '/' + paths;
};

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slug.toLowerCase().replace(/[^a-z0-9]+/g, '-'))
    .join('/');

export const getPermalink = (slug = '', type = 'page'): string => {
  if (
    slug.startsWith('https://') ||
    slug.startsWith('http://') ||
    slug.startsWith('://') ||
    slug.startsWith('#') ||
    slug.startsWith('javascript:')
  ) {
    return slug;
  }

  switch (type) {
    case 'home':
      return '/';
    case 'page':
    default:
      return createPath(slug);
  }
};

export const getAsset = (path: string): string => {
  if (path.startsWith('http')) return path;
  return '/' + trimSlash(path);
};
