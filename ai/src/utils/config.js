const env = import.meta.env.MODE;
export const config = {
  API_KEY:
    env === "development"
      ? "AIzaSyAHJ9xS2TS5PxnOwQy49ZSrhIA7kckIyeQ"
      : import.meta.env.VITE_APP_BOT_API_KEY,
};
