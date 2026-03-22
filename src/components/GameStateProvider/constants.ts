import data from "../../data.json";

export interface Category {
  name: string;
  difficulty: number;
  idx: number;
}

export const CATEGORY_SIZE = data.categories.length;

export const CATEGORIES = data.categories.map((cat) => {
  return {
    name: cat.name,
    difficulty: cat.difficulty,
    idx: cat.idx,
  };
});

export type Board = Book[];

export interface Book {
  url: string;
  title: string;
  subtitle?: string;
  author: string;
  hm: boolean;
  squareName: string;
  category: Category;
  eliminated: boolean;
  image?: string;
}

export const initialBoard: Board = data.books.map((book) => {
  return {
    url: book.url,
    title: book.title,
    author: book.author,
    subtitle: book.subtitle,
    hm: book.hm,
    squareName: book.squareName,
    // reliant on category order, `idx` is NOT used to generate this association!
    // do not reorder!
    category: CATEGORIES[book.category],
    eliminated: false,
    image: book.image,
  };
});

export type GuessHistory = Category[][];

export enum DisplayType {
  Text = "Text",
  Image = "Image",
  Overlay = "Overlay",
}

export const EMOJI_MAP = {
  0: "🟧",
  1: "🟨",
  2: "🟩",
  3: "🟦",
  4: "🟪",
};

export const MAX_LIVES = 6;

export type DifficultyColors = {
  [key: number]: { bg: string; text?: string };
};

export const COLORS: DifficultyColors = {
  0: { bg: "bg-orange-300 dark:bg-orange-800" },
  1: { bg: "bg-yellow-200 dark:bg-yellow-400", text: "dark:text-black" },
  2: { bg: "bg-green-300 dark:bg-green-800" },
  3: { bg: "bg-blue-300 dark:bg-blue-800" },
  4: { bg: "bg-purple-300 dark:bg-purple-800" },
};
