interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: any;
}

type Characters = Character[];

export { Character, Characters };
