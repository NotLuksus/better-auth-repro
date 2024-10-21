import { authClient } from "@/libs/auth-client";
import { getUser } from "@/libs/session";
import { createAsync } from "@solidjs/router";
import { createSignal } from "solid-js";

type SignupData = {
  email: string;
  password: string;
  name: string;
};

type SigninData = {
  email: string;
  password: string;
};

export default function Home() {
  const user = createAsync(() => getUser());
  const [signupData, setSignupData] = createSignal<SignupData>({
    email: "",
    password: "",
    name: "",
  });

  const [signinData, setSigninData] = createSignal<SigninData>({
    email: "",
    password: "",
  });

  return (
    <main style={{ display: "flex", "flex-direction": "column", gap: "1rem" }}>
      <p>{user()?.email}</p>
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          gap: "1rem",
        }}
      >
        <h1>Sign Up</h1>
        <input
          placeholder="Email"
          type="email"
          value={signupData().email}
          onInput={(e) =>
            setSignupData({ ...signupData(), email: e.target.value })
          }
        />
        <input
          placeholder="Password"
          type="password"
          value={signupData().password}
          onInput={(e) =>
            setSignupData({ ...signupData(), password: e.target.value })
          }
        />
        <input
          placeholder="Name"
          type="text"
          value={signupData().name}
          onInput={(e) =>
            setSignupData({ ...signupData(), name: e.target.value })
          }
        />
        <button
          onClick={async () => {
            await authClient.signUp.email(
              {
                ...signupData(),
              },
              {
                onSuccess: (ctx) => {
                  console.log("Sign up successful");
                },
                onError: (ctx) => {
                  console.error(ctx.error);
                },
              }
            );
          }}
        >
          Sign Up
        </button>
      </div>
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          gap: "1rem",
        }}
      >
        <h1>Sign In</h1>
        <input
          placeholder="Email"
          type="email"
          value={signinData().email}
          onInput={(e) =>
            setSigninData({ ...signinData(), email: e.target.value })
          }
        />
        <input
          placeholder="Password"
          type="password"
          value={signupData().password}
          onInput={(e) =>
            setSigninData({ ...signinData(), password: e.target.value })
          }
        />
        <button
          onClick={async () => {
            await authClient.signIn.email(
              {
                ...signinData(),
              },
              {
                onSuccess: (ctx) => {
                  console.log("Sign in successful");
                },
                onError: (ctx) => {
                  console.error(ctx.error);
                },
              }
            );
          }}
        >
          Sign In
        </button>
      </div>
      <button
        onClick={async () => {
          await authClient.signOut(
            {},
            {
              onSuccess: (ctx) => {
                console.log("Sign out successful");
              },
              onError: (ctx) => {
                console.error(ctx.error);
              },
            }
          );
        }}
      >
        Sign Out
      </button>
    </main>
  );
}
