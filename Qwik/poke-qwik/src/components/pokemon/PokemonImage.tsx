import {
  $,
  component$,
  useComputed$,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { Loader } from "../shared/loader/loader";

interface Props {
  id: number | string;
  backImage?: boolean;
  size?: number;
  isVisible?: boolean;
}

export const PokemonImage = component$(
  ({ id, backImage = false, size = 200, isVisible = true }: Props) => {
    const imageLoaded = useSignal<boolean>(false);

    useTask$(({ track }) => {
      track(() => id);
      track(() => backImage);
      imageLoaded.value = false;
    });

    const imageUrl = useComputed$(() => {
      return backImage
        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
        : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    });

    const handleError = $(({ target }: ErrorEvent) => {
      const imgItem = target as HTMLImageElement;
      imgItem.src =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png";
    });

    return (
      <div
        class="flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {imageLoaded.value ? undefined : <Loader />}
        <img
          src={imageUrl.value}
          alt="Pokemon Sprite"
          width={size}
          height={size}
          onLoad$={() => (imageLoaded.value = true)}
          onError$={handleError}
          class={[
            "pokemon-image",
            {
              hidden: !imageLoaded.value,
              "brightness-0": !isVisible,
            },
          ]}
        />
      </div>
    );
  }
);
