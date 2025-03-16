export enum DogBreedsEnum {
  // Small Breeds
  Chihuahua = "Chihuahua",
  Pomeranian = "Pomeranian",
  Yorkshire_Terrier = "Yorkshire Terrier",
  Dachshund = "Dachshund",
  Shih_Tzu = "Shih Tzu",
  Maltese = "Maltese",
  Toy_Poodle = "Toy Poodle",

  // Medium Breeds
  Beagle = "Beagle",
  Cocker_Spaniel = "Cocker Spaniel",
  Border_Collie = "Border Collie",
  Australian_Shepherd = "Australian Shepherd",
  Bulldog = "Bulldog",
  Corgi = "Corgi",
  Shetland_Sheepdog = "Shetland Sheepdog",
  Staffordshire_Bull_Terrier = "Staffordshire Bull Terrier",

  // Large Breeds
  Labrador_Retriever = "Labrador Retriever",
  Golden_Retriever = "Golden Retriever",
  German_Shepherd = "German Shepherd",
  Rottweiler = "Rottweiler",
  Doberman_Pinscher = "Doberman Pinscher",
  Boxer = "Boxer",
  Siberian_Husky = "Siberian Husky",
  Belgian_Malinois = "Belgian Malinois",
  Akita = "Akita",
  Alaskan_Malamute = "Alaskan Malamute",

  // Giant Breeds
  Great_Dane = "Great Dane",
  Saint_Bernard = "Saint Bernard",
  Mastiff = "Mastiff",
  Irish_Wolfhound = "Irish Wolfhound",
  Leonberger = "Leonberger",
  Bernese_Mountain_Dog = "Bernese Mountain Dog",
  Tibetan_Mastiff = "Tibetan Mastiff",
  Great_Pyrenees = "Great Pyrenees",
}

export const DogBreedsBySize: Record<
  "Small" | "Medium" | "Large" | "Giant",
  DogBreedsEnum[]
> = {
  Small: [
    DogBreedsEnum.Chihuahua,
    DogBreedsEnum.Pomeranian,
    DogBreedsEnum.Yorkshire_Terrier,
    DogBreedsEnum.Dachshund,
    DogBreedsEnum.Shih_Tzu,
    DogBreedsEnum.Maltese,
    DogBreedsEnum.Toy_Poodle,
  ],
  Medium: [
    DogBreedsEnum.Beagle,
    DogBreedsEnum.Cocker_Spaniel,
    DogBreedsEnum.Border_Collie,
    DogBreedsEnum.Australian_Shepherd,
    DogBreedsEnum.Bulldog,
    DogBreedsEnum.Corgi,
    DogBreedsEnum.Shetland_Sheepdog,
    DogBreedsEnum.Staffordshire_Bull_Terrier,
  ],
  Large: [
    DogBreedsEnum.Labrador_Retriever,
    DogBreedsEnum.Golden_Retriever,
    DogBreedsEnum.German_Shepherd,
    DogBreedsEnum.Rottweiler,
    DogBreedsEnum.Doberman_Pinscher,
    DogBreedsEnum.Boxer,
    DogBreedsEnum.Siberian_Husky,
    DogBreedsEnum.Belgian_Malinois,
    DogBreedsEnum.Akita,
    DogBreedsEnum.Alaskan_Malamute,
  ],
  Giant: [
    DogBreedsEnum.Great_Dane,
    DogBreedsEnum.Saint_Bernard,
    DogBreedsEnum.Mastiff,
    DogBreedsEnum.Irish_Wolfhound,
    DogBreedsEnum.Leonberger,
    DogBreedsEnum.Bernese_Mountain_Dog,
    DogBreedsEnum.Tibetan_Mastiff,
    DogBreedsEnum.Great_Pyrenees,
  ],
};
