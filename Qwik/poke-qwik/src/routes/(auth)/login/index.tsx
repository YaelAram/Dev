import { component$, useStylesScoped$ } from "@builder.io/qwik";
import {
  Form,
  type DocumentHead,
  routeAction$,
  zod$,
  z,
} from "@builder.io/qwik-city";

import styles from "./login.css?inline";

export const useLoginAction = routeAction$(
  (data, { redirect, cookie }) => {
    const { email, password } = data;

    if (email === "yael@gmail.com" && password === "123456789") {
      cookie.set("jwt", "ASD");
      throw redirect(302, "/");
    }

    return {
      success: false,
    };
  },
  zod$({
    email: z.string().email("Formato no Valido"),
    password: z.string().min(8, "Password must have at least 8 characters"),
  })
);

export default component$(() => {
  useStylesScoped$(styles);

  const action = useLoginAction();

  return (
    <Form class="login-form mt-5" action={action}>
      <div class="relative">
        <label for="email">Email Address</label>
        <input name="email" type="text" placeholder="Email address" />
        {action.value?.failed ? (
          <p>{action.value.fieldErrors?.email}</p>
        ) : undefined}
      </div>
      <div class="relative">
        <label for="password">Password</label>
        <input name="password" type="password" placeholder="Password" />
        {action.value?.failed ? (
          <p>{action.value.fieldErrors?.password}</p>
        ) : undefined}
      </div>
      <div class="relative">
        <button type="submit">Ingresar</button>
      </div>
    </Form>
  );
});

export const head: DocumentHead = {
  title: "Login",
  meta: [
    {
      name: "description",
      content: "Login Page",
    },
  ],
};
