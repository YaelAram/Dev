import { Slot, component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import Navbar from "~/components/shared/navbar/navbar";

export const useCheckAuthCookie = routeLoader$((requestEvent) => {
  const jwt = requestEvent.cookie.get("jwt");
  console.log(requestEvent.headers);

  if (jwt) {
    console.log(jwt);
    return;
  } else throw requestEvent.redirect(302, "/login");
});

export default component$(() => {
  useCheckAuthCookie();

  return (
    <>
      <Navbar />
      <div class="flex flex-col justify-center items-center mt-2">
        <span class="text-5xl">Dashboard Layout</span>
        <Slot />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Dashboard",
  meta: [
    {
      name: "description",
      content: "Qwik counter with custom hook",
    },
  ],
};
