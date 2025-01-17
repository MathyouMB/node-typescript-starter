import { Datastore } from "../../infrastructure/datastores";

class ResourceService {
  private datastore: Datastore;

  constructor(datastore: Datastore) {
    this.datastore = datastore;
  }

  create = (test: any): any => {
    return this.datastore.createResource(test);
  };
}

export default ResourceService;
