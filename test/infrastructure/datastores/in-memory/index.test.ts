import { InMemoryStore } from "../../../../src/infrastructure/datastores";

describe("InMemoryStore", () => {
  let store: InMemoryStore;

  beforeEach(() => {
    store = new InMemoryStore();
  });

  describe("createResource", () => {
    test("will create a resource", () => {
      const resource = store.createResource({});

      expect(resource).toEqual({
        id: expect.any(String),
        createdAt: expect.any(Date),
        data: {},
      });
    });
  });
});
