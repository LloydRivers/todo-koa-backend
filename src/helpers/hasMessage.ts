const hasMessage = (value: unknown): value is { message: string } =>
  Boolean(typeof value === 'object' && value && 'message' in value && typeof value.message === 'string');

export default hasMessage;
