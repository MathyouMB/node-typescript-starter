import ResourceService from "../../../src/app/services/ResourceService";
import { InMemoryStore } from "../../../src/infrastructure/datastores";

describe("ResourceService", () => {
  let datastore: InMemoryStore;
  let resourceService: ResourceService;

  beforeEach(() => {
    datastore = new InMemoryStore();
    resourceService = new ResourceService(datastore);
  });

  describe("create", () => {
    it("will call createResource with the correct parameter", () => {
      const spy = jest.spyOn(datastore, "createResource");

      resourceService.create({});
      expect(spy).toHaveBeenCalledWith({});
    });

    it("will return the result of createResource", () => {
      const exampleData = {};
      const resource = resourceService.create(exampleData);
      expect(resource).toEqual({
        id: expect.any(String),
        createdAt: expect.any(Date),
        data: exampleData,
      });
    });
  });
});
