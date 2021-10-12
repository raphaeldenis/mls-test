interface Comic {
  id: number;
  title: string;
  digitalId: number;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: number;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: any;
  resourceURI: string;
}

type Comics = Comic[];

export { Comic, Comics };
