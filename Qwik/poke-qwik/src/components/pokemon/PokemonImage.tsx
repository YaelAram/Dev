import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Loader } from "../shared/loader/loader";

interface Props {
  id: number;
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

    return (
      <div
        class="flex items-center justify-center"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        {imageLoaded.value ? undefined : <Loader />}
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            backImage ? "back/" : ""
          }${id}.png`}
          alt="Pokemon Sprite"
          width={size}
          height={size}
          onLoad$={() => (imageLoaded.value = true)}
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
