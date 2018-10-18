export interface TouringConfig {
  images: ImageSizes;
  change_keys: Array<string>;
}

export interface ImageSizes {
  backdrop_sizes: Array<string>;
  logo_sizes: Array<string>;
  poster_sizes: Array<string>;
  profile_sizes: Array<string>;
  still_sizes: Array<string>;
}
