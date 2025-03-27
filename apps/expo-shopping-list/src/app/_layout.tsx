// apps/my-expo-app/app/_layout.tsx
import { Slot } from "expo-router";
import { ClerkProvider, ClerkLoaded } from "@clerk/clerk-expo";
import { tokenCache } from "apps/expo-shopping-list/cache";

const key = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!key) {
  throw new Error("No frontend api key found");
}

export default function Layout() {
  return (
    <ClerkProvider publishableKey={key} tokenCache={tokenCache}>
      <ClerkLoaded>
        <Slot />
      </ClerkLoaded>
    </ClerkProvider>
  );
}
