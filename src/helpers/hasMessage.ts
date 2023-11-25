const hasMessage = (x: unknown): x is { message: string } =>
  Boolean(
    typeof x === "object" &&
      x &&
      "message" in x &&
      typeof x.message === "string"
  );

export default hasMessage;
