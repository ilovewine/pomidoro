const serialize = (key: string, instance: InstanceType<new (...args: any[]) => {}>) => {
  return {
    [key]: JSON.stringify(instance),
  };
};

const deserialize = (serializedInstance: string, constructor: new (...args: any[]) => {}) => {
  const instance = JSON.parse(serializedInstance);
  return new constructor(instance);
};

export { serialize, deserialize };
